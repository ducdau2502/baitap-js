class Oto {
    image
    top
    left
    size
    speed


    constructor(image, top, left, size, speed) {
        this.image = image
        this.top = top
        this.left = left
        this.size = size
        this.speed = speed
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

}
