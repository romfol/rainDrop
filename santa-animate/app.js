import { SnowFlake } from './snowflake';
import { Santa } from './santa';
import { Bottle } from './bottle';
import { Glasses } from './glasses';
import sound from './assets/ho-ho-ho.mp3';

const random = (max, min = 0) => min + (max - min) * Math.random();

createjs.Sound.alternateExtensions = ['mp3'];

setTimeout(() => {
  console.log(playSound);
  playSound();
}, 10000);

class Sketch {
  constructor() {
    this.stage = new createjs.Stage('demoCanvas');
    this.snowflakes = [];
    this.soundID = 'HO-HO-HO';
    this.addObjects();
  }

  addObjects() {
    let santa = new Santa(0, 100);
    this.stage.addChild(santa.bitmap);
    santa.bitmap.addEventListener('click', () => this.glassesGo());

    this.bottle = new Bottle(0, 130);
    this.stage.addChild(this.bottle.bitmap);

    for (let index = 0; index < 100; index++) {
      let snowflake = new SnowFlake(random(230), random(300));
      this.stage.addChild(snowflake.circle);
      this.snowflakes.push(snowflake);
    }
    this.animate();
  }

  animate() {
    this.snowflakes.forEach(snowflake => {
      createjs.Tween.get(snowflake.circle, { loop: true }).to(
        { alpha: 0, y: 400 },
        random(5000, 3000)
      );
    });

    createjs.Tween.get(this.bottle.bitmap, { loop: true })
      .to({ rotation: 50, x: 90 }, 1200)
      .to({ rotation: 0, x: 0 }, 1500);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', this.stage);
  }

  glassesGo() {
    let glasses = new Glasses(83, -30);
    this.stage.addChild(glasses.bitmap);

    createjs.Tween.get(glasses.bitmap).to({ alpha: 1, y: 125 }, 2000);
  }
}

const app = new Sketch();
