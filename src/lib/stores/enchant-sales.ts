import type { EnchantSale } from '$lib/schemas';

import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import z from 'zod';
import { enchantSaleSchema, jsonSafeParseS } from '$lib/schemas';

const STORAGE_KEY_ENCHANT_SALES = 'PUX_ENCHANT_SALES';

let enchantSales: EnchantSale[] = [];

if (browser) {
	const result1 = jsonSafeParseS(
		z.array(enchantSaleSchema),
		localStorage.getItem(STORAGE_KEY_ENCHANT_SALES)
	);

	if (result1.success) {
		enchantSales = result1.data;
	}
}

export const enchantSalesStore = writable<EnchantSale[]>(enchantSales);

if (browser) {
	enchantSalesStore.subscribe((newEnchantSales) => {
		localStorage.setItem(STORAGE_KEY_ENCHANT_SALES, JSON.stringify(newEnchantSales));
	});
}
