<script lang="ts">
	import ItemDrop from './item-drop.svelte';
	let borderHex = '#123456';
	let borderAlpha = 200;
	let textHex = '#ffffff';
	let textAlpha = 200;
	let backgroundHex = '#111111';
	let backgroundAlpha = 200;

	let backgroundR = parseInt(backgroundHex[1] + backgroundHex[2], 16);
	let backgroundG = parseInt(backgroundHex[3] + backgroundHex[4], 16);
	let backgroundB = parseInt(backgroundHex[5] + backgroundHex[6], 16);
	let backgroundString = `SetBackgroundColor ${backgroundR} ${backgroundG} ${backgroundB} ${backgroundAlpha}`;

	let borderR = parseInt(borderHex[1] + borderHex[2], 16);
	let borderG = parseInt(borderHex[3] + borderHex[4], 16);
	let borderB = parseInt(borderHex[5] + borderHex[6], 16);
	let borderString = `SetBorderColor ${borderR} ${borderG} ${borderB} ${borderAlpha}`;

	let textR = parseInt(textHex[1] + textHex[2], 16);
	let textG = parseInt(textHex[3] + textHex[4], 16);
	let textB = parseInt(textHex[5] + textHex[6], 16);
	let textString = `SetTextColor ${textR} ${textG} ${textB} ${textAlpha}`;

	let textArea = [backgroundString, borderString, textString].map((l) => `\t${l}`).join('\n');

	const updateTextArea = (newString: string): void => {
		const [setting] = newString.split(' ');

		const lines = textArea
			.split('\n')
			.map((l) => l.trim())
			.filter((l) => l);

		for (let i = 0; i < lines.length; i++) {
			let set = false;
			if (lines[i].startsWith(setting)) {
				if (!set) {
					set = true;
					lines[i] = newString.trim();
				} else {
					lines[i] = '';
				}
			}
		}

		textArea = lines
			.filter((l) => l)
			.sort()
			.map((l) => `\t${l}`)
			.join('\n');
	};

	$: {
		borderString = `SetBorderColor ${borderR} ${borderG} ${borderB} ${borderAlpha}`;
		updateTextArea(borderString);
	}
	$: {
		backgroundString = `SetBackgroundColor ${backgroundR} ${backgroundG} ${backgroundB} ${backgroundAlpha}`;
		updateTextArea(backgroundString);
	}
	$: {
		textString = `SetTextColor ${textR} ${textG} ${textB} ${textAlpha}`;
		updateTextArea(textString);
	}
</script>

<div>
	<h1>Filter Colour Picker</h1>
	<p>Not really an enchant thing.</p>
	<div class="flex flex-row my-2">
		<div class="border-default px-2">
			<label>
				<div>Background Colour</div>
				<input
					class="w-64"
					type="color"
					bind:value={backgroundHex}
					on:input={(e) => {
						const tempHex = e.currentTarget.value;

						backgroundR = parseInt(`${tempHex[1]}${tempHex[2]}`, 16);
						backgroundG = parseInt(`${tempHex[3]}${tempHex[4]}`, 16);
						backgroundB = parseInt(`${tempHex[5]}${tempHex[6]}`, 16);
					}}
				/>
			</label>
			<label>
				<div>Background Alpha - {backgroundAlpha}</div>
				<input type="range" min={0} max={255} step={1} bind:value={backgroundAlpha} />
			</label>
		</div>
		<div class="border-default px-2">
			<label>
				<div>Border Colour</div>
				<input
					class="w-64"
					type="color"
					bind:value={borderHex}
					on:input={(e) => {
						const tempHex = e.currentTarget.value;

						borderR = parseInt(`${tempHex[1]}${tempHex[2]}`, 16);
						borderG = parseInt(`${tempHex[3]}${tempHex[4]}`, 16);
						borderB = parseInt(`${tempHex[5]}${tempHex[6]}`, 16);
					}}
				/>
			</label>
			<label>
				<div>Border Alpha - {borderAlpha}</div>
				<input type="range" min={0} max={255} step={1} bind:value={borderAlpha} />
			</label>
		</div>
		<div class="border-default px-2">
			<label>
				<div>Text Colour</div>
				<input
					class="w-64"
					type="color"
					bind:value={textHex}
					on:input={(e) => {
						const tempHex = e.currentTarget.value;

						textR = parseInt(`${tempHex[1]}${tempHex[2]}`, 16);
						textG = parseInt(`${tempHex[3]}${tempHex[4]}`, 16);
						textB = parseInt(`${tempHex[5]}${tempHex[6]}`, 16);
					}}
				/>
			</label>
			<label>
				<div>Text Alpha - {textAlpha}</div>
				<input type="range" min={0} max={255} step={1} bind:value={textAlpha} />
			</label>
		</div>
	</div>
	<div>
		<textarea
			class="font-mono resize-none max-w-sm w-full h-20 block mb-2 px-1"
			bind:value={textArea}
			on:change={(e) => {
				const tempText = e.currentTarget.value;
				let hasBorder = false;
				let hasBackground = false;
				let hasText = false;

				const lines = tempText
					.split('\n')
					.map((l) => l.trim())
					.filter((l) => l);

				for (let i = 0; i < lines.length; i++) {
					const line = lines[i];

					if (line.startsWith('SetBorderColor')) {
						if (hasBorder) {
							lines[i] = '';
							continue;
						}

						const splitLine = line.split(' ');
						if (splitLine.length < 4) {
							continue;
						}

						hasBorder = true;
						const [_blah, tempR, tempG, tempB, tempA] = splitLine;

						borderR = Math.min(parseInt(tempR, 10), 255);
						borderG = Math.min(parseInt(tempG, 10), 255);
						borderB = Math.min(parseInt(tempB, 10), 255);
						borderAlpha = typeof tempA === 'string' ? Math.min(parseInt(tempA, 10), 255) : 255;
						borderString = `SetBorderColor ${borderR} ${borderG} ${borderB} ${borderAlpha}`;
						borderHex = `#${borderR.toString(16)}${borderG.toString(16)}${borderB.toString(16)}`;
					} else if (line.startsWith('SetBackgroundColor')) {
						if (hasBackground) {
							lines[i] = '';
							continue;
						}

						const splitLine = line.split(' ');
						if (splitLine.length < 4) {
							continue;
						}

						hasBackground = true;
						const [_blah, tempR, tempG, tempB, tempA] = splitLine;

						backgroundR = Math.min(parseInt(tempR, 10), 255);
						backgroundG = Math.min(parseInt(tempG, 10), 255);
						backgroundB = Math.min(parseInt(tempB, 10), 255);
						backgroundAlpha = typeof tempA === 'string' ? Math.min(parseInt(tempA, 10), 255) : 255;
						backgroundString = `SetBorderColor ${backgroundR} ${backgroundG} ${backgroundB} ${backgroundAlpha}`;
						backgroundHex = `#${backgroundR.toString(16)}${backgroundG.toString(
							16
						)}${backgroundB.toString(16)}`;
					} else if (line.startsWith('SetTextColor')) {
						if (hasText) {
							lines[i] = '';
							continue;
						}

						const splitLine = line.split(' ');
						if (splitLine.length < 4) {
							continue;
						}

						hasText = true;
						const [_blah, tempR, tempG, tempB, tempA] = splitLine;

						textR = Math.min(parseInt(tempR, 10), 255);
						textG = Math.min(parseInt(tempG, 10), 255);
						textB = Math.min(parseInt(tempB, 10), 255);
						textAlpha = typeof tempA === 'string' ? Math.min(parseInt(tempA, 10), 255) : 255;
						textString = `SetBorderColor ${textR} ${textG} ${textB} ${textAlpha}`;
						textHex = `#${textR.toString(16)}${textG.toString(16)}${textB.toString(16)}`;
					} else {
						lines[i] = '';
					}
				}

				if (!hasBorder) {
					lines.push(borderString);
				}
				if (!hasBackground) {
					lines.push(backgroundString);
				}
				if (!hasText) {
					lines.push(textString);
				}

				textArea = lines
					.filter((l) => l)
					.sort()
					.map((l) => `\t${l}`)
					.join('\n');
			}}
		/>
		<button
			on:click={() => {
				navigator.clipboard.writeText(textArea);
			}}>Copy</button
		>
	</div>
	<div class="mt-2">
		<div class="p-16 border-default inline-block bg-orange-50">
			<ItemDrop {borderAlpha} {borderHex} {backgroundAlpha} {backgroundHex} {textAlpha} {textHex} />
		</div>
		<div class="p-16 border-default inline-block bg-slate-500">
			<ItemDrop {borderAlpha} {borderHex} {backgroundAlpha} {backgroundHex} {textAlpha} {textHex} />
		</div>
		<div class="p-16 border-default inline-block bg-orange-950">
			<ItemDrop {borderAlpha} {borderHex} {backgroundAlpha} {backgroundHex} {textAlpha} {textHex} />
		</div>
		<div class="p-16 border-default inline-block bg-green-300">
			<ItemDrop {borderAlpha} {borderHex} {backgroundAlpha} {backgroundHex} {textAlpha} {textHex} />
		</div>
	</div>
</div>
