/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: '404.html',
    revision: '59587dc8b4dd2660f8d8c18a29ee2b84',
  },
  {
    url: 'covid-sc-app-288f3b34.js',
    revision: 'acbc9b7313f8addc6d7be53516f2f22b',
  },
  {
    url: 'index.html',
    revision: '64ffe9cb61a6d16c4a2b9d80b88f2cda',
  },
  {
    url: 'legacy/covid-sc-app-449ca73f.js',
    revision: '90f7632d649cac50919f43e564ea6146',
  },
  {
    url: 'polyfills/core-js.577a5602a7262d6256830802d4aaab43.js',
    revision: 'ccf205728fe514f8276191669b5ea48d',
  },
  {
    url: 'polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js',
    revision: 'cff507bc95ad1d6bf1a415cc9c8852b0',
  },
  {
    url: 'polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js',
    revision: 'ed55766050be285197b8f511eacedb62',
  },
  {
    url: 'polyfills/fetch.191258a74d74243758f52065f3d0962a.js',
    revision: 'fcdc4efda1fe1b52f814e36273ff745d',
  },
  {
    url: 'polyfills/regenerator-runtime.9090ed1c23690e3072c21a7873cad285.js',
    revision: '9af9d9e480dfccc420d30729e319b821',
  },
  {
    url: 'polyfills/systemjs.6dfbfd8f2c3e558918ed74d133a6757a.js',
    revision: '683aabfb9b006607885b83e45e9a1768',
  },
  {
    url: 'polyfills/webcomponents.6954abecfe8b165751e6bc9b0af6c639.js',
    revision: '894a294495257c3d389efa3e1bd9bde7',
  },
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'));
