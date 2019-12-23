export class SnowFlake {
    constructor(x, y) {
        this.circle = new createjs.Shape();
        this.circle.graphics.beginFill("Blue").drawCircle(10, 10, 1);
        this.circle.x = x;
        this.circle.y = y;
    }
}
