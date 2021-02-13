# @fluid-music/808

`npm install @fluid-music/tr-808`

Free 808 drum sample library packaged for [`fluid-music`](https://www.npmjs.com/package/fluid-music).

Samples originally downloaded from [machines.hyperreal.org](http://machines.hyperreal.org/categories/drum-machines/TR-808/samples/).


The module exports several `fluid-music` technique libraries.

```JavaScript
const tr808 = require('@fluid-music/tr-808')
tr808.kit // a drum sample technique library containing drum samples
tr808.bass // a bass technique library containing pitched bass note
```

`tr808.kit` contains the following drum sample audio file techniques:

- `B` - less click, longer sustain
- `b` - more click, short sustain
- `h` - closed hat
- `H` - open hat
- `k` - short snare
- `K` - long snare
- `p` - clap 👏
- `👏` - clap (same as `p`)
- `w` - cowbell

The bass drum sound original TR-808 drum machine had an adjustable decay. Setting the decay parameter to a high value causes the bass drum to sound more like a bass guitar with a long, low, resonant pitch. A tuned 808 bass drum sample with a long decay is often used to fill the role of a bass guitar or bass synthesizer in trap and other styles of electronic music. The `tr808.bass` technique library includes the following techniques. These samples can be re-tuned to make melodic bass lines.

The `tr808.bass` technique library includes two audio file techniques that are useful for creating trap-style melodic bass lines:

- `G` - a sustained pitch bass note, tuned to g1 with minimal click
- `g` - a sustained pitch bass note, tuned to g1 with some click

## License

The original audio files were recorded by Michael Fischer (fischer1@student.msu.edu), who included a [.TXT](https://github.com/fluid-music/open-drums/blob/main/tr-808/TR808WAV/TR808.TXT) with detailed information about the samples, and no licensing restrictions.
