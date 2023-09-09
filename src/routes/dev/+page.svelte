<script lang="ts">
	let normal = '';
	let uriEncoded = '';
	let jsonString = '';
</script>

<div>
	<h1>Development Tools</h1>
	<p>Hi. If you don't already know how to use this page, you probably won't find it very useful.</p>
	<h2>Encode URI</h2>
	<label>
		<div>
			Normal <button
				on:click={() => {
					try {
						normal = JSON.stringify(JSON.parse(normal), null, '  ');
						uriEncoded = encodeURIComponent(JSON.stringify(JSON.parse(normal)));
						jsonString = JSON.stringify(JSON.parse(normal));
					} catch (e) {
						jsonString = 'not a JSON string';
						uriEncoded = encodeURIComponent(normal);
					}
				}}>Format JSON</button
			>
		</div>
		<textarea
			class="w-[80ch] h-[40ch]"
			value={normal}
			on:input={(event) => {
				normal = event.currentTarget.value;
				uriEncoded = encodeURIComponent(normal);

				try {
					jsonString = JSON.stringify(JSON.parse(normal));
					uriEncoded = encodeURIComponent(JSON.stringify(JSON.parse(normal)));
				} catch (e) {
					jsonString = 'not a JSON string';
					uriEncoded = encodeURIComponent(normal);
				}
			}}
		/>
	</label>
	<label>
		<div>Encoded</div>
		<textarea
			class="w-[80ch] h-[40ch]"
			value={uriEncoded}
			on:input={(event) => {
				uriEncoded = event.currentTarget.value;
				normal = decodeURIComponent(uriEncoded);

				try {
					jsonString = JSON.stringify(JSON.parse(normal));
				} catch (e) {
					jsonString = 'not a JSON string';
				}
			}}
		/>
	</label>
	<div>
		JSON string <button
			on:click={() => {
				navigator.clipboard.writeText(jsonString);
			}}>Copy</button
		>
	</div>
	<pre class="max-w-prose overflow-x-hidden text-ellipsis">{jsonString}</pre>
	<div>
		PoE Trade Query <button
			on:click={() => {
				navigator.clipboard.writeText(encodeURIComponent(jsonString));
			}}>Copy</button
		>
	</div>
	<pre class="max-w-prose overflow-x-hidden text-ellipsis">{encodeURIComponent(jsonString)}</pre>
</div>
