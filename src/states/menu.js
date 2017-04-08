import Phaser from 'phaser';

export default class extends Phaser.State {
  preload () {

  }

  create () {
    this.dan = this.add.sprite(this.world.centerX, this.world.centerY, 'dansparent');
    this.dan.anchor.set(.5);
    this.dan.scale.set(2);
    this.dan.inputEnabled = true;
    this.dan.events.onInputDown.add(this.start, this);
  }

  render () {

  }

  start () {
    this.game.state.start('Game');
  }
}