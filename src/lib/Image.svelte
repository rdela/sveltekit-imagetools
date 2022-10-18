<script>
	export let src;
	export let alt;
</script>

<picture>
	{#each Object.entries(src.sources) as [format, images]}
		<source
			srcset={images.map((i) => `${i.src}`).join(', ')}
			type={'image/' + format}
		/>
	{/each}
	<img src={src.fallback.src} {alt} />
</picture>

<style>
	img {
		max-width: 100%;
	}
</style>
