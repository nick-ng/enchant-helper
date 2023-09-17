export const getSearchUrl = (poeTradeUrl: string, stats: object, filters: object, type = '') => {
	const queryObject: {
		query: {
			stats: object;
			status: object;
			filters: object;
			type?: string;
		};
	} = {
		query: {
			stats,
			status: { option: 'online' },
			filters
		}
	};

	if (type) {
		queryObject.query.type = type;
	}

	const urlObject = new URL(poeTradeUrl);
	const query = new URLSearchParams();
	query.set('q', JSON.stringify(queryObject));

	urlObject.search = query.toString();

	return urlObject.toString();
};
