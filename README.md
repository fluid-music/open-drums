# Open Drums For Fluid Music

This repo contains a collection of drum sample libraries packaged for the fluid-music system.

## About

This repository holds 3 different npm packages, which you can install with 

```bash
npm install @fluid-music/tr-707
npm install @fluid-music/tr-808
npm install @fluid-music/tr-909
```


## Notation

In Open Drums, all drum sounds are mapped to one character. Case matters, you can even use emojis.

## Example

This is what two measures of snare, kick, and hi-hat transcribed with 'fluid-music' look like:

```javascript
const score = {
  r:      '1 + 2 + 3 + 4 + ',
  snare: ['    k       k   ', '    k       k   '],
  kick:  ['B               ', '          B  B  '],
  hat:   ['h h h h h h h h ', 'h h h h h h h h '],
}
```

Here, we have 4 tracks, the first one is the rhythm string, notated with 'r', and then we have three tracks, one for each drum voice: 'snare', 'kick' and 'hat'.

For more info https://github.com/fluid-music/fluid-music/blob/main/docs/concepts.md#rhythm-string


* B: Bass drum - less click, longer sustain
* b: Bass drum - more click, short sustain
* h: closed hat
* H: open hat
* k: short snare
* K: long snare
* p: clap 👏
* '👏':emoji clap
