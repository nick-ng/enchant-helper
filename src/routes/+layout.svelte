<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import '../app.css';

	import { processImage } from '$lib/ocr';
	import { ocrStore } from '$lib/stores/ocr';

	onMount(() => {
		document.onpaste = async (event) => {
			const items = event.clipboardData?.items;

			if (!items) {
				$ocrStore.status = null;
				return;
			}

			$ocrStore.status = 'Processing...';

			for (const item of items) {
				if (item.type.startsWith('image/')) {
					const blob = item.getAsFile();

					if (blob) {
						goto('/');

						const reader = new FileReader();
						reader.readAsDataURL(blob);
						reader.onloadend = () => {
							const temp = reader.result?.toString();
							if (temp) {
								$ocrStore.imageDataBase64 = temp;
							}
						};

						$ocrStore.rawText = await processImage(blob);

						break;
					}
				}
			}

			$ocrStore.status = null;
		};
	});
</script>

<div class="min-h-screen relative mx-2 mt-2">
	<nav>
		<a class="button-default no-underline inline-block py-1" href="/">Search</a>
		<a class="button-default no-underline inline-block py-1" href="/bases">Bases</a>
		<a class="button-default no-underline inline-block py-1" href="/sales">Sales</a>
		<a class="button-default no-underline inline-block py-1" href="/colour">Colour</a>
		<a class="button-default no-underline inline-block py-1" href="/dev">Dev</a>
	</nav>
	<div class="pb-10">
		<slot />
	</div>
	<div class="absolute w-full bottom-0 flex flex-row justify-center my-2">
		<p class="max-w-prose">This site is not affiliated with or endorsed by Grinding Gear Games.</p>
	</div>
</div>
