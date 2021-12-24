// Run `npm start`

// Include all three music engraving fonts.
// import { Vex } from "vexflow"; // 773 KiB

// Include only the Petaluma Music Font
import { Vex } from "vexflow/petaluma"; // 461 KiB

// Include only the Gonville Music Font
// import { Vex } from "vexflow/gonville"; // 441 KiB

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
