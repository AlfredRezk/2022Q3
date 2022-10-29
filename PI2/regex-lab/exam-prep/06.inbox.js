// Create a program that manages users and Emails sent by those users. You need to store information about
// their username and their sent Emails. The Emails are represented as strings. You will be receiving lines with
// commands separated by "->" until you receive the "Statistics" command.
// There are three possible commands:
// • "Add->{username}":
// o Check if the username exists and if it does print:
// "{username} is already registered"
// If it doesn’t exist, then add the user to the collection of users.

// • "Send->{username}->{Email’s text}"
// o Add the {Email} to the {username}'s collection of sent Emails.
// • "Delete->{username}":
// o Delete the given user, if he exists. If the user doesn’t exist, print:
// "{username} not found!"

// At the end of the program, print the users, with the contents of his/her Emails. Users should be sorted in
// descending order by the number of Emails sent and then by their username in ascending order in the
// following format:
// Users count: {count}
// {username}
// - {Email1}
// - {Email2}
// - ...
// - {Emailn}


// {
//   'Mike'=> ['Hello word', 'Hi'],
//   'George' => ['Hello', 'Message2']
// }

function main(arr) { 
  let map = new Map();
  arr.pop();

  arr.forEach(cmdStr => { 
    let [command, user, message] = cmdStr.split('->');
    switch (command) {
      case "Add":
        if (map.has(user)) {
          console.log(`${user} is already registered`);
        } else {
          map.set(user, [])
        }
        break;
      case "Send":
        if (!map.has(user)) {
          console.log(`${user} is not registered`);
        } else {
          let emails = map.get(user);
          emails.push(message);
          map.set(user, emails);
        }
        break;
      case "Delete":
        if (!map.has(user)) {
          console.log(`${user} not found!`);
        } else {
          map.delete(user);
        }
        break;
    }
  })

  let outArr = Array.from(map);
  outArr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  console.log(`User count: ${outArr.length}`)
  outArr.forEach(user => { 
    let [username, emails] = user;
    console.log(username);
    emails.forEach(email => { 
      console.log(` - ${email}`);
    })
  })
}

// main([
// 	`Add->Mike`,
// 	`Add->George`,
//   `Send->George->Hello World`,
//   `Send->George->Some random test mail`,
// 	`Send->Mike->Hello, do you want to meet up tomorrow?`,
// 	`Send->George->It would be a pleasure`,
// 	`Send->Mike->Another random test mail`,
// 	`Statistics`,
// ]);

main([
	`Add->Mike`,
	`Add->George`,
	`Send->George->Hello World`,
	`Send->George->Your loan is overdue`,
	`Add->Mike`,
	`Send->Mike->Hello, do you want to meet up tomorrow?`,
	`Delete->Peter`,
	`Send->George->I'm busy`,
	`Send->Mike->Another random test mail`,
	`Delete->George`,
	`Statistics`,
]);