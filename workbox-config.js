// eslint-disable-next-line no-undef
module.exports = {
	globDirectory: "./",
	// Explicitly ignore audio directories so they never accidentally sneak into the installation step
	globIgnores: [
		"**/node_modules/**/*",
		"**/src/**/*",
		"workbox-config.js",
		"package.json",
		"package-lock.json"
	],
	// Clean up production extensions and specifically target your app databases
	globPatterns: [
		"**/*.{html,css,js,png,webmanifest,ico}"
	],
	maximumFileSizeToCacheInBytes: 5000000, // 5MB is perfect for your background assets
	swDest: "./sw.js",
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
	clientsClaim: true, // Forces immediate control of active pages
	skipWaiting: true,   // Skips the service worker waiting room on updates
	runtimeCaching: [
		{
			// Match any request going to the GitHub raw content domain
			urlPattern: /^https:\/\/raw\.githubusercontent\.com\/.*$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'backgrounds-db-cache',
				expiration: {
					maxEntries: 150,
					maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
				},
				cacheableResponse: {
					statuses: [0, 200],
				},
			},
		}
	],
};