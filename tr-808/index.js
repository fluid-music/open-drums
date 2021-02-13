const { techniques, AudioFileMode } = require('fluid-music')
const audioFiles = require('./audio-files')

const copy = techniques.AudioFile.copy
const params = {
  mode: AudioFileMode.OneVoice,
}

/**
 * A curated subset of the tr-808 samples
 */
const kit = {
  B: copy(audioFiles.TR808WAV.BD['BD0050.WAV'], params),  // less click, longer sustain
  b: copy(audioFiles.TR808WAV.BD['BD1025.WAV'], params),  // more click, short sustain
  h: copy(audioFiles.TR808WAV.CH['CH.WAV'], params),      // closed hat
  H: copy(audioFiles.TR808WAV.OH['OH75.WAV'], params),    // open hat
  k: copy(audioFiles.TR808WAV.SD['SD2525.WAV'], params),  // short snare
  K: copy(audioFiles.TR808WAV.SD['SD2510.WAV'], params),  // long snare
  p: copy(audioFiles.TR808WAV.CP['CP.WAV'], params),      // clap 👏
  '👏': copy(audioFiles.TR808WAV.CP['CP.WAV'], params),   // emoji clap
  w: copy(audioFiles.TR808WAV.CB['CB.WAV'], params)       // cowbell
}

/**
 * The tr-808 bass drum is often used as a pitched bass instrument. The 808 bass
 * drum had a 'Decay' parameter, and setting this to the max value yields a
 * long, low, resonant sound that is a staple of trap and other electronica
 * originating from Atlanta, GA. However, the original tr-808 was not tuned to
 * any particular scale, and the 'tuning' parameter on a 808 bass does not
 * significantly affect the pitch of the decay portion of the sound.
 *
 * The sample in the technique library below was re-tuned down by about 22
 * cents. The result is a pitched bass sound that is pre-tuned to g1 note
 * (relative to a4 === 440hz). This results in a low ringing frequency of the
 * tuned bass sound at approximately 49hz.
 */
const bass = {
  G: copy(audioFiles.TR808WAV.BDTuned['BD0010-g1.wav'], { fadeOutSeconds: 0.065 }), // minimal click
  g: copy(audioFiles.TR808WAV.BDTuned['BD2510-g1.wav'], { fadeOutSeconds: 0.065 }), // some click
}

module.exports = {
  audioFiles,
  tLibrary: kit,
  kit,
  bass,
}
