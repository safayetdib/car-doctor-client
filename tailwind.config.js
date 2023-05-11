/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				siteTheme: {
					accent: '#FF3811',
					'dark-01': '#151515',
					'dark-02': '#444444',
					'dark-03': '#737373',
					'dark-04': '#A2A2A2',
					'dark-05': '#D0D0D0',
					'dark-06': '#E8E8E8',
					'dark-07': '#F3F3F3',
				},
			},
		],
	},
};
