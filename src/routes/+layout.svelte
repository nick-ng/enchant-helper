<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen relative">
	<div class="flex flex-row justify-start pb-10">
		<nav class="flex flex-col mx-2 my-4">
			<a href="/">Enchant Search</a>
			<a href="/bases">Bases</a>
		</nav>
		<div class="mx-1">
			<slot />
		</div>
	</div>
	<div class="absolute w-full bottom-0 flex flex-row justify-center my-2">
		<p class="max-w-prose">This site is not affiliated with or endorsed by Grinding Gear Games.</p>
	</div>
</div>
