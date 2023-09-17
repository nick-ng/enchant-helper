import fs from 'node:fs/promises';
import enchants from './enchant-database.json' assert { type: 'json' };

console.log(
	'enchants',
	enchants.filter((a) => a.statsQuery.length > 1)
);

const uniqueEnchants = {};

enchants.forEach((a) => {
	const { enchantText, statsQuery } = a;
	const enchantText2 = enchantText.replaceAll(/\d+/g, '\\d{1,9}');

	statsQuery.forEach((sq) => {
		const { id, value } = sq;

		if (!uniqueEnchants[enchantText2]) {
			uniqueEnchants[enchantText2] = {
				enchantText: enchantText2,
				// re: enchantText.replaceAll(/\d+/g, '\\d+').replaceAll(/ /g, '.{1,10}').toLowerCase(),
				ids: [id],
				value: value.min
			};
		} else {
			const temp = new Set(uniqueEnchants[enchantText2].ids);
			temp.add(id);
			uniqueEnchants[enchantText2].ids = [...temp];
			if (uniqueEnchants[enchantText2].value.min < 0) {
				uniqueEnchants[enchantText2].value = Math.min(
					uniqueEnchants[enchantText2].value,
					value.min
				);
			} else {
				uniqueEnchants[enchantText2].value = Math.max(
					uniqueEnchants[enchantText2].value,
					value.min
				);
			}
		}
	});
});

fs.writeFile('./enchants2.json', JSON.stringify(Object.values(uniqueEnchants), null, '  '));
