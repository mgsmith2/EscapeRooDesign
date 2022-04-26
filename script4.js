function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "WHAT YOU ARE LOOKING FOR WILL BE UNLOCKED BY THE KEY IN THE DRAWER") {
    return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }