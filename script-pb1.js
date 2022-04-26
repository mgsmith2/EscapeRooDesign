function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "THE CODE IS IN THE NEWS REPORT") {
     window.location.href = 'https://codepen.io/mgsmith2/pen/wvpMpgd';
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }