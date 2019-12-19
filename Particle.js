import * as PIXI from "pixi.js";

export class Particle {
    constructor(x, y, texture, size) {
        this.sprite = new PIXI.Sprite(texture);

        this.sprite.height = size;
        this.sprite.width = size;
        this.sprite.x = x;
        this.sprite.y = y;
    }

    update() {
        console.log("updated");
    }
}