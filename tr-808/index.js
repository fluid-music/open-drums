const { techniques } = require('fluid-music')
const audioFiles = require('./audio-files')

// The kick drum is tuned to approximately 49.64 hz (~22.35 cents sharp of G1).
// While the kick is sampled at multiple 'tuning' settings, these 'tuning'
// parameter on the tr-808 primarily affects the attack portion of the sound
// and does not noticeably affect pitching during the sustain portion of the
// sound.

const copy = techniques.AudioFile.copy

/**
 * This curated subset of the tr-808 kit
 */
const kit = {
  B: copy(audioFiles.TR808WAV.BD['BD0050.WAV']),  // less click, longer sustain
  b: copy(audioFiles.TR808WAV.BD['BD5025.WAV']),  // more click, short sustain
  h: copy(audioFiles.TR808WAV.CH['CH.WAV']),      // closed hat
  H: copy(audioFiles.TR808WAV.OH['OH75.WAV']),    // open hat
  k: copy(audioFiles.TR808WAV.SD['SD2525.WAV']),  // short snare
  K: copy(audioFiles.TR808WAV.SD['SD2510.WAV']),  // long snare
  p: copy(audioFiles.TR808WAV.CL['CL.WAV']),      // clap 👏
  '👏': copy(audioFiles.TR808WAV.CL['CL.WAV']),   // emoji clap
  w: copy(audioFiles.TR808WAV.CB['CB.WAV'])       // cowbell
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
  G: copy(audioFiles.TR808WAV.BDTuned['BD0010-g1.wav']), // minimal click
  g: copy(audioFiles.TR808WAV.BDTuned['BD2510-g1.wav']), // some click
}

module.exports = {
  audioFiles,
  kit,
  bass,
}
