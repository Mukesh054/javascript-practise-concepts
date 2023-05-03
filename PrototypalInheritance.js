function Rectangle(h, w) {
  this.height = h;
  this.width = w;
}

Rectangle.prototype.area = function () {
  return this.height * this.width;
};

function Square(a) {
  this.height = this.width = a;
}

Square.prototype = Object.create(Rectangle.prototype);

var sq = new Square(4);
console.log(sq.area()); // 16

// Inheritance in case of Objects
var Square = {
  x: 0,
  y: 0,

  create: function (x, y) {
    var obj = Object.create(this);
    obj.x = x;
    obj.y = y;
    return obj;
  },
};

var Cube = {
  z: 0,

  create: function (x, y, z) {
    var obj = Object.create(this);
    Object.assign(obj, Square.create(x, y));
    obj.z = z;
    return obj;
  },
};

// Your code
var MyCube = Cube.create(20, 30, 40);
console.log(MyCube);
