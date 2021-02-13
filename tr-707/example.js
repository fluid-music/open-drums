const { FluidSession } = require("fluid-music");
const { kit } = require("./index.js");

const score = {
  tLibrary: kit,
  r:      "1234",
  kick:   "d d ",
  snare:  " k k",
};

const session = new FluidSession({ bpm: 120 });
session.insertScore(score);
session.finalize();
session.saveAsReaperFile("example");
