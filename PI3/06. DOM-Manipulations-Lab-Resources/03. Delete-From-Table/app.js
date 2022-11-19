function deleteByEmail() {
 
  // DOM variables 
  const input = document.querySelector('input[name="email"]');
  const result = document.querySelector('#result');
  const emails = Array.from(document.querySelectorAll('tr>td:last-child'));

  // Find the email the user entered in the table emails 
  const email = emails.find(email => email.textContent === input.value);
  
  input.value = '';
  if (!email) { 
    result.textContent = 'Not found.'
    return;
  }

  // Matching email I want to remove it
  email.parentElement.remove();
  result.textContent = 'Deleted.'

}
