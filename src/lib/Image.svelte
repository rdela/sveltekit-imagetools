<script>
	export let src;
	export let alt;
</script>

<picture>
	{#each Object.entries(src.sources) as [format, images]}
		<source
			srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')}
			type={'image/' + format}
		/>
	{/each}
	<img src={src.fallback.src} {alt} loading="lazy" />
	<!-- https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading#images_and_iframes -->
</picture>

<style>
	img {
		max-width: 100%;
	}
</style>
