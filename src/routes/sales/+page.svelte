<script lang="ts">
	import { enchantBasesStore } from '$lib/stores/enchant-bases';
	import { enchantSalesStore } from '$lib/stores/enchant-sales';
	import { enchants } from '$lib/enchant-search/raw-enchant-data';
	import { formatDateForInput } from '$lib/enchant-search/utils';
	import { onMount } from 'svelte';

	const STORAGE_KEY_CHAOS_PER_DIVINE = 'PUX_CHAOS_PER_DIVINE';

	let manualSearchString = '';
	let enchantText = '';
	let enchantBase = '';
	let customEnchantBase = '';
	let priceInput = '';
	let chaosPerDivine = 230;
	let dateSoldInput = formatDateForInput(new Date());

	const parsePriceString = (priceString: string, chaosPerDivine: number) => {
		if (!priceString) {
			return 0;
		}
		const chaosMatch = priceString.match(/(\d+) *c/);
		const chaos = parseFloat(chaosMatch?.[1] || '0');

		const divineMatch = priceString.match(/(\d+) *d/);
		const divine = parseFloat(divineMatch?.[1] || '0');

		return divine + chaos / chaosPerDivine;
	};

	$: dateSold = new Date(dateSoldInput).toISOString();
	$: manualMatches = manualSearchString
		? enchants
				.filter(({ enchantText }) => {
					return enchantText.toLowerCase().includes(manualSearchString.toLowerCase());
				})
				.sort((a, b) => a.enchantText.localeCompare(b.enchantText))
		: [];
	$: priceDivine = parsePriceString(priceInput, chaosPerDivine);

	onMount(() => {
		chaosPerDivine = parseFloat(localStorage.getItem(STORAGE_KEY_CHAOS_PER_DIVINE) || '0');
	});
</script>

<div>
	<h1>Sales</h1>
	<div>
		Total sales: {$enchantSalesStore
			.reduce((accumulator, current) => accumulator + current.priceDivine, 0)
			.toFixed(2)} d
	</div>
	<label
		><span>Chaos per Divine:</span>
		<input
			type="number"
			bind:value={chaosPerDivine}
			on:change={(event) => {
				localStorage.setItem(STORAGE_KEY_CHAOS_PER_DIVINE, event.currentTarget.value);
			}}
		/></label
	>
	<form
		on:submit={() => {
			const tempEnchantBase = enchantBase !== 'Custom' ? enchantBase : customEnchantBase;
			if (!tempEnchantBase) {
				alert('Please choose an enchant base.');
				return;
			}

			if (!enchants.map((e) => e.enchantText).includes(enchantText)) {
				alert('Please choose an enchant.');
				return;
			}

			enchantSalesStore.update((previousEnchantSales) => {
				return previousEnchantSales
					.concat([
						{
							enchantText,
							enchantBase: enchantBase !== 'Custom' ? enchantBase : customEnchantBase,
							priceDivine,
							dateSold
						}
					])
					.sort((a, b) => new Date(a.dateSold).valueOf() - new Date(b.dateSold).valueOf());
			});
		}}
	>
		<table>
			<thead>
				<tr>
					<th>Enchant</th>
					<th>Base</th>
					<th>Custom</th>
					<th class="text-right">Price</th>
					<th>Date</th>
					<th>🗑</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border-subtle">
						<input class="block w-full" type="text" bind:value={manualSearchString} />
						<div>
							{#if manualSearchString !== enchantText}
								{#each manualMatches.slice(0, 10) as m}
									<label class="max-w-prose block break-normal">
										<button
											class="mt-1 hover:bg-gray-700"
											type="button"
											on:click={() => {
												enchantText = m.enchantText;
												manualSearchString = m.enchantText;
											}}>{m.enchantText}</button
										>
									</label>
								{/each}
							{/if}
							{#if manualMatches.length > 10}
								<div>+{manualMatches.length - 10} more</div>
							{/if}
						</div>
					</td>
					<td class="border-subtle">
						<select class="block w-full" bind:value={enchantBase}>
							<option value="">Choose a base</option>
							<option value="Lab Service">Lab Service</option>
							<option value="Custom">Custom</option>
							{#each $enchantBasesStore as enchantBase}
								<option value={enchantBase.name}>{enchantBase.name}</option>
							{/each}
						</select>
					</td>
					<td class="border-subtle">
						<input type="text" bind:value={customEnchantBase} />
					</td>
					<td class="border-subtle">
						<input class="text-right" type="text" bind:value={priceInput} />
					</td>
					<td class="border-subtle">
						<input type="date" bind:value={dateSoldInput} /><button
							type="button"
							on:click={() => {
								dateSoldInput = formatDateForInput(new Date());
							}}>Today</button
						>
					</td>
					<td><button>Add</button></td>
				</tr>
				{#each $enchantSalesStore as enchantSale, i}
					<tr>
						<td class="border-subtle px-1">{enchantSale.enchantText}</td>
						<td class="border-subtle px-1" colspan="2">{enchantSale.enchantBase}</td>
						<td class="text-right border-subtle px-1">{enchantSale.priceDivine} d</td>
						<td class="border-subtle px-1">{formatDateForInput(new Date(enchantSale.dateSold))}</td>
						<td class="border-subtle px-1">
							<button
								type="button"
								on:click={() => {
									enchantSalesStore.update((previousSales) => {
										return previousSales.filter((_, ii) => i !== ii);
									});
								}}>🗑</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</form>
</div>
