<script>
	import { page } from '$app/stores';
	import Image from '$lib/Image.svelte';
	// when we import static assets like images, Vite provides us with a hashed
	// URL that can be cached forever so uses only have to download it once
	import carinaNircam from '$lib/main_image_star-forming_region_carina_nircam_final-5mb.jpg?w=2048&invert';
	const carinaNircamAlt =
		'an undulating, translucent star-forming region in the Carina Nebula is shown in this Webb image, hued in ambers and blues; foreground stars with diffraction spikes can be seen, as can a speckling of background points of light through the cloudy nebula';
	const title = 'SvelteKit Imagetools example';
	const description =
		'A basic configuration for SvelteKit with Imagetools set up for image processing with sharp';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@sveltejs" />
	<meta name="twitter:creator" content="@rickydelaveaga" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta
		name="twitter:image"
		content="{$page.url.origin}{carinaNircam.fallback.src}"
	/>
	<meta name="twitter:image:alt" content={carinaNircamAlt} />
</svelte:head>

<h1>{title}</h1>

<figure>
	<Image src={carinaNircam} alt={carinaNircamAlt} />
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
