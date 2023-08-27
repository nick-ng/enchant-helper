import z from 'zod';

export const enchantBaseSchema = z.object({
	name: z.string(),
	tradeLink: z.string(),
	note: z.string()
});

export type EnchantBase = z.infer<typeof enchantBaseSchema>;

export const optionsSchema = z.object({
	tabSize: z.optional(z.number())
});

export type Options = z.infer<typeof optionsSchema>;

export const jsonSafeParse = (str?: string | null) => {
	if (!str) {
		return {
			error: 'jsonSafeParse: string is empty',
			success: false as const
		};
	}

	try {
		return {
			json: JSON.parse(str),
			success: true as const
		};
	} catch (e) {
		console.error('error parsing json', e);
		return {
			error: `jsonSafeParse: couldn't parse ${str}`,
			success: false as const
		};
	}
};

export const jsonSafeParseS = <T>(schema: z.Schema<T>, str?: string | null) => {
	const resJ = jsonSafeParse(str);

	if (!resJ.success) {
		return resJ;
	}

	const res = schema.safeParse(resJ.json);

	if (!res.success) {
		return res;
	}

	return res;
};
