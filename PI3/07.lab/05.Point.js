class Point { 
  constructor(x, y) { 
    this.x = x;
    this.y = y;
  }

  static distance(a,b) { 
    const xDiff = a.x - b.x;
    const yDiff = a.y - b.y;
    return Math.sqrt(xDiff ** 2 + yDiff ** 2);
  }

}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));