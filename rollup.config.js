// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// const deepmerge = require('deepmerge');
// const { injectManifest /* generateSW */ } = require('rollup-plugin-workbox');

// // if you need to support IE11 use "modern-and-legacy-config" instead.
// // import { createCompatibilityConfig } from '@open-wc/building-rollup';
// // export default createCompatibilityConfig({ input: './index.html' });

// const basicConfig = createCompatibilityConfig({
//   input: './index.html',
//   plugins: {
//     workbox: false,
//   },
// });

// const workboxConfig = require('./workbox-config.js');

// export default deepmerge(basicConfig, {
//   plugins: [injectManifest(workboxConfig)],
// });

import { createCompatibilityConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-cpy';
import { generateSW } from 'rollup-plugin-workbox';
// import cache from './workbox-runtime-cache.js';

const config = createCompatibilityConfig({
  input: './index.html',
  outputDir: 'docs',
  plugins: [],
});

// console.log(cache);

export default [
  // add plugin to the first config
  {
    ...config[0],
    plugins: [
      ...config[0].plugins,
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
        ],
        swDest: '/docs/sw.js',
        globDirectory: '/docs/',
      }),
    ],
  },

  // leave the second config untouched
  config[1],
];
