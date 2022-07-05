$(document).ready(function(){
  $('#holder').load("signin.html")
  });

function forgotPwdTggler () {
  $('#holder').html('');
  $("#holder").load("forgot.html")
};

function getAppleSignIn(){
  $('#holder').html('');
  $("#holder").load("apple_login.html")
}

function showPassword(){
    console.log($('#pwd').get(0).type);
    $('#pwd').get(0).type == "password" ? $('#pwd').attr('type', 'text'): $('#pwd').attr('type', 'password');
}
 

function getSignIn(){
  $('#holder').html('');
  $("#holder").load("signin.html")
};
  