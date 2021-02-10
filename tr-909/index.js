const { techniques, AudioFileMode } = require('fluid-music')
const audioFiles = require('./audio-files')

const copy = techniques.AudioFile.copy
const params = {
  mode: AudioFileMode.OneVoice,
}

const paramsHiHat = {
  ...params,
  gainDb = -9,
}

/**
 * This curated subset of the tr-909 kit
 */
const tLibrary = {
  B: copy(audioFiles.TR909all['BT0A0D7.WAV'], params),    // lower pitch
  b: copy(audioFiles.TR909all['BT7A0D7.WAV'], params),    // higher pitch
  h: copy(audioFiles.TR909all['HHCD4.WAV'], paramsHiHat), // closed hat
  H: copy(audioFiles.TR909all['HHOD4.WAV'], paramsHiHat), // open hat
  k: copy(audioFiles.TR909all['ST0T3S7.WAV'], params),    // short snare
  K: copy(audioFiles.TR909all['ST3T7S7.WAV'], params),    // long snare
  p: copy(audioFiles.TR909all['HANDCLP1.WAV'], params),   // clap 👏
  '👏': copy(audioFiles.TR909all['HANDCLP1.WAV'], params) // emoji clap
}

module.exports = {
  audioFiles,
  tLibrary,
}
