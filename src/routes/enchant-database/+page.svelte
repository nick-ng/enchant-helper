<script lang="ts">
	import { enchantDataStore } from '$lib/stores/enchant-data';

	import Enchant from './enchant.svelte';

	let filterString = '';

	$: filteredEnchants = [...$enchantDataStore].filter((enchant) => {
		if (!filterString) {
			return true;
		}

		return enchant.enchantText.toLowerCase().includes(filterString.toLowerCase());
	});
</script>

<div>
	<h1>Enchant Database</h1>
	<p>Don't change anything on this page unless you know what is going on.</p>
	<a
		class="inline-block button-default no-underline text-white"
		href={`data:text/json;charset=utf-8,${JSON.stringify($enchantDataStore)}`}
		download={`enchant-database-${$enchantDataStore.length}.json`
			.replaceAll(/:/g, '')
			.replaceAll(/[^a-z0-9-.]+/gi, '_')}
	>
		Export
	</a>
	<input class="block my-1" placeholder="Filter enchants" type="text" bind:value={filterString} />
	{#each filteredEnchants as enchant}
		{#key enchant.enchantText}
			<Enchant
				{enchant}
				handleDelete={() => {
					enchantDataStore.update((prevData) => {
						return prevData.filter((e) => e.enchantText !== enchant.enchantText);
					});
				}}
				handleEdit={(newEnchantData) => {
					console.log('newEnchantData', newEnchantData);
					enchantDataStore.update((prevData) => {
						return prevData
							.filter((e) => e.enchantText !== enchant.enchantText)
							.concat([newEnchantData]);
					});
				}}
			/>
		{/key}
	{/each}
	<details>
		<summary>Debug</summary>
		<pre>{JSON.stringify($enchantDataStore, null, '  ')}</pre>
	</details>
</div>
