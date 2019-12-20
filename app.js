import * as PIXI from "pixi.js";
import bla from "./texture.png"

import { Particle } from './Particle';

const loader = PIXI.Loader.shared;

class Sketch {
    constructor() {
        this.app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            resizeTo: window,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.app.view);

        this.container = new PIXI.ParticleContainer(1000);

        this.app.stage.addChild(this.container);

        this.number = 50;

        this.particleSize = 20;

        this.drops = [];

        this.addObjects()

    }

    addObjects() {
      for(let i = 0; i <= this.number; i++) {
        loader.add('drop', bla).load((loader, resources) => {
          let particle = new Particle(10, 5, resources.drop.texture, this.particleSize);
          this.drops.push(particle)

          this.container.addChild(particle.sprite);
          })
      }

        this.animate();
    }

    animate() {
        // Listen for animate update
        this.app.ticker.add((delta) => {
            this.drops.forEach((d) => d.update())
        });
    }

}


const b = new Sketch();
