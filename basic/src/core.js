// Open one of the following in a browser:
// core.html
// core-with-bravura.html
// core-with-gonville.html
// core-with-petaluma.html

console.log("VexFlow Build:", Vex.Flow.BUILD);

const { Factory } = Vex.Flow;

const factory = new Factory({
    renderer: { elementId: "output", width: 500, height: 200 },
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
