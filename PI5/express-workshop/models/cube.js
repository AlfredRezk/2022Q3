const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, '../data/db.json');

// function to get all cubes from db.json file 
const getCubes = () => { 
  return new Promise((resolve, reject) => { 
    fs.readFile(dbFile, (err, data) => { 
      // if error - file is not exist 
      if (err) return resolve([])
      // return the cubes as array of data 
      resolve(JSON.parse(data));
    })
  })
}


module.exports = class Cube { 
  constructor(name, description, imageUrl, level) {  
    this.name = name; 
    this.description = description;
    this.imageUrl = imageUrl;
    this.level = level;
  }

  async save() { 
    const cubes = await getCubes();
    this.id = Date.now();
    cubes.push(this)
    fs.writeFile(dbFile, JSON.stringify(cubes), (err) => { 
      console.log(err);
    })
  }

  static async fetchCubes() { 
    return await getCubes();
  }

  static async findById(id) { 
    
    const cubes = await getCubes();

    const cube = cubes.find(c => c.id == id)
    return cube;
    
  }
}
