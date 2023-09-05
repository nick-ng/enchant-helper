<script lang="ts">
	import { onMount } from 'svelte';
	import { processImage } from '$lib/ocr';

	let imageBase64: string = '';
	let text = '';
	let status = 'Stand By';

	onMount(() => {
		document.onpaste = async (event) => {
			const items = event.clipboardData?.items;

			console.log('items', items);

			if (!items) {
				status = 'No Image';
				return;
			}

			status = 'Processing';

			for (const item of items) {
				console.log('item.kind', item.kind);

				if (item.kind === 'file') {
					const blob = item.getAsFile();
					console.log('item.type', item.type);

					if (blob) {
						const reader = new FileReader();
						reader.readAsDataURL(blob);
						reader.onloadend = () => {
							const temp = reader.result?.toString();
							if (temp) {
								console.log('imageBase64', imageBase64);
								imageBase64 = temp;
							}
						};

						text = await processImage(blob);
						status = 'Done';
					}
				}
			}
		};
	});
</script>

<div>
	<h2>Enchant Search</h2>
	{#if imageBase64}
		<img src={imageBase64} alt="capture" />
	{:else}
		<p>Paste your image</p>
	{/if}
	<p>{status}</p>
	<pre>{text}</pre>
</div>
