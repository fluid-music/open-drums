const { FluidSession } = require("fluid-music");
const {tLibrary} = require("./index.js");

const score = {
  tLibrary,
  r:      "1+2+3+4+",
  kick:   "d   d   ",
  snare:  "  k   k ",
};

const session = new FluidSession({
  bpm: 120});
session.insertScore(score);
session.saveAsReaperFile("example");
