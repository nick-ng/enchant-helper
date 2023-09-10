<script lang="ts">
	import type { EnchantSale } from '$lib/schemas';

	import { formatDateForInput } from './utils';
	import { enchantBasesStore } from '$lib/stores/enchant-bases';

	export let onSubmit: (newSale: EnchantSale) => void | Promise<void>;
	export let enchantText: string;

	let enchantBase = '';
	let customEnchantBase = '';
	let priceDivine = 0;
	let dateSoldInput = formatDateForInput(new Date());

	$: dateSold = new Date(dateSoldInput).toISOString();
</script>

<details>
	<summary>Show</summary>
	<form
		on:submit={() => {
			const tempEnchantBase = enchantBase !== 'Custom' ? enchantBase : customEnchantBase;
			if (!tempEnchantBase) {
				alert('Please choose an enchant base.');
				return;
			}

			onSubmit({
				enchantText,
				enchantBase: enchantBase !== 'Custom' ? enchantBase : customEnchantBase,
				priceDivine,
				dateSold
			});
		}}
	>
		<table>
			<tbody>
				<tr>
					<td>Date</td>
					<input type="date" bind:value={dateSoldInput} /><button
						type="button"
						on:click={() => {
							dateSoldInput = formatDateForInput(new Date());
						}}>Today</button
					>
				</tr>
				<tr class="odd-bg">
					<td rowspan="2">Base</td>
					<td>
						<select class="block w-full" bind:value={enchantBase}>
							<option value="">Choose a base</option>
							<option value="Lab Service">Lab Service</option>
							<option value="Custom">Custom</option>
							{#each $enchantBasesStore as enchantBase}
								<option value={enchantBase.name}>{enchantBase.name}</option>
							{/each}
						</select>
					</td>
				</tr>
				<tr class="odd-bg">
					<td><input type="text" bind:value={customEnchantBase} /></td>
				</tr>
				<tr>
					<td>Divines</td>
					<td
						><input
							class="w-16 text-right"
							type="number"
							step="0.001"
							bind:value={priceDivine}
						/></td
					>
				</tr>
				<tr>
					<td colspan="2"><button class="w-full">Add</button></td>
				</tr>
			</tbody>
		</table>
	</form>
</details>
