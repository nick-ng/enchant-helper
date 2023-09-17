<script lang="ts">
	import { onMount } from 'svelte';
	import { processImage } from '$lib/ocr';
	import { enchantSalesStore } from '$lib/stores/enchant-sales';
	import { enchantDataStore } from '$lib/stores/enchant-data';

	import {
		getUniquesUrl,
		getIlvl86Url,
		getBlizzardCrownUrl,
		groupSalesByBase,
		STORAGE_KEY_CHAOS_PER_DIVINE
	} from './utils';

	const STORAGE_KEY_LAB_NOTES_BASE64 = 'PUX_LAB_NOTES_BASE64';
	const STORAGE_KEY_LAB_POI_BASE64 = 'PUX_LAB_POI_BASE64';

	let imageBase64 = '';
	let text = '';
	let text2 = '';
	let status = 'Paste an image (Ctrl + v) or';
	let matchingEnchants: {
		enchantText: string;
		value: number;
		ids: string[];
		order: number;
	}[] = [];
	let manualSearchString = '';
	let chaosPerDivine = 230;

	let labNotesBase64 = '';
	let labPoIBase64 = '';

	$: manualMatches = manualSearchString
		? $enchantDataStore
				.filter(({ enchantText }) => {
					return enchantText.toLowerCase().includes(manualSearchString.toLowerCase());
				})
				.sort((a, b) => a.enchantText.localeCompare(b.enchantText))
				.slice(0, 10)
		: [];

	onMount(() => {
		const temp1 = localStorage.getItem(STORAGE_KEY_LAB_NOTES_BASE64);

		if (temp1) {
			labNotesBase64 = temp1;
		}

		const temp2 = localStorage.getItem(STORAGE_KEY_LAB_POI_BASE64);

		if (temp2) {
			labPoIBase64 = temp2;
		}

		const temp3 = localStorage.getItem(STORAGE_KEY_CHAOS_PER_DIVINE);

		if (typeof temp3 === 'string') {
			chaosPerDivine = parseFloat(temp3 || '0');
		}

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

						text2 = text.replaceAll(/\s+/g, ' ').replaceAll(/[‘’]/g, "'").toLowerCase();

						$enchantDataStore.forEach(({ enchantText, ids, value }) => {
							const reString = enchantText.replaceAll(/\+/g, '\\+').replaceAll(/ /g, '.{1,9}');

							try {
								const re = new RegExp(reString, 'i');

								const m = text2.match(re);

								if (typeof m?.index === 'number') {
									console.log('re', re);
									matchingEnchants = [
										...matchingEnchants,
										{
											enchantText,
											ids,
											value,
											order: m.index
										}
									];
								}
							} catch (e) {
								console.log('e', e);
							}
							console.log('reString', reString);
						});

						matchingEnchants.sort((a, b) => a.order - b.order);
					}

					if (matchingEnchants.length > 0) {
						manualSearchString = '';
						status = 'Paste another image';
					} else {
						status = 'No enchants found. Paste another image';
					}
				} else {
					status = 'Not an image. Paste an image';
				}
			}
		};
	});
</script>

<div>
	<h1>Enchant Search</h1>
	<div class="flex flex-row">
		<div class="mr-2">
			{#if imageBase64}
				<img src={imageBase64} alt="capture" />
			{/if}
			<p>{status}</p>
		</div>
		<div>
			<input
				class="w-96 mb-2"
				type="text"
				bind:value={manualSearchString}
				placeholder="Manually enter an enchant"
			/>
			{#if [...manualMatches, ...matchingEnchants].length > 0}
				<table>
					<thead>
						<th class="px-1 border-default text-left">Enchant</th>
						<th class="px-1 border-default">Uniques</th>
						<th class="px-1 border-default">ilvl 85+</th>
						<th class="px-1 border-default">Blizzard Crown</th>
						<th class="px-1 border-default">Past Sales</th>
					</thead>
					<tbody>
						{#each [...manualMatches, ...matchingEnchants] as e}
							{@const thisEnchantText = e.enchantText.replace('\\d{1,9}', e.value.toString())}
							{@const thisEnchantSales = groupSalesByBase($enchantSalesStore, thisEnchantText)}
							{@const statsQuery = [
								{
									type: 'count',
									value: { min: 1 },
									filters: e.ids.map((id) => ({
										id,
										value: {
											min: e.value,
											max: e.value
										}
									}))
								}
							]}
							<tr>
								<td class="px-1 border-default max-w-xs">{thisEnchantText}</td>
								<td class="px-1 border-default"
									><a
										href={getUniquesUrl(
											'https://www.pathofexile.com/trade/search/Ancestor',
											statsQuery
										)}
										target="uniqueBase">Uniques</a
									></td
								>
								<td class="px-1 border-default"
									><a
										href={getIlvl86Url(
											'https://www.pathofexile.com/trade/search/Ancestor',
											statsQuery
										)}
										target="ilvl85Base">ilvl 85+</a
									></td
								>
								<td class="px-1 border-default"
									><a
										href={getBlizzardCrownUrl(
											'https://www.pathofexile.com/trade/search/Ancestor',
											statsQuery
										)}
										target="blizzardCrownBase">Blizzard Crown</a
									></td
								>
								<td class="px-1 border-default"
									><ul class="ml-4 list-disc">
										{#each Object.entries(thisEnchantSales).sort((a, b) => b[1].averagePrice - a[1].averagePrice) as thisBase}
											<li>
												{thisBase[1].sales.length}× {thisBase[0]}:
												{#if thisBase[1].averagePrice < 1}
													<span class="text-gray-300"
														>{Math.round(thisBase[1].averagePrice * chaosPerDivine)} c</span
													>
												{:else}
													<span class="text-lime-300"
														>{Math.round(thisBase[1].averagePrice * 100) / 100} d</span
													>
												{/if}
											</li>
										{/each}
									</ul></td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</div>
	</div>
	<details open={!!(labNotesBase64 || labPoIBase64)}>
		<summary>Extra</summary>
		<div>
			<button
				on:click={() => {
					if (!imageBase64) {
						return;
					}

					labNotesBase64 = imageBase64;
					localStorage.setItem(STORAGE_KEY_LAB_NOTES_BASE64, labNotesBase64);
				}}>Set as Lab Notes</button
			>
			<button
				on:click={() => {
					if (!imageBase64) {
						return;
					}

					labPoIBase64 = imageBase64;
					localStorage.setItem(STORAGE_KEY_LAB_POI_BASE64, labPoIBase64);
				}}>Set as Points of Interest</button
			>
			{#if labNotesBase64}
				<img class="max-w-4xl" src={labNotesBase64} alt="Custom 1" />
				<button
					on:click={() => {
						labNotesBase64 = '';
						localStorage.setItem(STORAGE_KEY_LAB_NOTES_BASE64, '');
					}}>Delete Lab Notes</button
				>
			{/if}
			{#if labPoIBase64}
				<img class="max-w-4xl" src={labPoIBase64} alt="Custom 2" />
				<button
					on:click={() => {
						labPoIBase64 = '';
						localStorage.setItem(STORAGE_KEY_LAB_POI_BASE64, '');
					}}>Delete Points of Interest</button
				>
			{/if}
		</div>
	</details>
	<p>Searching {$enchantDataStore.length} enchants</p>
	<div class="max-w-prose">
		<h2>Instructions</h2>
		<p>
			Use Windows Snipping Tool (Win + Shift + s) or a similar program to take a screenshot of the
			enchant text in the Divine Font (see picture below for details).
		</p>
		<p>
			Do not include the glove/boot/helmet icons. The <a
				href="https://github.com/naptha/tesseract.js"
				target="_blank">OCR library</a
			> I'm using will try and detect those as letters and that can prevent this program from finding
			some enchants.
		</p>
	</div>
	<img src="/divine-font-1.png" alt="Example divine font capture region" />
	{#if text}
		<details>
			<summary>Debug</summary>
			<pre>{text}</pre>
			<pre>{text2}</pre>
		</details>
	{/if}
</div>
