// import { Flow, Renderer, Stave } from "vexflow";
import { Flow, Renderer, Stave } from "vexflow/core-with-gonville";
const { JSDOM } = require("jsdom");

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="vf"></div><body></html>');

global.document = dom.window.document;

// Create an SVG renderer and attach it to the DIV element named "vf".
const div = document.getElementById("vf");
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 500);
const context = renderer.getContext();
context.setFont("Arial", 10).setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new Stave(10, 40, 400);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

const svg = div.innerHTML.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');

console.log(svg);
