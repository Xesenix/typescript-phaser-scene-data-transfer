import * as Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'game'
    });
  }

  create(data) {
    console.log('game started', data);
    const btn = this.add.text(20, 20, `Started with: ${data}\nClick to return`, { fontSize: '30px', color: '#ffffff' }).setInteractive();;
    btn.addListener('pointerup', () => {
      this.scene.start('intro');
    });
  }
}