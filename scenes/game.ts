import * as Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'game'
    });
  }

  create(data) {
    console.log('game started', data);
    this.add.text(20, 20, `Game ${data}`, { fontSize: '30px', color: '#ffffff' });
  }
}