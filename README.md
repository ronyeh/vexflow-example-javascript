# VexFlow JavaScript Example

The `esbuild/`, `parcel/`, `rollup/`, and `webpack/` directories each contain an example project for that JS bundler. The `basic/` directory does not use a bundler.

Run `npm install` in your chosen directory.

You can then (optionally) run `npm link vexflow` to point the example project to your local build of VexFlow.

In each project, run `npm start` to build the app bundle. Open individual HTML files to see the demos. Pages that include ES modules (e.g., `<script type="module">`) require you to run a web server (e.g., `npx http-server`) to see the output.

## Plain HTML and JS

In the `basic/` folder, HTML files point directly to files inside `node_modules/vexflow/`. When deploying to a website, you'll want to copy `vexflow.js` to your web server (or link to the VexFlow CDN URL on unpkg.com / jsdelivr.com).

## Other

This shows how to pass a custom RenderContext to the Renderer constructor. This advanced feature is for when you want to implement your own renderer (if SVGContext and CanvasContext are not sufficient for your needs).

```
node src/node.js
```

The next command will save a score.pdf in the current directory.

```
node src/pdf.js
```
