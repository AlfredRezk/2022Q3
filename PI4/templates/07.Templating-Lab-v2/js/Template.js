class Partial { 
  constructor(path, name, data) { 
    this.name = name;
    this.path = path;
    this.data = data;
  }
}


class Template { 
  constructor(path, data, el, partials) { 
    this.path = path;
    this.data = data;
    this.el = el;
    this.partials = partials;
  }

// use fetch to read files 
  loadFile(path) { 
    return new Promise((resolve, reject) => { 
      fetch(path)
        .then(res => res.text())
        .then(text => resolve(text))
        .catch(err=> reject(err))
    })
  }

  render() { 
    if (this.partials.length >= 1) {
 
      // combine partials data to template data 
      let partialsData = this.partials.map(p => p.data)
      partialsData = Object.assign({}, ...partialsData)
      this.data = { ...this.data, ...partialsData }
      this.partials.forEach(partial => { 
        this.loadFile(partial.path).then(src => { 
          Handlebars.registerPartial(partial.name, src);
        })
      })
    }

    // No partials
    this.loadFile(this.path)
      .then(src => { 
        const template = Handlebars.compile(src);
        const result = template(this.data);
        document.querySelector(this.el).innerHTML = result;
      })
  }

}



