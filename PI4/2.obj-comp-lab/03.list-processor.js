function main(arr) { 
  let obj = {
    list: [],
    add(str) {
      this.list.push(str);
    }, 
    remove(str) { 
      this.list = this.list.filter(val=> val !== str)
    }, 
    print() { 
      console.log(this.list.join(','))
    }
  }

  arr.forEach(val => { 
    let [command, word] = val.split(' ');
    obj[command](word);
  })

}


main(['add pesho', 'add george', 'add peter', 'remove peter','print'])