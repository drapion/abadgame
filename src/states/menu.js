import Phaser from 'phaser';

export default class extends Phaser.State {
  preload () {

  }

  create () {
    this.dan = this.add.sprite(this.world.centerX, this.world.centerY, 'dan');
    this.dan.anchor.set(.5);
  }

  render () {

  }
}