function main(){

  function canFight(stats){
    return {
      fight: ()=>{
        stats.stamina--;
        console.log(`${stats.name} slashes at the foe!`)
      }
    }
  }

  function canCast(stats){
    return {
      cast: (spell)=>{
        stats.mana--;
        console.log(`${stats.name} cast ${spell}`)
      }
    }
  }

  let obj = {
		fighter: (name) => {
			let baseStats = {
				name,
				heath: 100,
				stamina: 100,
			};
			 return Object.assign(baseStats, canFight(baseStats));
		},
		mage: (name) => {
      let baseStats = {
				name,
				heath: 100,
        mana: 100
			};
      return Object.assign(baseStats, canCast(baseStats))
    },
	}; 


  return obj
}


let create = main();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);



