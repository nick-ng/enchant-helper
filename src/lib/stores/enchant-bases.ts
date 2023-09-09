import type { EnchantBase } from '$lib/schemas';

import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import z from 'zod';
import { enchantBaseSchema, jsonSafeParseS } from '$lib/schemas';

const STORAGE_KEY_ENCHANT_BASES = 'PUX_ENCHANT_BASES';

let enchantBases: EnchantBase[] = [{ name: '', tradeLink: '', imageUrl: '' }];

if (browser) {
	const result1 = jsonSafeParseS(
		z.array(enchantBaseSchema),
		localStorage.getItem(STORAGE_KEY_ENCHANT_BASES)
	);

	if (result1.success) {
		enchantBases = result1.data;
	}
}

export const enchantBasesStore = writable<EnchantBase[]>(enchantBases);

if (browser) {
	enchantBasesStore.subscribe((newEnchantBases) => {
		localStorage.setItem(STORAGE_KEY_ENCHANT_BASES, JSON.stringify(newEnchantBases));
	});
}
