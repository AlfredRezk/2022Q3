function main(n) { 
  let months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  if (n >= 1 && n <= 12) {
    console.log(months[n])
  } else { 
    console.log('Error!')
  }
}
main(2);
main(13);