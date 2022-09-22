import cabasa from './assets/sounds/CABASA.mp3';
import tamb from './assets/sounds/TAMB.mp3';
import conga from './assets/sounds/CONGA.mp3';
import cowb from './assets/sounds/COWB.mp3';
import claps from './assets/sounds/CLAPS.mp3';
import bongo from './assets/sounds/BONGO.mp3';
import hihat from './assets/sounds/HIHAT.mp3';
import toms from './assets/sounds/TOMS.mp3';
import snare from './assets/sounds/SNARE.mp3';

const Pads = [
  {
    id: 'cabasa',
    name: 'CABASA',
    audio: cabasa,
    key: 'Q',
    keyCode: 81,
  },
  {
    id: 'tamb',
    name: 'TAMB',
    audio: tamb,
    key: 'W',
    keyCode: 87,
  },
  {
    id: 'conga',
    name: 'CONGA',
    audio: conga,
    key: 'E',
    keyCode: 69,
  },
  {
    id: 'cowb',
    name: 'COWB',
    audio: cowb,
    key: 'A',
    keyCode: 65,
  },
  {
    id: 'claps',
    name: 'CLAPS',
    audio: claps,
    key: 'S',
    keyCode: 83,
  },
  {
    id: 'bongo',
    name: 'BONGO',
    audio: bongo,
    key: 'D',
    keyCode: 68,
  },
  {
    id: 'hihat',
    name: 'HIHAT',
    audio: hihat,
    key: 'Z',
    keyCode: 90,
  },
  {
    id: 'toms',
    name: 'TOMS',
    audio: toms,
    key: 'X',
    keyCode: 88,
  },
  {
    id: 'snare',
    name: 'SNARE',
    audio: snare,
    key: 'C',
    keyCode: 67,
  },
];

export default Pads;
