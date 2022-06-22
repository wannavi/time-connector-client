/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'hover-hover': { raw: '(hover: hover) and (pointer: fine)' }
			}
		}
	},
	plugins: []
};
