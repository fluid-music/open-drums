# TR-707 samples, packaged for fluid-music

Free 707 drum sample library packaged for [`fluid-music`](https://www.npmjs.com/package/fluid-music).

Samples originally downloaded from [machines.hyperreal.org](http://machines.hyperreal.org/categories/drum-machines/TR-808/samples/).

```bash
npm i @fluid-music/tr-707
```

It exports a single `tLibrary` object, which looks roughly like this:

```javascript
const tLibrary = {
  d: audioFiles["BassDrum1.wav"],
  k: audioFiles["Snare1.wav"],
  x: audioFiles["HhC.wav"],
  r: audioFiles["Ride.wav"],
  c: audioFiles["Crash.wav"]
}

module.exports.tLibrary = tLibrary
```

## License

The original audio files were created by Francois Dion (cism@ere.umontreal.ca), who included a [.txt](./TR707wav/README.TXT) with detailed information about the samples, and no licensing restrictions.
