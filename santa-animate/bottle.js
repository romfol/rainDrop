import bottle from './assets/bottle.png'

export class Bottle {
    constructor(x, y) {
        this.image = new Image();
        this.image.src = bottle;

        this.bitmap = new createjs.Bitmap(this.image);
        this.bitmap.x = x;
        this.bitmap.y = y;
        this.bitmap.scaleX = 0.48;
        this.bitmap.scaleY = 0.45;
    }
}