import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/boot'
import SplashState from './states/preloader';
import IntroState from './states/intro';
import MenuState from './states/menu';
import GameState from './states/game';

import config from './config';

class Game extends Phaser.Game {

  constructor () {
    super(800, 600, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Intro', IntroState, false);
    this.state.add('Menu', MenuState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}

window.game = new Game();
