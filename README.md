# learn-webpack

A simple app to learn Webpack like a Boss!

# running

```bash
npm install

// DEV
npm start 

// PROD
npm run build
```

## things to achieve with Webpack
- [x] Bundle all JavaScript. Meh
- [x] Use Node server to do it, no `webpack-dev-server`
- [x] Use Babel for ES6 and JSX
- [x] Use Hot reloading. Yay!
- [x] Generate `index.html` referencing all generated assets at build time
- [x] Have `source-maps` to debug like a Boss!
- [x] Have a sample app ready? Yay `bundle.js` is > **1MB**, Optimize!
- [x] Have CSS bundled in
- [ ] Hot reloading keeping the state intact, transforms!
- [ ] Show errors on browser, *react-transform-catch-erros*, Sir Dan Abramov!
- [x] Generate Webpack conf for DEV and PROD
- [x] Separate bundles for app and vendor
- [ ] Extract CSS separately
- [x] Optimize bundle size (`app`: **299kB** -> **23kB** and `vendor`: **919kB** -> **199kB**)
  - [x] Dedupe, reduces the bundle size a little > 0 :P
  - [x] Minification [PROD only]
  - [x] Define `NODE_ENV=production` for React, Redux and other library bundling improvements
- [x] Hashing
- [ ] Long term caching
- [x] Common chunking, zzzzzz
- [ ] Server rendered? Huhh?
- [ ] PostCSS, kill me now?
- [x] Finally, clean the build folder, ~~will you please?~~
