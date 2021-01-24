const byType = require('./by-type');
const all = require('./all');

const nLibrary = {
  k: byType.kick[0],
  K: byType.kick[1],
  h: byType.hat[0],
  H: byType.hat[1],
  o: byType.openHat[0],
  s: byType.snare[0],
  S: byType.snare[1],
  c: byType.crash[0],
  i: byType.hiTom[0],
  t: byType.midTom[0],
  T: byType.lowTom[0],
  r: byType.ride[0],
  R: byType.rimshot[0],
};

module.exports = {
  all,
  byType,
  nLibrary,
  dir: __dirname,
};
