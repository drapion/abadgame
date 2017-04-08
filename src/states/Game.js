import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
    this.jumpTimer = 0;
    var cursors;
    var weapon;
    var fireKey;
    var shootTimer;
    var wandom
    this.shootTimer = 0;
  }

  preload() {

  }

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.world.setBounds(0, 0, 1120, 608);

    this.weapon = this.add.weapon(10, 'bullet');
    
    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('grass');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.map.setCollisionBetween(1, 2);

    this.dan = this.add.sprite(0, 0, 'dan');
    this.physics.enable(this.dan, Phaser.Physics.ARCADE);
    this.physics.enable(this.weapon, Phaser.Physics.ARCADE);
    this.dan.body.collideWorldBounds = true;
    this.dan.body.gravity.set(0, 450);
    this.dan.scale.x = -1;
    this.dan.anchor.set(.5);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.fireKey = this.input.keyboard.addKey(Phaser.Keyboard.Z);

    this.camera.follow(this.dan);
    this.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);

    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 650;
    this.weapon.fireRate = 1;
    this.weapon.trackSprite(this.dan, 0, 0, true);

    this.physics.arcade.overlap(this.weapon.Bullet, this.layer, this.weapon.bullet.kill(), null, this);
  }

  update() {
    this.shootTimer++
    this.physics.arcade.collide(this.dan, this.layer);
    this.physics.arcade.collide(this.weapon.bullet, this.layer);

    this.dan.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
      this.dan.body.velocity.x = -150;
      this.dan.scale.x = 1
      this.dan.anchor.set(.5);
    }

    if (this.cursors.right.isDown) {
      this.dan.body.velocity.x = 150;
      this.dan.scale.x = -1
      this.dan.anchor.set(.5);
    }

    if (this.cursors.up.isDown && this.dan.body.onFloor() && this.time.now > this.jumpTimer) {
        this.dan.body.velocity.y = -250;
        this.jumpTimer = this.time.now + 750;
    }
    if (this.fireKey.isDown && this.shootTimer > 20) {
      this.weapon.fire();
      this.shootTimer = 0
    }
  }

  bulletHit() {
    this.weapon.bullets.killAll();
  }

  render() {
    this.game.debug.text(this.shootTimer, 0, 10);
    this.game.debug.text('🌮', 0, 30);
  }
}
