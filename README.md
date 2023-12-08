# RETIRED see [@sveltejs/enhanced-img](https://kit.svelte.dev/docs/images#sveltejs-enhanced-img) per [Ben McCann](https://github.com/sveltejs/kit/issues/241#issuecomment-1834682440)

## SvelteKit + Imagetools example

This repo shows a basic configuration for [SvelteKit](https://kit.svelte.dev/) with [Imagetools](https://github.com/JonasKruckenberg/imagetools) set up for image processing with [sharp](https://sharp.pixelplumbing.com).

First we set up Imagetools and our [defaultDirectives](https://github.com/JonasKruckenberg/imagetools/blob/main/packages/vite/README.md#defaultdirectives) in [vite.config.js](./vite.config.js). We are generating AVIF and WEBP [file formats](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#format) and using the [`picture` element](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#picture):

```
format: 'avif;webp;' + extension,
picture: true
```

Next we configure our [preprocess](https://kit.svelte.dev/docs/additional-resources#integrations) option in [svelte.config.js](./svelte.config.js). From there we import and use our [Image component](./src/lib/Image.svelte) in [+page.svelte](./src/routes/+page.svelte). To augment the global setup we did in [vite.config.js](./vite.config.js), in our [`img src` attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) we specify directives that are unique to particular images in the URL as query parameters:

```
example.jpg?w=2048&invert
```

The `?` starts the query parameter expression, and we can use as many key-value pairs as we need, separated by `&`. When we [import static assets like images](https://vitejs.dev/guide/assets.html#importing-asset-as-url), Vite provides us with a hashed URL that can be cached forever so visitors [only have to download it once](https://youtu.be/Znd11rVHQOE?t=14516). Though we are importing it up top in the script tag, our sharp/Imagetools transformations would work fine if we specified the directives directly in the `src` attribute. We cap the [width](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#width) at 2048px with `w=2048`, shorthand for `width=2048`, and [invert](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#invert) the colors with `invert`, short for `invert=true`.

[Ben McCann](https://github.com/benmccann) writes [on GitHub](https://github.com/sveltejs/kit/issues/241#issuecomment-1274046866):

> I realize of course this is a fair bit of configuration required at the moment. We've just done new releases of both imagetools and svelte-preprocess-import-assets today to make this all work pretty well. The next step will be packaging it all up together to be easier to setup.

Several community members have also indicated interest in making this work for [frontmatter](https://mdsvex.com/docs#frontmatter-1) in [markdown](https://daringfireball.net/projects/markdown/) and [mdsvex](https://mdsvex.com) files as well. PRs welcome. Also, [Imagetools are updating their examples in this PR](https://github.com/JonasKruckenberg/imagetools/pull/421).

Visit the [SvelteKit GitHub issue #241 discussion](https://github.com/sveltejs/kit/issues/241#issuecomment-1274046866) to read the about how this came to be.

## Deploying

The [vercel branch](https://github.com/rdela/sveltekit-imagetools/tree/vercel) builds [sveltekit-imagetools.vercel.app](https://sveltekit-imagetools.vercel.app/) and the [netlify branch](https://github.com/rdela/sveltekit-imagetools/tree/netlify) builds [sveltekit-imagetools.netlify.app](https://sveltekit-imagetools.netlify.app/). Both specify the respective vercel/netlify adapter and pass the `edge: true` option to the adapter for [Vercel](https://vercel.com/templates/svelte/sveltekit-edge-functions)/[Netlify](https://docs.netlify.com/integrations/frameworks/sveltekit/#edge-functions) Edge Functions. Rich mentioned the benefit of edge functions at [Vite Conf](https://youtu.be/Znd11rVHQOE?t=14990).

## The usual SvelteKit README boilerplate…

### create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

#### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

#### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

#### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
