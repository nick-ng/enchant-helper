<script lang="ts">
	import type { EnchantBase } from '$lib/schemas';
	import { onMount } from 'svelte';
	import z from 'zod';
	import {
		enchantBaseSchema,
		// optionsSchema,
		jsonSafeParseS
	} from '$lib/schemas';

	const STORAGE_KEY_ENCHANT_BASES = 'PUX_ENCHANT_BASES';
	// const STORAGE_KEY_STASH_SIZE = 'PUX_ENCHANT_TAB_SIZE';

	let enchantBases: EnchantBase[] = [{ name: '', tradeLink: '', imageUrl: '' }];

	const chunkBases = (enchantBases: EnchantBase[], chunkSize: number) => {
		let result = [];

		console.log('enchantBases', enchantBases);

		for (let i = 0; i < enchantBases.length; i += chunkSize) {
			result.push(enchantBases.slice(i, i + chunkSize));
		}

		console.log('result', result);

		return result;
	};

	const saveEnchantBases = (enchantBases: EnchantBase[]) => {
		localStorage.setItem(STORAGE_KEY_ENCHANT_BASES, JSON.stringify(enchantBases));
	};

	onMount(() => {
		const result1 = jsonSafeParseS(
			z.array(enchantBaseSchema),
			localStorage.getItem(STORAGE_KEY_ENCHANT_BASES)
		);

		if (result1.success) {
			enchantBases = result1.data;
		}
	});
</script>

<div>
	<h1 class="mt-1">Enchant Helper</h1>
	<div class="flex flex-row justify-start mt-2">
		<div class="basis-prose">
			<button
				on:click={() => {
					enchantBases = enchantBases.concat([{ name: '', tradeLink: '', imageUrl: '' }]);

					saveEnchantBases(enchantBases);
				}}>Add Base</button
			>
			{#if enchantBases.length > 0}
				<table>
					<thead>
						<tr>
							<th class="text-right">#</th>
							<th class="text-left">Item</th>
							<th class="text-left">Trade Link</th>
							<th class="text-left">Image URL</th>
							<th class="text-center">🗑️</th>
						</tr>
					</thead>
					<tbody>
						{#each enchantBases as enchantBase, i}
							<tr>
								<td class="text-right">{i + 1}</td>
								<td>
									<input
										type="text"
										value={enchantBase.name}
										on:input={(e) => {
											enchantBase.name = e.currentTarget.value;

											saveEnchantBases(enchantBases);
										}}
									/>
								</td>
								<td>
									<input
										type="text"
										value={enchantBase.tradeLink}
										on:input={(e) => {
											enchantBase.tradeLink = e.currentTarget.value;

											saveEnchantBases(enchantBases);
										}}
									/>
								</td>
								<td>
									<input
										type="text"
										value={enchantBase.imageUrl}
										on:input={(e) => {
											enchantBase.imageUrl = e.currentTarget.value;

											saveEnchantBases(enchantBases);
										}}
									/>
								</td>
								<td>
									<button
										on:click={() => {
											if (confirm(`Are you sure you want to remove ${enchantBase.name}?`)) {
												enchantBases = enchantBases.filter((_, ii) => ii !== i);

												saveEnchantBases(enchantBases);
											}
										}}>🗑️</button
									>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</div>
		<div class="ml-4">
			{#each chunkBases(enchantBases, 36) as enchantChunk, i}
				<h3>Tab {i + 1}</h3>
				<div class="grid grid-cols-6 grid-rows-6 mb-2">
					{#each enchantChunk as enchantBase}
						<a class="block border-default w-20 h-20" target="_blank" href={enchantBase.tradeLink}>
							{#if enchantBase.imageUrl}
								<img
									class="object-cover"
									src={enchantBase.imageUrl}
									alt={enchantBase.name}
									title={enchantBase.name}
								/>
							{:else}
								<div class="flex items-center justify-center h-full w-full">
									{enchantBase.name}
								</div>
							{/if}
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
