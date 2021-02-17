# TR-707 samples, packaged for fluid-music

Free 707 drum sample library packaged for [`fluid-music`](https://www.npmjs.com/package/fluid-music).

Samples originally downloaded from [machines.hyperreal.org](http://machines.hyperreal.org/categories/drum-machines/TR-808/samples/).

```bash
npm i @fluid-music/tr-707
```

It exports a single `.kit` Technique Library object with the following keys:


* `B` - Kick with slightly less click
* `b` - Kick with slightly more click
* `k` - Snare (slightly brighter)
* `K` - Snare (slightly darker)
* `h` - Closed Hat
* `H` - Open Hat
* `r` - Ride
* `p` - Clap
* `w` - Cowbell
* `c` - Crash Cymbal
* `t` - Hi Tom
* `T` - Medium Tom
* `L` - Low Tom

```javascript
const tr707 = require('@fluid-music/tr-707')
const tLibrary = tr707.kit
```

## License

The original audio files were created by Francois Dion (cism@ere.umontreal.ca), who included a [README.txt](https://github.com/fluid-music/open-drums/blob/main/tr-707/TR707WAV/README.txt) with detailed information about the samples, and no licensing restrictions.

## Other Open Drum Packages

See [fluid-music/open-drums](https://github.com/fluid-music/open-drums/) on github for other drum packages.

Or [search npm for `fluid-music`](https://www.npmjs.com/search?q=fluid-music).
