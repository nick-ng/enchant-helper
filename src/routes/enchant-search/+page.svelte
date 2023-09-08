<script lang="ts">
	import { onMount } from 'svelte';
	import { processImage } from '$lib/ocr';
	import { enchants } from './raw-enchant-data';
	import { getUniquesUrl, getIlvl86Url, getBlizzardCrownUrl } from './utils';

	let imageBase64: string = '';
	let text = '';
	let status = 'Paste an image';
	let matchingEnchants: {
		enchantText: string;
		poeTradeUrl: string;
		uniquesTradeUrl: string;
		ilvlTradeUrl: string;
		blizzardCrownUrl: string;
		order: number;
	}[] = [];

	onMount(() => {
		document.onpaste = async (event) => {
			const items = event.clipboardData?.items;

			if (!items) {
				status = 'Not an image. Paste an image';
				return;
			}

			status = 'Processing';

			for (const item of items) {
				if (item.kind === 'file') {
					const blob = item.getAsFile();

					if (blob) {
						matchingEnchants = [];

						const reader = new FileReader();
						reader.readAsDataURL(blob);
						reader.onloadend = () => {
							const temp = reader.result?.toString();
							if (temp) {
								imageBase64 = temp;
							}
						};

						text = await processImage(blob);

						const text2 = text.replaceAll(/\s+/g, ' ').toLowerCase();

						enchants.forEach(({ enchantText, poeTradeUrl }) => {
							const index = text2.indexOf(enchantText.toLowerCase());
							if (index >= 0) {
								matchingEnchants = [
									...matchingEnchants,
									{
										enchantText,
										poeTradeUrl,
										uniquesTradeUrl: getUniquesUrl(poeTradeUrl),
										ilvlTradeUrl: getIlvl86Url(poeTradeUrl),
										blizzardCrownUrl: getBlizzardCrownUrl(poeTradeUrl),
										order: index
									}
								];
							}
						});

						matchingEnchants.sort((a, b) => a.order - b.order);
					}
					status = 'Paste another image';
				} else {
					status = 'Not an image. Paste an image';
				}
			}
		};
	});
</script>

<div>
	<h1 class="mt-1">Enchant Search</h1>
	<div class="flex flex-row">
		{#if imageBase64}
			<img class="mr-2" src={imageBase64} alt="capture" />
		{/if}
		<div>
			{#if matchingEnchants.length > 0}
				<table>
					<thead>
						<th class="px-1 border-default text-left">Enchant</th>
						<th class="px-1 border-default">Uniques</th>
						<th class="px-1 border-default">ilvl 85+</th>
						<th class="px-1 border-default">Blizzard Crown</th>
					</thead>
					<tbody>
						{#each matchingEnchants as e}
							<tr>
								<td class="px-1 border-default max-w-xs"
									><a class="no-underline" href={e.poeTradeUrl} target="_blank">{e.enchantText}</a
									></td
								>
								<td class="px-1 border-default"
									><a href={e.uniquesTradeUrl} target="_blank">Uniques</a></td
								>
								<td class="px-1 border-default"
									><a href={e.ilvlTradeUrl} target="_blank">ilvl 85+</a></td
								>
								<td class="px-1 border-default"
									><a href={e.blizzardCrownUrl} target="_blank">Blizzard Crown</a></td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
			<p>{status}</p>
		</div>
	</div>
	<p>Searching {enchants.length} enchants</p>
	{#if text}
		<details>
			<summary>Debug</summary>
			<pre>{text}</pre>
		</details>
	{/if}
</div>
