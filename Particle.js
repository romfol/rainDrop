import * as PIXI from "pixi.js";

export class Particle {
    constructor(x, y, texture, size) {
        this.sprite = new PIXI.Sprite(texture);

        this.size = size;

        this.sprite.height = this.size;
        this.sprite.width = this.size;
        this.sprite.x = x;
        this.sprite.y = y;

        this.gravity = 0.5;

        this.x = x;
        this.y = y;

        this.vx = 0;
        this.vy = 0;

        this.bottom = window.innerHeight;

    }

    update() {
        console.log("updated");

        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;
        console.log(this.x, this.y)

        if(this.y + this.size > this.bottom) {
            this.vy = 0;
            this.vx = 0;
            this.gravity = 0;
            console.log("bottom");
        }

        this.sprite.x =  this.x;
        this.sprite.y =  this.y;
    }
}