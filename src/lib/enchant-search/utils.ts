import type { EnchantSale } from '$lib/schemas';

export const STORAGE_KEY_CHAOS_PER_DIVINE = 'PUX_CHAOS_PER_DIVINE';

export const getUniquesUrl = (poeTradeUrl: string) => {
	try {
		const tradeUrlObject = new URL(poeTradeUrl);
		const poeTradeQuery = tradeUrlObject.searchParams.get('q');

		if (poeTradeQuery) {
			const tempQuery = JSON.parse(poeTradeQuery);
			const uniqueQueryObject = {
				query: {
					...tempQuery.query,
					status: { option: 'online' },
					filters: {
						type_filters: { filters: { rarity: { option: 'unique' } } }
					}
				}
			};

			const uniqueUrlObject = new URL(poeTradeUrl);
			const uniqueQuery = new URLSearchParams();
			uniqueQuery.set('q', JSON.stringify(uniqueQueryObject));

			uniqueUrlObject.search = uniqueQuery.toString();

			return uniqueUrlObject.toString();
		}

		return poeTradeUrl;
	} catch (_e) {
		return poeTradeUrl;
	}
};

export const getIlvl86Url = (poeTradeUrl: string) => {
	try {
		const tradeUrlObject = new URL(poeTradeUrl);
		const poeTradeQuery = tradeUrlObject.searchParams.get('q');

		if (poeTradeQuery) {
			const tempQuery = JSON.parse(poeTradeQuery);
			const ilvl86QueryObject = {
				query: {
					...tempQuery.query,
					status: { option: 'online' },
					filters: {
						misc_filters: { filters: { ilvl: { min: 85 } } }
					}
				}
			};

			const ilvl86UrlObject = new URL(poeTradeUrl);
			const ilvl86Query = new URLSearchParams();
			ilvl86Query.set('q', JSON.stringify(ilvl86QueryObject));

			ilvl86UrlObject.search = ilvl86Query.toString();

			return ilvl86UrlObject.toString();
		}

		return poeTradeUrl;
	} catch (_e) {
		return poeTradeUrl;
	}
};

export const getBlizzardCrownUrl = (poeTradeUrl: string) => {
	try {
		const tradeUrlObject = new URL(poeTradeUrl);
		const poeTradeQuery = tradeUrlObject.searchParams.get('q');

		if (poeTradeQuery) {
			const tempQuery = JSON.parse(poeTradeQuery);
			const blizzardCrownQueryObject = {
				query: {
					...tempQuery.query,
					status: { option: 'online' },
					type: 'Blizzard Crown',
					filters: {
						misc_filters: { filters: { ilvl: { min: 83 } } }
					}
				}
			};

			const blizzardCrownUrlObject = new URL(poeTradeUrl);
			const blizzardCrownQuery = new URLSearchParams();
			blizzardCrownQuery.set('q', JSON.stringify(blizzardCrownQueryObject));

			blizzardCrownUrlObject.search = blizzardCrownQuery.toString();

			return blizzardCrownUrlObject.toString();
		}

		return poeTradeUrl;
	} catch (_e) {
		return poeTradeUrl;
	}
};

export const groupSalesByBase = (
	enchantSales: EnchantSale[],
	enchantText: string
): { [enchantBase: string]: { averagePrice: number; sales: EnchantSale[] } } => {
	const salesByBase: { [enchantBase: string]: { averagePrice: number; sales: EnchantSale[] } } = {};

	const matchingSales = enchantSales.filter((s) => s.enchantText === enchantText);

	matchingSales.forEach((sale) => {
		const { enchantBase } = sale;

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
