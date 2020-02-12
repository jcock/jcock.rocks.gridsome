const cssImport = require('postcss-import');
const presetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [
	cssImport(),
	presetEnv({
		stage: 1
	}),
	cssnano({
		preset: 'default'
	})
];

if (process.env.NODE_ENV === 'production') {
	postcssPlugins.push(
		purgecss({
			content: ['src/assets/**/*.css', 'src/**/*.vue', 'src/**/*.js']
		})
	);
}

module.exports = {
	siteName: 'Jason Cockerham 🤘 Designer and Developer',
	siteDescription: 'The portfolio of Jason Cockerham, User Experience Designer and Front-End Developer.',
	siteUrl: 'https://jcock.rocks/',

	templates: {
		Work: '/work/:title',
		Tag: '/work/tag/:id'
	},

	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Work',
				path: 'content/work/**/*.md',
				refs: {
					tags: {
						typeName: 'Tag',
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-XXXXXXXXX-X'
			}
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000
			}
		}
	],

	transformers: {
		remark: {
			plugins: ['@gridsome/remark-prismjs']
		}
	},

	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins
			}
		}
	}
};
