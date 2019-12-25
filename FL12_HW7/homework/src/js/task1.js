const EMAIL_MIN_LENGHT = 5;
const PASSWORD_MIN_LENGHT = 6;
const SAVED_EMAIL_USER = 'user@gmail.com';
const SAVED_EMAIL_ADMIN = 'admin@gmail.com';
const SAVED_PASSWORD_USER = 'UserPass';
const SAVED_PASSWORD_ADMIN = 'AdminPass';

const userInputEmail = prompt('Please enter your email');
if (userInputEmail === '' || userInputEmail === null) {
  alert('Canceled');
} else if (userInputEmail.length < EMAIL_MIN_LENGHT) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (
  userInputEmail === SAVED_EMAIL_USER ||
  userInputEmail === SAVED_EMAIL_ADMIN
) {
  // correct userInputEmail
  const userInputPassword = prompt('Please enter your password');
  if (userInputPassword === '' || userInputPassword === null) {
    alert('Canceled');
  } else if (
    userInputEmail === SAVED_EMAIL_USER &&
      userInputPassword !== SAVED_PASSWORD_USER ||
    userInputEmail === SAVED_EMAIL_ADMIN &&
      userInputPassword !== SAVED_PASSWORD_ADMIN
  ) {
    // wrong userInputPassword
    alert('Wrong password');
    const changePassword = confirm('Do you want to change your password');
    if (changePassword) {
      //change password
      const oldPassword = prompt('Please write the old password');
      if (oldPassword === '' || oldPassword === null) {
        alert('Canceled');
      } else if (
        userInputEmail === SAVED_EMAIL_USER &&
          oldPassword === SAVED_PASSWORD_USER ||
        userInputEmail === SAVED_EMAIL_ADMIN &&
          oldPassword === SAVED_PASSWORD_ADMIN
      ) {
        const newPassword = prompt('Please enter your new password');
        if (newPassword === '' || newPassword === null) {
          alert('Canceled');
        } else if (newPassword.length < PASSWORD_MIN_LENGHT) {
          alert("It's too short password. Sorry.");
        } else {
          // New password is valid
          const newPasswordConfirm = prompt(
            'Please enter your new password again'
          );
          if (newPassword === newPasswordConfirm) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password');
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('You have failed the change');
    }
  } else {
    // good password, don't change
    console.log('You have successfully logged in');
  }
} else {
  alert("I don't know you");
}
