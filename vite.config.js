import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['png', 'jpg', 'jpeg'];

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		imagetools({
			defaultDirectives: (url) => {
				const extension = url.pathname.substring(
					url.pathname.lastIndexOf('.') + 1
				);
				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension,
						picture: true,
						width: 2048
					});
				}
				return new URLSearchParams();
			}
		}),
		sveltekit()
	]
};

export default config;
