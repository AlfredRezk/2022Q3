function main([nhNames, ...data]) { 

  let map = new Map();
  let nhList = nhNames.split(', ')   // ['Abbey Street', 'Herald street', 'Bright Mews']
  for (let nh of nhList) { 
    map.set(nh, [])
  }

  for (let item of data) { 
    let [neighborhood, person] = item.split(' - ')
    
    // check if the neighborhood is in the list 
    if (nhList.includes(neighborhood)) { 
      // Add to the map
      map.get(neighborhood).push(person)
    }
  }
  
// sorting 
  let mapArr = Array.from(map)
  mapArr.sort((a, b) => b[1].length - a[1].length)

  // printing
  for (let [nh, people] of mapArr) { 
    console.log(`${nh} : ${people.length}`)
    people.forEach(person => console.log(`--${person}`));
  }
  

}



main(['Abbey Street, Herald Street, Bright Mews',
  'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'])