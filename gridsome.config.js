const cssImport = require('postcss-import');
const presetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

const site = require('./src/data/site.json');

const isProduction = process.env.NODE_ENV === 'production';

// PostCSS config
const postcssPlugins = [
	cssImport(),
	presetEnv({
		stage: 0,
		features: {
			// 'custom-properties': false
			'all-property': false,
			'any-link-pseudo-class': false,
			'blank-pseudo-class': false,
			'break-properties': false,
			'case-insensitive-attributes': false,
			'color-functional-notation': false,
			'color-mod-function': false,
			'custom-media-queries': false,
			'custom-properties': false,
			'custom-selectors': false,
			'dir-pseudo-class': false,
			'double-position-gradients': false,
			'environment-variables': false,
			'focus-visible-pseudo-class': false,
			'focus-within-pseudo-class': false,
			'font-variant-property': false,
			'gap-properties': false,
			'gray-function': false,
			'has-pseudo-class': false,
			'hexadecimal-alpha-notation': false,
			'image-set-function': false,
			'lab-function': false,
			'logical-properties-and-values': false,
			'matches-pseudo-class': false,
			'media-query-ranges': false,
			'nesting-rules': false,
			'not-pseudo-class': false,
			'overflow-property': false,
			'overflow-wrap-property': false,
			'place-properties': false,
			'prefers-color-scheme-query': false,
			'rebeccapurple-color': false,
			'system-ui-font-family': false
		}
	}),
	cssnano({
		autoprefixer: false,
		cssDeclarationSorter: false,
		rawCache: false,
		calc: false,
		colormin: false,
		convertValues: false,
		discardComments: false,
		discardDuplicates: false,
		discardEmpty: false,
		discardOverridden: false,
		discardUnused: false,
		mergeIdents: false,
		mergeLonghand: false,
		mergeRules: false,
		minifyFontValues: false,
		minifyGradients: false,
		minifyParams: false,
		minifySelectors: false,
		normalizeCharset: false,
		normalizeDisplayValues: false,
		normalizePositions: false,
		normalizeRepeatStyle: false,
		normalizeString: false,
		normalizeTimingFunctions: false,
		normalizeUnicode: false,
		normalizeUrl: false,
		normalizeWhitespace: false,
		orderedValues: false,
		reduceIdents: false,
		reduceInitial: false,
		reduceTransforms: false,
		svgo: false,
		uniqueSelectors: false,
		zindex: false
	})
	// cssnano({
	// 	preset: [
	// 		'default',
	// 		{
	// 			calc: false
	// 		}
	// 	]
	// })
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
