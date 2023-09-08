(() => {
	const segment = document.querySelector('.item-overview');

	const anchors = [...segment.getElementsByTagName('a')].map((a) => ({
		href: a.href,
		text: a.textContent
	}));

	const myLink = document.createElement('a');

	const tempEnchants = [];

	let tempEnchantText = '';
	for (let i = 0; i < anchors.length; i++) {
		if (anchors[i].href.startsWith('https://www.pathofexile.com/trade')) {
			tempEnchants.push({
				enchantText: tempEnchantText,
				poeTradeUrl: encodeURIComponent(anchors[i].href)
			});
		} else {
			tempEnchantText = anchors[i].text;
		}
	}

	myLink.href = `data:text/json;charset=utf-8,${JSON.stringify(tempEnchants)}`;
	myLink.download = `enchants-${Date.now()}.json`;

	myLink.click();
})();
