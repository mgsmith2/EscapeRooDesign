function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "THE CODE IS IN THE NEWS REPORT") {
     window.location.href = 'https://mgsmith2.github.io/EscapeRooDesign/puzzle-2.html';
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }
