import type { EnchantDatum } from '$lib/schemas';

import { writable } from 'svelte/store';
import z from 'zod';
import { enchantDatumSchema } from '$lib/schemas';

import rawEnchantData from './enchant-data.json' assert { type: 'json' };

const enchantData = z.array(enchantDatumSchema).parse(rawEnchantData);

export const enchantDataStore = writable<EnchantDatum[]>(enchantData);
