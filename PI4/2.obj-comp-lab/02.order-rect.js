function main(list) {

   let rectArray= list.map(rect => { 
     let [width, height] = rect;
     let rectObj = {
       width, 
       height, 
       area: function () { 
         return this.height * this.width;
       }, 
       compareTo: function (otherRect) { 
         let ourArea = this.area();
         let otherArea = otherRect.area();
         if (ourArea == otherArea) { 
           if (this.width > otherRect.width) return 1;
           else return -1;
         }
         else if (ourArea > otherArea) return 1;
         else if (ourArea < otherArea) return -1;
       } 
     }

     return rectObj
   })

  rectArray.sort((a, b) => b.compareTo(a));
  console.log(rectArray)
  
}

main([
	[10, 5],
	[5, 12],
]);