<script lang="ts">
	import '../app.css';
</script>

<div class="flex flex-row justify-start">
	<nav class="flex flex-col mx-2 my-4">
		<a href="/">Bases</a>
		<a href="/enchant-search">Enchant Search</a>
	</nav>
	<div class="mx-1">
		<slot />
	</div>
</div>
