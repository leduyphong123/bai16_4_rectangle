function Rectangle(d, r) {
    this.d = d;
    this.r = r;
    this.setD = function (newD) {
        this.d = newD;
    }
    this.setR = function (newR) {
        this.r = newR;
    }
    this.dienTich = function () {
        document.write("<br/>dien tich =" + (this.d * this.r));
    }
    this.chuVi = function () {
        document.write("<br/>chu vi =" + ((this.d + this.r) * 2));

        return (this.d + this.r) * 2;
    }
    this.canvaRectangle = function () {
        let ctx = document.getElementById("canvaRectangle").getContext("2d");
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(20, 20, this.d, this.r);

    }
}

let rectangle = new Rectangle(200, 40);
rectangle.dienTich();
rectangle.chuVi();
rectangle.canvaRectangle();
rectangle.setD(300);
rectangle.setR(100);
rectangle.canvaRectangle();