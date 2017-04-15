import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
    this.jumpTimer = 0;
    var cursors
    var weapon
    var fireKey
  }

  preload() {

  }

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.world.setBounds(0, 0, 1120, 608);
    
    this.weapon = game.add.weapon(30, 'bullet');

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('grass');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.map.setCollisionBetween(1, 2);

    this.dan = this.add.sprite(0, 0, 'dan');
    this.physics.enable(this.dan, Phaser.Physics.ARCADE);
    this.dan.body.collideWorldBounds = true;
    this.dan.body.gravity.set(0, 450);
    this.dan.scale.x = -1;
    this.dan.anchor.set(.5);

    this.alex = this.add.sprite(300, 0, 'alex');

    this.cursors = this.input.keyboard.createCursorKeys();
    this.fireKey = this.input.keyboard.addKey(Phaser.Keyboard.P);

    this.camera.follow(this.dan);
    this.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);

    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 650
    this.weapon.fireRate = 50;
    this.weapon.trackSprite(this.dan, 0, 0, true);
  }
// i play pokemon go
  update() {
    this.physics.arcade.collide(this.dan, this.layer);
    this.physics.arcade.collide(this.weapon.bullets, this.layer);
    this.dan.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
      this.dan.body.velocity.x = -150;
      this.dan.scale.x = 1;
      this.dan.anchor.set(.5);
    }
    if (this.cursors.right.isDown) {
      this.dan.body.velocity.x = 150;
      this.dan.scale.x = -1;
      this.dan.anchor.set(.5);
    }

    if (this.cursors.up.isDown && this.dan.body.onFloor() && this.time.now > this.jumpTimer) {
        this.dan.body.velocity.y = -350;
        this.jumpTimer = this.time.now + 750;
    }
    if (this.fireKey.isDown) {
      weapon.fire();
    }
  }

  render () {

  }
}
