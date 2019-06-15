import * as Phaser from 'phaser';

export class IntroScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'intro'
    });
  }

  create() {
    this.createMenuButton(20, 20, 'Open A', 'A');
    this.createMenuButton(220, 20, 'Open B', 'B');
  }

  createMenuButton(x, y, label, data) {
    const btn = this.add.text(x, y, label, { fontSize: '30px', color: '#ffffff' }).setInteractive();
    btn.addListener('pointerup', () => {
      this.scene.start('game', data);
    });
    btn.addListener('pointerover', () => {
      btn.setStyle({ color: '#f00' });
    });
    btn.addListener('pointerout', () => {
      btn.setStyle({ color: '#fff' });
    });
  }
}