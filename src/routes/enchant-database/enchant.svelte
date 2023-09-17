<script lang="ts">
	import type { EnchantDatum } from '$lib/schemas';

	export let enchant: EnchantDatum;
	export let handleDelete: () => void | Promise<void>;
	export let handleEdit: (newEnchant: EnchantDatum) => void | Promise<void>;

	let idsString = enchant.ids.join(';');
</script>

<div class="border-subtle mb-1">
	<h3>{enchant.enchantText}</h3>
	<button type="button" on:click={handleDelete}>Delete</button>
	<form
		on:submit={() => {
			handleEdit({
				...enchant,
				ids: idsString.split(';')
			});
		}}
	>
		<table>
			<tbody>
				<tr>
					<td>Enchant Ids</td>
					<td><input class="w-96" type="text" bind:value={idsString} /></td>
				</tr>
			</tbody>
		</table>
		<button type="submit">Save</button>
	</form>
</div>
