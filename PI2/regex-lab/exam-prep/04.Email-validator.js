// There are six possible commands:
// • "Make Upper"
// o Replace all letters with upper case, then print the result.
// • "Make Lower"
// o Replace all letters with lower case, then print the result.
// • "GetDomain {count}
// o Print the last {count} characters of the Email.
// • "GetUsername"
// o Print the substring from the start of the Email until the @ symbol.
// o If the Email doesn’t contain the @ symbol, print:
// "The email {email} doesn't contain the @ symbol."

// • "Replace {char}"
// o Replace all occurrences of the {char} with a dash "-" and print the result.
// • "Encrypt"
// o Get the ASCII value of each symbol. Print the result on a single line separated by a
// single space

function main(arr) { 

  let email = arr.shift();
  arr.pop();

  arr.forEach(cmdStr => { 
    let [command, arg] = cmdStr.split(' ');
    switch (command) { 
      case "Make":
        if (arg === 'Upper')
          email = email.toUpperCase();
        else if (arg === 'Lower')
          email = email.toLowerCase();
        console.log(email);
        break;
      case "GetDomain":
        let count = arg;
        console.log(email.substr(-count))
        break;
      case "GetUsername":
        let index = email.indexOf('@');
        if (index == -1)
          console.log(`The email ${email} doesn't contain the @ symbol.`);
        else
          console.log(email.substring(0, index))
        break;
      case "Replace":
        let char = arg;
        email = email.replaceAll(char, '-');
        console.log(email);
        break;
      case "Encrypt":
        // Enc the string to ascii code 
        let enc = email.split('').map(char => char.charCodeAt()).join(' ');
        console.log(enc);
        break;
    }
  })

}

// main([
// 	`Mike123@somemail.com`,
// 	`Make Upper`,
// 	`GetDomain 3`,
// 	`GetUsername`,
// 	`Encrypt`,
// 	`Complete`,
// ]);

main([`AnotherMail.com`, `Make Lower`, `GetUsername`, `Replace a`, `Complete`]);