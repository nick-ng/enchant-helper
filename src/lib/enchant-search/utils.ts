import type { EnchantSale } from '$lib/schemas';

import { getSearchUrl } from '$lib/utils';

export const STORAGE_KEY_CHAOS_PER_DIVINE = 'PUX_CHAOS_PER_DIVINE';

export const getUniquesUrl = (poeTradeUrl: string, stats: object) => {
	return getSearchUrl(poeTradeUrl, stats, {
		type_filters: { filters: { rarity: { option: 'unique' } } }
	});
};

export const getIlvl86Url = (poeTradeUrl: string, stats: object) => {
	return getSearchUrl(poeTradeUrl, stats, {
		misc_filters: { filters: { ilvl: { min: 85 } } }
	});
};

export const getBlizzardCrownUrl = (poeTradeUrl: string, stats: object) => {
	return getSearchUrl(
		poeTradeUrl,
		stats,
		{
			misc_filters: { filters: { ilvl: { min: 83 } } }
		},
		'Blizzard Crown'
	);
};

export const groupSalesByBase = (
	enchantSales: EnchantSale[],
	enchantText: string
): { [enchantBase: string]: { averagePrice: number; sales: EnchantSale[] } } => {
	const salesByBase: { [enchantBase: string]: { averagePrice: number; sales: EnchantSale[] } } = {};

	const matchingSales = enchantSales.filter((s) => s.enchantText === enchantText);

	matchingSales.forEach((sale) => {
		const enchantBase = sale.enchantBase.trim();

		if (!salesByBase[enchantBase]) {
			salesByBase[enchantBase] = { sales: [], averagePrice: 0 };
		}

		salesByBase[enchantBase].sales.push(sale);
	});

	Object.keys(salesByBase).forEach((enchantBase) => {
		let totalWeight = 0;
		let totalDivinesAndWeight = 0;

		salesByBase[enchantBase].sales.forEach((sale) => {
			const weight = 1 / (new Date().valueOf() - new Date(sale.dateSold).valueOf());

			totalWeight += weight;
			totalDivinesAndWeight += sale.priceDivine * weight;
		});

		salesByBase[enchantBase].averagePrice = totalDivinesAndWeight / totalWeight;
	});

	return salesByBase;
};

export const formatDateForInput = (date: Date, includeTime = false): string => {
	const dateString = [
		date.getFullYear(),
		(date.getMonth() + 1).toString().padStart(2, '0'),
		date.getDate().toString().padStart(2, '0')
	].join('-');

	if (includeTime) {
		const timeString = [
			date.getHours().toString().padStart(2, '0'),
			date.getMinutes().toString().padStart(2, '0'),
			date.getSeconds().toString().padStart(2, '0')
		].join(':');

		return `${dateString}_${timeString}`;
	}

	return dateString;
};
