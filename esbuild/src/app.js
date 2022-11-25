// Run `npm start` to use esbuild to create an app bundle in the build/ directory.
// This is a portable bundle that includes VexFlow, so you can move app.js to a different directory and it will still work.

import { Vex } from "vexflow";
// import { Vex } from "vexflow/petaluma";
import { add, subtract } from "./utils";

// VexFlow defaults to the Bravura music engraving font, so the next line isn't necessary.
// Vex.Flow.setMusicFont("Bravura");

const factory = new Vex.Flow.Factory({
    renderer: { elementId: "output", width: 500, height: 130 },
});
const score = factory.EasyScore();
factory
    .System()
    .addStave({
        voices: [score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })), score.voice(score.notes("C#4/h, C#4", { stem: "down" }))],
    })
    .addClef("treble")
    .addTimeSignature("4/4");
factory.draw();

console.log("3 + 5 = " + add(3, 5));
console.log("3 - 5 = " + subtract(3, 5));

console.log(Vex.Flow.BUILD.VERSION);
