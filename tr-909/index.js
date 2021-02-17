const { techniques, AudioFileMode } = require('fluid-music')
const audioFiles = require('./audio-files')

const copy = techniques.AudioFile.copy

const params = {
  mode: AudioFileMode.OneVoice,
}

const paramsHiHat = {
  ...params,
  gainDb : -9,
}

/**
 * This curated subset of the tr-909 kit samples
 */
const kit = {
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
  /**
   * The original TR-909 drum synthesizer had adjustable parameters for the
   * different drum sounds. This sample library includes drums that were sampled
   * with the TR-909 parameters in many different configurations. This nested
   * JavaScript object contains AudioFile techniques for all the available
   * TR-909 samples. This object is not a tLibrary, because the object keys are
   * not single characters. This means that you cannot use it directly as a
   * tLibrary in a fluid music score, but you can use its properties to create
   * your own curated drum kits from all the available samples */
  audioFiles,
  /** alias for .kit tLibrary */
  tLibrary: kit,
  kit,
}
