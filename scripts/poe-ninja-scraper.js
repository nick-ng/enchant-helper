(() => {
	const segment = document.querySelector('.item-overview');

	const anchors = [...segment.getElementsByTagName('a')].map((a) => ({
		href: encodeURIComponent(a.href),
		text: a.textContent
	}));

	const myLink = document.createElement('a');

	myLink.href = `data:text/json;charset=utf-8,${JSON.stringify(anchors)}`;
	myLink.download = 'test.json';

	myLink.click();
})();
