export class SimpleScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, 'Scene One!', { fill: '#0f0' });
  }
}
