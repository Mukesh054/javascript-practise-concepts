let shapeFn = (function () {
  let allowedShapes = new WeakMap();
  let shapeName = new WeakMap();
  let dimensions = new WeakMap();

  class Shape {
    constructor(myShapeName, myshapeDimensions) {
      allowedShapes.set(this, ["square", "rectangle", "circle"]);
      shapeName.set(this, myShapeName);
      dimensions.set(this, myshapeDimensions);
    }

    area() {
      if (this.validateShape()) {
        if (shapeName.get(this) === "square") {
					return dimensions.get(this)[0] * dimensions.get(this)[0];
        } else if (shapeName.get(this) === "rectangle") {
          return dimensions.get(this)[0] * dimensions.get(this)[1];
        } else if (shapeName.get(this) === "circle") {
          return 2 * Math.PI * dimensions.get(this)[0];
        }
        return false;
      }
      return false;
    }

    validateShape() {
      return allowedShapes.get(this).indexOf(shapeName.get(this)) > -1;
    }
  }

  return Shape;
})();

// let shape = new shapeFn("rectangle", [10, 20]);
let shape = new shapeFn("circle", [2]);
// let shape = new shapeFn("square", [10]);
console.log(shape.area());
