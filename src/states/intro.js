import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
  }

  preload() {

  }

  create() {
    this.map = this.add.tilemap('intromap');
    this.map.addTilesetImage('grass');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.map.setCollisionBetween(1, 2);

    this.dan = this.add.sprite(32, 288, 'dan');
    this.guy = this.add.sprite(0, 288, 'guyfiery');
    this.guy.anchor.x = .5;
    this.guy.scale.x = -1;

    this.alex = this.add.sprite(770, 274, 'alex');
    this.laugh = this.add.audio('laugh');

    this.bush = this.add.sprite(736, 305, 'bush');
    this.bush.anchor.set(.5);

    this.danmove = this.add.tween(this.dan);
    this.danmove.to({ x: 396 }, 7500, 'Linear', true, 0);

    this.guymove = this.add.tween(this.guy);
    this.guymove.to({ x: 364 }, 7500, 'Linear', true, 0);

    this.time.events.add(Phaser.Timer.SECOND * 8, () => {
      this.laugh.play();
    }, this);

    this.time.events.add(Phaser.Timer.SECOND * 9, () => {
      this.alexmove = this.add.tween(this.alex);
      this.alexmove.to({ x: 340 }, 100, 'Linear', true, 0);
    }, this);

    this.time.events.add(Phaser.Timer.SECOND * 9.5, () => {
      this.alexmove = this.add.tween(this.alex);
      this.alexmove.to({ x: -100 }, 500, 'Linear', true, 0);
      this.guy.kill();
    }, this);

    this.input.onDown.add(this.skip, this);
  }

  update() {
    this.physics.arcade.collide(this.dan, this.layer);
  }

  render() {

  }

  skip () {
    this.game.state.start('Menu');
  }
}
