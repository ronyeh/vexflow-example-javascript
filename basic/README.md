## HTML

`all.html` loads the vexflow.js library which includes all music fonts.

`xxxx-only.html` load a vexflow-xxxx.js bundle that includes a single font.

`core.html` bundles zero music fonts. Fonts are loaded dynamically when you call ` await Flow.fetchMusicFont(fontName); Flow.setMusicFont(fontName)`;

`module.html` imports the ES module entry file vexflow.js, which in turn imports its dependencies. If you open the developer console's network tab, you'll see all the different ES module files that are loaded.

## Node

`customcontext.js` shows how to pass a custom RenderContext to the Renderer constructor. This advanced feature is for when you want to implement your own renderer (if SVGContext and CanvasContext are not sufficient for your needs).

```
node customcontext.js
```

`pdf.js` saves a score.pdf in the current directory.

```
node pdf.js
```
