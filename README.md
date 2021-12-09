# VexFlow JavaScript Example

The `esbuild/`, `parcel/`, `rollup/`, and `webpack/` directories each contain an example project for that JS bundler. The `basic/` directory does not use a bundler, but instead calls import/require on the vexflow JS entry file directly.

Run `npm install` in your chosen directory.

Optionally run `npm link vexflow` to point the example project to your local build of VexFlow.

In each project, run `npm start` to build the app bundle. Open individual HTML files to see the demos. Pages that include ES modules (e.g., `<script type="module">`) require you to run a web server (e.g., `npx http-server`) to see the output.

## Plain HTML and JS

In the `basic/` folder, HTML files point directly to files inside `node_modules/vexflow/`. When deploying to a website, you'll want to copy `vexflow.js` to your web server (or link to the VexFlow CDN URL on unpkg.com / jsdelivr.com).
