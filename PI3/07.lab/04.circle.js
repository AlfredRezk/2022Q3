class Circle { 
  constructor(radius) { 
    this.radius = radius;
  }

  get diameter() { 
    return this.radius * 2;
  }

  set diameter(d) { 
    this.radius = d / 2;
  }

  get area() { 
    return Math.PI * this.radius ** 2;
  }
  set area(a) { 
    this.radius = Math.sqrt(a/Math.PI);
  }
}


let c = new Circle(2);
console.log(c.diameter)
c.diameter = 6;

console.log(c.area);
c.area = 25;
console.log(c.radius);