$.fn.validation = function() {

//NAME VALIDATION
//Check if the form is empty and the content of it through a regular expression
//which allows ".", " ", and letters (for example dr. Kovacs Janos)
//WARNING!!! Regular expression test for non-digit letters, so just symbols can
//result valid data too!

  function isNameValid(){
    if (/^[\D]{5,30}$/i.test($("#name").val())) {
//JUST FOR TEST FEEDBACK        alert("Name is true!");
        $("#name_error").addClass("hidden"); //hide error message
        $("#name").removeClass("error"); //remove red border from input field
        return true;
    } else {
//JUST FOR TEST FEEDBACK        alert("Name is false!");
        $("#name_error").removeClass("hidden"); //show error message
        $("#name").addClass("error"); //show red border around input field
        return false;
    };
  };


//EMAIL VALIDATION
//Email validation with regular expression. The regex code is from
//http: //emailregex.com site.

  function isEmailValid(){
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#email").val())) {
//JUST FOR TEST FEEDBACK        alert("Name is true!");
        $("#email_error").addClass("hidden"); //hide error message
        $("#email").removeClass("error"); //remove red border from input field
        return true;
    } else {
//JUST FOR TEST FEEDBACK        alert("Name is false!");
        $("#email_error").removeClass("hidden"); //show error message
        $("#email").addClass("error"); //show red border around input field
        return false;
  };
};


//PHONENUMBER VALIDATION
//Check for "+" at the beginning, then allows just digits, "-", "(", ")", " ",
//with length from 11 to 22 charachters

  function isPhoneNumberValid(){
    if (/^\+?[\d\s\-\(\)]{11,22}$/i.test($("#phonenumber").val())) {
//JUST FOR TEST FEEDBACK        alert("Name is true!");
        $("#phonenumber_error").addClass("hidden"); //hide error message
        $("#phonenumber").removeClass("error"); //remove red border from input field
        return true;
    } else {
//JUST FOR TEST FEEDBACK        alert("Name is false!");
        $("#phonenumber_error").removeClass("hidden"); //show error message
        $("#phonenumber").addClass("error"); //show red border around input field
        return false;
    };
  };


//INTRODUCTION VALIDATION
//Checks that the introduction is at least 10 charachters long
//Check if the form is empty and the content of it through a regular expression
//which allows ".", " ", and letters (for example dr. Kovacs Janos)
//WARNING!!! Regular expression test for non-digit letters, so just symbols can
//result valid data too!

function isIntroductionValid(){
  if (/^[\D]{10,500}$/i.test($("#introduction").val())) {
//JUST FOR TEST FEEDBACK        alert("Name is true!");
      $("#introduction_error").addClass("hidden"); //hide error message
      $("#introduction").removeClass("error"); //remove red border from input field
      return true;
  } else {
//JUST FOR TEST FEEDBACK        alert("Name is false!");
      $("#introduction_error").removeClass("hidden"); //show error message
      $("#introduction").addClass("error"); //show red border around input field
      return false;
  };
};

//SHOW INPUT ELEMENT NUMBER METHOD
function inputElementNumber(){
  var elementNumber = $("input, textarea, button").length;
  console.log(elementNumber);
//change "ready" flag for the animated div
  isInputElementNumberLogged = true;
};


//FORM RESET METHOD
//The form can be reseted by calling this method.
function formReset(){
  $("#user_form")[0].reset();
};

//ANIMATED DIV METHOD

function sendSuccessfully(){
  $("success_result").removeClass("hidden").animate({
      opacity: 0.5,
      width: "+=200"
  },
    duration: "slow"
  );
};

var isAjaxReadyFlag = false;
var isInputElementNumberLoggedFlag = false;

isNameValid();
isEmailValid();
isPhoneNumberValid();
isIntroductionValid();

if (isNameValid() && isEmailValid() && isPhoneNumberValid() && isIntroductionValid() ) {
    setTimeout(inputElementNumber(),3000);
    $.ajax({
      url: "valami.php",
      data: {
        name: $("#name").val(),
        email: $("#email").val(),
        phonenumber: $("#phonenumber").val(),
        introduction: $("#introduction").val()
      },
      type: "POST",
      dataType: "json",
      timeout: 5000,
      success: function(){
        isAjaxReadyFlag = true;
      },
//show error messages is a return div
      error: function(result) {
        $("#error_field").html(result).removeClass("hidden");
      },
//if the input element number method is ready and the flag is true, start the
//successful div method. If not ready, waits 3 seconds, and try again
      complete: function(){
        if (isInputElementNumberLoggedFlag) {
          sendSuccessfully();
        } else {
          setTimeout(sendSuccessfully(),3000);
        };
      }
    });
};

return this;
}; // end of validation function


$(document).ready(function() {
  $("button").on("click", function(e) {
    e.preventDefault();
    $(this).validation();
  });
});
