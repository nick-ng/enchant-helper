<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen relative mx-2 mt-2">
	<nav>
		<a class="button-default no-underline inline-block py-1" href="/">Search</a>
		<a class="button-default no-underline inline-block py-1" href="/bases">Bases</a>
		<a class="button-default no-underline inline-block py-1" href="/sales">Sales</a>
		<a class="button-default no-underline inline-block py-1" href="/colour">Colour</a>
		<a class="button-default no-underline inline-block py-1" href="/dev">Dev</a>
	</nav>
	<div>
		<slot />
	</div>
	<div class="absolute w-full bottom-0 flex flex-row justify-center my-2">
		<p class="max-w-prose">This site is not affiliated with or endorsed by Grinding Gear Games.</p>
	</div>
</div>
