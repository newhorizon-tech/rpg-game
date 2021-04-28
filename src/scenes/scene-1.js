export class Scene1 extends Phaser.Scene {
  constructor() {
    super("Scene1");
  }

  preload() {
    this.load.image('boat', 'assets/boat.jpg');
  }

  create() {
    this.add.text(100, 100, 'Scene One!', {
      fill: '#0f0'
    });
    this.add.image(400, 300, 'boat');
    this.scene.start("Scene2")
  }
}
