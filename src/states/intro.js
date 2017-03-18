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

    this.dan = this.add.sprite(0, 288, 'dan');

    this.alex = this.add.sprite(770, 274, 'alex');
    this.laugh = this.add.audio('laugh');

    this.bush = this.add.sprite(736, 305, 'bush');
    this.bush.anchor.set(.5);

    this.danmove = this.add.tween(this.dan);

    this.danmove.to({ x: 300 }, 7500, 'Linear', true, 0);

    this.time.events.add(Phaser.Timer.SECOND * 8, () => {
      this.laugh.play();
    }, this);
  }

  update() {
    this.physics.arcade.collide(this.dan, this.layer);
  }

  render() {

  }
}

/*
this.world.setBounds(0, 0, 800, 600);
        this.stage.backgroundColor = '#FFF8FF';
        this.music = this.add.audio('intromus');
        this.music.play();
        this.music.volume = 0;

        this.time.events.add(Phaser.Timer.SECOND * 4.46, () => {
            this.fbi = this.add.image(-125, this.world.centerY - 175, 'FBI');
            this.fbi.scale.x = .5;
            this.fbi.scale.y = .5;
            this.jump = this.fbi.animations.add('jump', [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0], 13, true);
            this.jump2 = this.fbi.animations.add('jump2', [0, 1, 2, 3, 4, 5, 6], 13, false);
            this.jump3 = this.fbi.animations.add('jump3', [6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6], 13, false);
            this.hop = this.fbi.animations.add('hop', [7, 8, 9, 10], 10, false);

            this.trumpback = this.add.image(816, this.world.centerY - 200, 'trumpback');
            this.trumpback.scale.x = .6;
            this.trumpback.scale.y = .6;
            this.trumpattack = this.trumpback.animations.add('attack', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 11, 12, 13], 9, false);

            this.fbitween = this.add.tween(this.fbi);

            this.fbitween.to({ x: 470 }, 1200, 'Linear', true, 0);

            this.trumptween = this.add.tween(this.trumpback);

            this.trumptween.to({ x: 110 }, 1200, 'Linear', true, 0);
        }, this);

        this.bartop = this.add.sprite(0, 0, 'blackbar');
        this.bartop.scale.x = 2;
        this.barbottom = this.add.sprite(0, 400, 'blackbar');
        this.barbottom.scale.x = 2;
        this.barbottom.scale.y = 2.5;

        this.time.events.add(Phaser.Timer.SECOND * 5.674230, () => {
            this.jump.play();
            this.jump.onLoop.add(() => {
                if (this.jump.loopCount == 1) {
                        this.jump.loop = false;
                    }
            }, this);
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 7.97, () => {
            this.trumpattack.play();
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 8.94, () => {
            this.jump2.play();
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 10.965, () => {
            this.jump3.play();
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 12.465, () => {
            this.hop.play();
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 15, () => {
            this.blackscreen = this.add.sprite(0, 0, 'blackbar');
            this.blackscreen.scale.x = 10;
            this.blackscreen.scale.y = 10;
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 15.5, () => {
            this.game.state.start('Map');
        }, this);

        this.input.onDown.add(this.skip, this);
*/
