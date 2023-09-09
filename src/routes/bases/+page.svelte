<script lang="ts">
	import type { EnchantBase } from '$lib/schemas';
	import { enchantBasesStore } from '$lib/stores/enchant-bases';

	const chunkBases = (enchantBases: EnchantBase[], chunkSize: number) => {
		let result = [];

		for (let i = 0; i < enchantBases.length; i += chunkSize) {
			result.push(enchantBases.slice(i, i + chunkSize));
		}

		return result;
	};
</script>

<div>
	<h1 class="mt-1">Enchant Bases</h1>
	<div class="flex flex-row justify-start mt-2">
		<div class="basis-prose">
			<button
				on:click={() => {
					enchantBasesStore.update((previousEnchantBases) => {
						return previousEnchantBases.concat([{ name: '', tradeLink: '', imageUrl: '' }]);
					});
				}}>Add Base</button
			>
			{#if $enchantBasesStore.length > 0}
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
						{#each $enchantBasesStore as enchantBase, i}
							<tr>
								<td class="text-right">{i + 1}</td>
								<td>
									<input
										type="text"
										value={enchantBase.name}
										on:input={(e) => {
											enchantBasesStore.update((previousEnchantBases) => {
												previousEnchantBases[i].name = e.currentTarget.value;

												return previousEnchantBases;
											});
										}}
									/>
								</td>
								<td>
									<input
										type="text"
										value={enchantBase.tradeLink}
										on:input={(e) => {
											enchantBasesStore.update((previousEnchantBases) => {
												previousEnchantBases[i].tradeLink = e.currentTarget.value;

												return previousEnchantBases;
											});
										}}
									/>
								</td>
								<td>
									<input
										type="text"
										value={enchantBase.imageUrl}
										on:input={(e) => {
											enchantBasesStore.update((previousEnchantBases) => {
												previousEnchantBases[i].imageUrl = e.currentTarget.value;

												return previousEnchantBases;
											});
										}}
									/>
								</td>
								<td>
									<button
										on:click={() => {
											if (confirm(`Are you sure you want to remove ${enchantBase.name}?`)) {
												enchantBasesStore.update((previousEnchantBases) => {
													return previousEnchantBases.filter((_, ii) => ii !== i);
												});
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
			{#each chunkBases($enchantBasesStore, 36) as enchantChunk, i}
				<h3>Tab {i + 1}</h3>
				<div class="grid grid-cols-6 grid-rows-6 mb-2">
					{#each enchantChunk as enchantBase}
						<a class="block border-default w-20 h-20" target="buybase" href={enchantBase.tradeLink}>
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
