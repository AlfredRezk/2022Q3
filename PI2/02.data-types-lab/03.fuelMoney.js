function main(distance, people, fuelPrice) { 
  // Fuel with no passengers only the driver in L
  let fuel = (distance / 100) * 7;
  // calculate the fuel consumption for passengers
  fuel += people * 0.1;
  let cost = fuel * fuelPrice;
  console.log(`Needed money for the trip is ${cost}lv.`)
  
}

main(260, 9, 2.49);
main(90, 14, 2.88);