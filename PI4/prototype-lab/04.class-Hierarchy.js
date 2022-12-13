function main() {
  class Figure {
    constructor(defaultValue = 'cm') {
      this.default = defaultValue
      this.units = {
        m: 0.01, 
        cm: 1,
        mm:10
      }
    }
    changeUnits(unit) { 
      this.default = unit;
    }
  }


  class Circle extends Figure {
    constructor(radius, defUnit) { 
      super(defUnit);
      this.radius = radius;
    }

    get area() { 
      return Math.PI * this.radius * this.units[this.default] * this.radius * this.units[this.default];
    }

    toString() { 
      return `Figures units: ${this.default} Area: ${this.area} - radius: ${this.radius* this.units[this.default]}`;
    }

  }

  class Rectangle extends Figure {
    constructor(width, height, defUnit) { 
      super(defUnit);
      this.width = width; 
      this.height = height;
    }

    get area() { 
      return this.width *this.units[this.default] * this.height * this.units[this.default];
    }
    toString() {
      let width = this.width * this.units[this.default];
      let height = this.height * this.units[this.default];
      return `Figures units: ${this.default} Area: ${this.area} - width: ${width}, height: ${height}`;
    }
  }

  return {
    Figure, 
    Circle, 
    Rectangle
  }
}