import * as Phaser from 'phaser';

export class IntroScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'intro'
    });
  }

  create() {
    const btn = this.add.text(20, 20, 'Hello 666', { fontSize: '30px', color: '#ffffff' }).setInteractive();
    btn.addListener('pointerup', () => {
      console.log('game started click');
      this.scene.start('game', 666);
    });
    btn.addListener('pointerover', (ev) => {
      console.log('game started click', ev);
      btn.setStyle({ color: '#f00' });
    });
    btn.addListener('pointerout', (ev) => {
      console.log('game started click', ev);
      btn.setStyle({ color: '#fff' });
    });

  }
}