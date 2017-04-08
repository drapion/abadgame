import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init() { }

  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    /*
    this is where you preload things
    */
    this.load.image('grass', 'assets/tileset/grass.png');
    this.load.image('bush', 'assets/tileset/bush.png');
    this.load.image('dansparent', 'assets/general/dansparent.png');
    this.load.tilemap('intromap', 'assets/tilemap/intro.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('map', 'assets/tilemap/map.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.spritesheet('dan', 'assets/general/dan.png', 25, 32);
    this.load.image('guyfiery', 'assets/general/guyfiery.png');
    this.load.image('alex', 'assets/general/alextest.png');
    this.load.audio('laugh', 'assets/intro/alexlaugh.m4a');
    this.load.spritesheet('dan', 'assets/general/danhuman.png', 14, 32);
    this.load.spritesheet('bullet', 'assets/general/bullet.png', 5, 4);
  }

  create() {
    this.state.start('Intro');
  }

}
