import Phaser from 'phaser'

import {Scene1} from './scenes/scene-1'
import {Scene2} from './scenes/scene-2'


// var config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 200 }
//         }
//     },
//     scene: {
//         preload: preload,
//         create: create
//     }
// };

var config2 = {
    width: 680,
    height: 400,
    scene: Scene1
}


var game = new Phaser.Game(config2);

// function preload ()
// {
//     this.load.setBaseURL('http://labs.phaser.io');
//
//     this.load.image('sky', 'assets/skies/space3.png');
//     this.load.image('logo', 'assets/sprites/phaser3-logo.png');
//     this.load.image('red', 'assets/particles/red.png');
// }
//
// function create ()
// {
//     this.add.image(400, 300, 'sky');
//
//     var particles = this.add.particles('red');
//
//     var emitter = particles.createEmitter({
//         speed: 100,
//         scale: { start: 1, end: 0 },
//         blendMode: 'ADD'
//     });
//
//     var logo = this.physics.add.image(400, 100, 'logo');
//
//     logo.setVelocity(100, 200);
//     logo.setBounce(1, 1);
//     logo.setCollideWorldBounds(true);
//
//     emitter.startFollow(logo);
//   }
