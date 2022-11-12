function main(a) { 
  return function (b) { 
    return a + b;
  }
}

let add5 = main(5);
console.log(add5(2));
console.log(add5(3));