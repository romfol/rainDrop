import glasses from './assets/glasses.png'

export class Glasses {
    constructor(x, y) {
        this.image = new Image();
        this.image.src = glasses;

        this.bitmap = new createjs.Bitmap(this.image);
        this.bitmap.x = x;
        this.bitmap.y = y;
        this.bitmap.scaleX = 0.08;
        this.bitmap.scaleY = 0.07;
    }
}