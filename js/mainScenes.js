export default class mainScenes extends Phaser.Scene {
  constructor(W, H) {
    super('mainScenes')
    this.W = W
    this.H = H
  }

  preload() {
    this.load.image('sky', '../img/Background/background_0000.png')
    this.load.image('ground', '../img/Background/background_0004.png')
  }

  create() {
    // sky
    for (let i = 0; i < 18; i++) {
      for (let j = 0; j < 18; j++) {
        this.add.image(i * 24, j * 24, 'sky')
      }
    }

    //ground

    this.ground = this.physics.add.staticGroup()

    for (let i = 0; i < 18; i++) {
      this.ground.create(24 * i, 400 - 24, 'ground')
    }
  }

  update() {
    console.log('update')
  }
}
