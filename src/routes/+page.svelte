<script>
	import Image from '$lib/Image.svelte';
</script>

<h1>SvelteKit imagetools demo</h1>

<figure>
	<Image
		src="./_images/main_image_star-forming_region_carina_nircam_final-5mb.jpg"
		alt="an undulating, translucent star-forming region in the Carina Nebula is shown in this Webb image, hued in ambers and blues; foreground stars with diffraction spikes can be seen, as can a speckling of background points of light through the cloudy nebula"
	/>
	<figcaption>
		Image: <a
			href="https://www.nasa.gov/image-feature/goddard/2022/nasa-s-webb-reveals-cosmic-cliffs-glittering-landscape-of-star-birth"
			>NASA</a
		>
	</figcaption>
</figure>

<p>
	Visit the <a
		href="https://github.com/sveltejs/kit/issues/241#issuecomment-1274046866"
		>GitHub discussion</a
	> to read the about how this came to be.
</p>

<style>
	figure {
		margin: 0;
	}
	figcaption,
	h1,
	p {
		margin-left: 2rem;
	}
	figcaption {
		margin-top: 0.5rem;
	}
</style>
