export class Scene1 extends Phaser.Scene {
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  constructor() {
    super("Scene1");
  }

  preload() {
    this.load.image('boat', 'assets/boat.jpg');
  }


  async create() {
    this.add.text(100, 100, 'Scene One!', {
      fill: '#0f0'
    });
    this.add.image(400, 300, 'boat');
    await sleep(8000);
    
    this.scene.start("Scene2")
  }
}
