const audioFiles = require("./audio-files.js");


const kit = {
  B: audioFiles["BassDrum1.wav"], // Kick with slightly less click
  b: audioFiles["BassDrum2.wav"], // Kick with slightly more click
  k: audioFiles["Snare1.wav"],    // Snare (slightly brighter)
  K: audioFiles["Snare2.wav"],    // Snare (slightly darker)
  h: audioFiles["HhC.wav"],       // Closed Hat
  H: audioFiles["HhO.wav"],       // Open Hat
  r: audioFiles["Ride.wav"],      // Ride
  p: audioFiles["HandClap.wav"],  // Clap
  w: audioFiles["CowBell.wav"],   // Cowbell
  c: audioFiles["Crash.wav"],     // Crash Cymbal
  t: audioFiles['HiTom.wav'],     // Hi Tom
  T: audioFiles["MedTom.wav"],    // Medium Tom
  L: audioFiles["LowTom.wav"]     // Low Tom
};

module.exports = {
  audioFiles,
  tLibrary: kit,
  kit,
};
