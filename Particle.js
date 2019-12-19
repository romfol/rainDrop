import * as PIXI from "pixi.js";

export class Particle {
    constructor(x, y, texture, size) {
        this.sprite = new PIXI.Sprite(texture);

        this.sprite.height = size;
        this.sprite.width = size;
        this.sprite.x = x;
        this.sprite.y = y;

        this.gravity = 0.5;

        this.x = x;
        this.y = y;

        this.vx = 0; //speed
        this.vy = 0; //speed

    }

    update() {
        console.log("updated");

        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;

        this.sprite.x = this.x;
        this.sprite.y = this.y;
    }
}