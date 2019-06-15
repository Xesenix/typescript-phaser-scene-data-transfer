// Import stylesheets
import './style.css';

import * as Phaser from 'phaser';

import { IntroScene } from './scenes/intro';
import { GameScene } from './scenes/game';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const parent = document.getElementById('app');

if (!!parent) {
  new Phaser.Game({
    parent,
    scene: [
      IntroScene,
      GameScene,
    ],
  });
}