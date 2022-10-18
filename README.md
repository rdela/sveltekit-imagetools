# SvelteKit + Imagetools demo

This repo shows a basic configuration for [SvelteKit](https://kit.svelte.dev/) with [Imagetools](https://github.com/JonasKruckenberg/imagetools) set up for image processing with [sharp](https://sharp.pixelplumbing.com).

First we set up Imagetools and our [defaultDirectives](https://github.com/JonasKruckenberg/imagetools/blob/main/packages/vite/README.md#defaultdirectives) in [vite.config.js](./vite.config.js). We are generating AVIF and WEBP [file formats](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#format), using the [`picture` element](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#picture), and capping all [widths](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#width) at 2048px:

```
    format: 'avif;webp;' + extension,
    picture: true,
    width: 2048
```

Next we configure our [preprocess](https://kit.svelte.dev/docs/additional-resources#integrations) option in [svelte.config.js](./svelte.config.js). From there we import and use our [Image component](./src/lib/Image.svelte) in [+page.svelte](./src/routes/+page.svelte).

[Ben McCann](https://github.com/benmccann) writes on GitHub:

> I realize of course this is a fair bit of configuration required at the moment. We've just done new releases of both imagetools and svelte-preprocess-import-assets today to make this all work pretty well. The next step will be packaging it all up together to be easier to setup.

Several community members have also indicated interest in making this work for [frontmatter](https://mdsvex.com/docs#frontmatter-1) in [markdown](https://daringfireball.net/projects/markdown/) and [mdsvex](https://mdsvex.com) files as well. PRs welcome. Also, [Imagetools are updating their examples in this PR](https://github.com/JonasKruckenberg/imagetools/pull/421).

Visit the [SvelteKit GitHub issue #241 discussion](https://github.com/sveltejs/kit/issues/241#issuecomment-1274046866) to read the about how this came to be.

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
