
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28225, hash: '996aef81b1f33354ff329ba1a4605794a9b26f2b13e5b6c240da2c2aa2fdcb9b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17179, hash: '9923de64c542b43d6fedfe572f6b9105de809b6521b9f4a6aad36c1a277149b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36735, hash: 'caffe5ecf9faa2bf9fe8f3cc84cfebbff8f979db24e388b138b0860518f7c347', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UFWDRTRA.css': {size: 233804, hash: 'aywSo+RyUr8', text: () => import('./assets-chunks/styles-UFWDRTRA_css.mjs').then(m => m.default)}
  },
};
