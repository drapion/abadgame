import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
    var cursors
  }

  preload() {

  }

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('grass');

    this.layer = this.map.createLayer('Tile Layer 1');
    this.map.setCollisionBetween(1, 100, true, 'Tile Layer 1');

    this.dan = this.add.sprite(0, 0, 'dan');
    this.physics.enable(this.dan, Phaser.Physics.ARCADE);
    this.dan.body.collideWorldBounds = true;
    this.dan.body.gravity.set(0, 180);

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    game.physics.arcade.collide(this.dan, this.layer);
    this.dan.body.velocity.x = 0;

    if (this.cursors.up.isDown && this.dan.body.onFloor()) {
      this.dan.body.velocity.y = -150;
    } else if (this.cursors.right.isDown) {
      console.log("right down");
      this.dan.body.velocity.x = 150;
    } else if (this.cursors.left.isDown) {
      console.log("left down");
      this.dan.body.velocity.x = -150;
    }

  }

  render() {

  }
}