function main() { 
  return Spy
}


function Spy(obj, method) { 
  // Make copy
  const originalMethod = obj[method]
  let result = { count: 0 }
  
  // Spy
  // 1. inc counter 
  // 2.execute the method
  obj[method] = function () {
		// 1. inc counter
		result.count++;
		// 2.execute the method
    return originalMethod.apply(this, arguments)
  }
  
  return result
}






