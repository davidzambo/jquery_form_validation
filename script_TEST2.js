var name = document.getElementsByName('fname').value;
var email = document.getElementsByName('femail').value;
var phonenumber = document.getElementById('fphonenumber').value;
var intro = document.getElementsByName('fintro').value;

function isPhoneNumber(phonenumber){
  var nameRegEx = /[1]/g;
  if (nameRegEx.test(phonenumber)) {
    document.getElementById('phonenumber_error').innerHTML = phonenumber+"<br>";
    document.getElementById('phonenumber_error').innerHTML = nameRegEx.test(phonenumber);
  } else {
    document.getElementById('phonenumber_error').innerHTML = phonenumber+"<br>";
    document.getElementById('phonenumber_error').innerHTML = "fint";
  }
}


/*
function formValidation(){

//check if the name is real name, else puts an error message
  function isName(name){
    var regEx = /^ $/
  }
nameRegEx = /^[\d\s[+()]*$/;
}
*/
