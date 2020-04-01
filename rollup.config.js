import { createCompatibilityConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-cpy';
import { generateSW } from 'rollup-plugin-workbox';
// import cache from './workbox-runtime-cache.js';

const config = createCompatibilityConfig({
  input: './index.html',
  outputDir: 'docs',
  plugins: {
    workbox: false,
  },
});

// console.log(cache);

export default [
  // leave the legacy config untouched
  config[0],
  // add plugin to the non-legacy config
  {
    ...config[1],
    plugins: [
      ...config[1].plugins,
      copy({
        // copy over all image files
        files: ['images/**/*.png', 'src/**/*.json', '404.html', 'CNAME', 'favicon.png'],
        dest: 'docs',
        options: {
          // parents makes sure to preserve the original folder structure
          parents: true,
        },
      }),
      generateSW({
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: {
                maxEntries: 4,
                maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
              },
            },
          },
          {
            urlPattern: /^https:\/\/aws\.covidsc\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'data',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 5 * 24 * 60 * 60, // 5 days
              },
            },
          },
        ],
        swDest: 'docs/sw.js',
        globDirectory: 'docs/',
      }),
    ],
  },
];
