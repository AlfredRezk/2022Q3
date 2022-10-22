function main(arr) { 

  // create an empty Map
  let map = new Map();

  for (let data of arr) { 
    // let grades = data.split(' '); 
    // let name = grades.shift();
    let [name, ...grades] = data.split(' ');
    grades = grades.map(Number);

    if (!map.has(name)) {
      map.set(name, grades);
    } else { 
      let oldGrades = map.get(name);
      // let newGrades = oldGrades.concat(grades);
      let newGrades = [...oldGrades, ...grades];
      // UPDATE THE STUDENT GRADES
      map.set(name, newGrades);
    }
  }

  // convert the map to an Array
  let mapArr = Array.from(map);

  mapArr.sort((a, b) => { 
    let [nameA, gradesA] = a;
    let [nameB, gradesB] = b;

    let averageA = gradesA.reduce((sum, num) => sum + num, 0) / gradesA.length;
    let averageB = gradesB.reduce((sum, num) => sum + num, 0) / gradesB.length;
    return averageA - averageB;
  })

  // print the array 
  for (let studentInfo of mapArr) { 
    let [name, grades] = studentInfo;
    console.log(`${name} -> ${grades.join(', ')}`)
  }

}

main(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);