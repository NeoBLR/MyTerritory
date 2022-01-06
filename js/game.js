import mainScenes from './mainScenes.js'

let getW = window.innerWidth
let getH = window.innerHeight

console.log(getW + ' ' + getH)

const config = {
  type: Phaser.AUTO,
  width: getW,
  height: getH,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 100 },
      debug: true,
    },
  },
  scene: [mainScenes(getW, getH)],
}

new Phaser.Game(config)
