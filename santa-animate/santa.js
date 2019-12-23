import santa from './assets/santa.png'

export class Santa {
    constructor(x, y) {
        this.image = new Image();
        this.image.src = santa;

        this.bitmap = new createjs.Bitmap(this.image);
        this.bitmap.x = x;
        this.bitmap.y = y;
        this.bitmap.scaleX = 0.48;
        this.bitmap.scaleY = 0.45;
    }
}


