// Run `npm start`

import { Vex } from "vexflow";

// VexFlow defaults to the Bravura music engraving font, so the next line isn't necessary.
Vex.Flow.setMusicFont("Bravura");

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
