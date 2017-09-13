'use strict';

var validate = function() {
// Getting all the form elemnts
var form = $("form"),
      name = form.find("#name"),
      email = form.find("#email"),
      password = form.find("#password"),
      confirm_password = form.find("#confirm-password");

// Getting all error span elemnts
var name_error = form.find("#name-error"),
      email_error = form.find("#email-error"),
      password_error = form.find("#pass-error"),
      confirm_pass_error = form.find("#confirm-password-error");

// Getting all display elements
var display_name = $(".display-name"),
      display_email = $(".display-email"),
      display_container = $(".display-results"),
      message, name_input, email_input;

  // Checking if all fields has been filled in.
  form.on("submit", checking);

  // Check if each field has filled in. If not throw a error message
  name.on("blur", verify);
  email.on("blur", verify);
  password.on("blur", verify);
  confirm_password.on("blur", verify);

  // Checks if either fields are empty and stops it from submiting.
  function checking() {
      if ( name.val() === "" || email.val() === "" ||  password.val() === ""  || confirm_password.val() === "" ) {
                message = "Please fill in the fields";
                confirm_pass_error.html(message);
                name.focus();
                return false;
      } else if ( password.val() != confirm_password.val() ) {
                      message = "Password do not match";
                      confirm_pass_error.html(message);
                      return false;
      } else {
            //return true;
            displayData();
      }

  } /* END of Checking function */

  // This function is called on blur or on change.
  function verify() {
      if ( name.val() != "" ) {
            message = "";
            name_error.html(message);
      } else {
          message = "Please enter your name";
          name_error.html(message);
      }

      if ( email.val() != "" ) {
            message = "";
            email_error.html(message);
      }  else {
              message = "Please enter your email";
              email_error.html(message);
      }

      if ( password.val() != "" ) {
            message = "";
            password_error.html(message);
      } else {
            message = "Please enter password";
            password_error.html(message);
      }

      if ( confirm_password.val() != "" ) {
            message = "";
            confirm_pass_error.html(message);
      } else {
            message = "Please enter this section";
            confirm_pass_error.html(message);
      }

  } /* END of Verify function */

  function displayData() {
          if ( password.val() != "" && confirm_password.val() != "" ) {
                name_input = name.val();
                email_input = email.val();
                display_container.css("display", "block");
                display_name.html(name_input);
                display_email.html("Your email: " + "<strong>" + email_input + "</strong>");
                return true;
          }
  } /* END of DisplayData function */

}

validate();
