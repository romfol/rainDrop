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

        // this.bitmap.addEventListener("click", this.animate);

    }


    // animate(event) {
    //     console.log(this)
    //     let that = this;
    //    createjs.Tween.get(that.bitmap, { loop: true }).to(
    //     { alpha: 0, y: 130 },
    //     2000
    //   );
    // }
}


