class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    //********************
    // Width
    //********************

    get width() {
        return this._width;
    }

    set width(value) {
        if (typeof value !== 'number') {
            throw new Error('"width" must be a number.');
        }

        this._width = value;
    }

    //********************
    // Height
    //********************

    get height() {
        return this._height;
    }


    set height(value) {
        if (typeof value !== 'number') {
            throw new Error('"height" must be a number.');
        }

        this._height = value;
    }
    
    //********************
    // Area
    //********************

    get area() {
        return this.width * this.height;
    }

    //********************
    // Circumference
    //********************

    get circumference() {
        return 2 * this.width + 2 * this.height;
    }
}

module.exports = Rectangle;