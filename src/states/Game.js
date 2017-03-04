import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {

  }

  preload() {

  }

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('grass');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.dan = this.add.sprite(0, 0, 'dan');
    this.physics.enable(this.dan, Phaser.Physics.ARCADE);
    this.dan.body.collideWorldBounds = true;
    this.dan.body.gravity.set(0, 180);
  }

  update() {

  }

  render() {

  }
}
