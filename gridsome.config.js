const cssImport = require('postcss-import');
const presetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

const site = require('./src/data/site.json');

const isProduction = process.env.NODE_ENV === 'production';

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
if (isProduction) {
	postcssPlugins.push(
		purgecss({
			content: [
				'./src/assets/**/*.css',
				'./src/**/*.vue',
				'./src/**/*.js',
				'./src/**/*.jsx',
				'./src/**/*.html',
				'./src/**/*.pug',
				'./src/**/*.md'
			],
			whitelist: ['body', 'html', 'img', 'a', 'g-image', 'g-image--lazy', 'g-image--loading', 'g-image--loaded'],
			whitelistPatterns: [/^active/, /^is--/, /^js--/, /^fade-/]
		})
	);
}

module.exports = {
	siteUrl: site.url,

	templates: {
		Work: '/work/:slug'
	},

	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Work',
				baseDir: './content/work',
				path: '**/*.md',
				pathPrefix: '/work'
			}
		},
		{
			use: '@gridsome/plugin-critical',
			options: {
				paths: ['/', '/**/*'],
				dimensions: [
					{
						width: 375,
						height: 812
					},
					{
						width: 1300,
						height: 900
					}
				]
			}
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000
			}
		},
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: site.analytics.id,
				debug: {
					sendHitTask: isProduction
				}
			}
		},
		{
			use: 'gridsome-plugin-service-worker',
			options: {
				precachedRoutes: ['/', '/about'],
				cacheOnly: {
					cacheName: 'jc.fallback',
					routes: ['/', '/about']
				},
				staleWhileRevalidate: {
					cacheName: 'jc.build',
					routes: [/\.(?:css|js|json)$/]
				},
				cacheFirst: {
					cacheName: 'jc.statics',
					routes: [/\.(?:woff|woff2|png|gif|jpg|jpeg|webp|svg|webmanifest)$/]
				}
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
		// SVGs as Vue components
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule.use('vue-svg-loader').loader('vue-svg-loader');
	}
};
