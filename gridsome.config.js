const cssImport = require('postcss-import');
const presetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

const site = require('./src/data/site.json');

// PostCSS config
const postcssPlugins = [
	cssImport(),
	presetEnv({
		stage: 1
	}),
	cssnano({
		preset: 'default'
	})
];

// PurgeCSS only in production
if (process.env.NODE_ENV === 'production') {
	postcssPlugins.push(
		purgecss({
			content: ['src/assets/**/*.css', 'src/**/*.vue', 'src/**/*.js'],
			whitelist: ['g-image', 'g-image--lazy', 'g-image--loaded'],
			whitelistPatterns: [/active$/, /^is--/]
		})
	);
}

module.exports = {
	siteName: site.name,
	siteDescription: site.description,
	siteUrl: site.url,

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
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000
			}
		}
	],

	transformers: {
		remark: {
			externalLinksTarget: '_self',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			plugins: ['@gridsome/remark-prismjs']
		}
	},

	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins
			}
		}
	},

	chainWebpack: config => {
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule.use('vue-svg-loader').loader('vue-svg-loader');
	}
};
