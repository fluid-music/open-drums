const fs = require('fs');
const files = require('./files').sort((a,b) => a.localeCompare(b));

const regexLib = {
  kick: [/BT([037A])A([037A])D([037A]).WAV$/, ['tune', 'attack', 'decay']],
  snare: [/ST([037A])T([037A])S([037A]).WAV$/, ['tune', 'tone', 'snappy']],
  lowTom: [/LT([037A])D([037A]).WAV$/, ['tune', 'decay']],
  midTom: [/MT([037A])D([037A]).WAV$/, ['tune', 'decay']],
  hiTom: [/HT([037A])D([037A]).WAV$/, ['tune', 'decay']],
  rimshot: [/RIM([0-9]+).WAV$/, ['velocity']],
  clap: [/HANDCLP([0-9]+).WAV$/, ['velocity']],
  hat: [/HHCD([0-9A]+).WAV$/, ['decay']],
  openHat: [/HHOD([0-9A]+).WAV$/, ['decay']],
  crash: [/CSHD([0-9A]+).WAV$/, ['tune']],
  ride: [/RIDED([0-9A]+).WAV$/, ['tune']],
  closeToOpenHat: [/CLOP([0-9]+).WAV$/, ['variation']],
  openToCloseHat: [/OPCL([0-9]+).WAV$/, ['variation']],
};

const values = {  A: 10 };

const all = files.map((path) => {
  for (let [drumName, [regex, params, c]] of Object.entries(regexLib)) {
    let match = path.match(regex);
    if (!match) continue;

    let meta = {};
    let item = {drumName, meta, path, type: 'file' };
    
    params.forEach((param, i) => {
      let key = match[i+1];
      meta[param] =  (values.hasOwnProperty(key)) ? values[key] : parseInt(key);
    });

    return item;
  }
  console.log('unhandled:', path);
});

const byType = {}
all.forEach(item => {
  if (!byType.hasOwnProperty(item.drumName)) byType[item.drumName] = [];
  byType[item.drumName].push(item);
});

let out = fs.createWriteStream('./by-type.js');
out.write('module.exports = ', 'utf8');
out.write(JSON.stringify(byType, null, 2), 'utf8');
out.write(';\n', 'utf8');

out = fs.createWriteStream('./all.js');
out.write('module.exports = ', 'utf8');
out.write(JSON.stringify(all, null, 2), 'utf8');
out.write(';\n', 'utf8');
