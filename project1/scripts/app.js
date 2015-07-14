$(document).ready(function() {

  console.log("All resources are loaded");

  $('.loading').hide();
  $('.success').hide();
  $('.error').hide();

  $('# form_send').on('click', function () {
    var formdata = app.createFormObject();
    console.log(formdata);
    console.log('Clicked form submit...');
    app.sendEmail(formdata);

  });

});

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  retJson.request = $('#user_request').val();
  retJson.foodRating = $('#food_rating').val();
  retJson.serviceRating = $('#service_rating').val();
  retJson.experience = $('#user_experience').val();
  //testing ... comment out when done
  console.log(retJson);


  return retJson;
}

app.sendEmail = function (emailData) {

  $('.loading').slideDown();  //.show
  //hide old messages... because this a New request
  $('.success').hide();
  $('.error').hide();
//creat ajax argument
  var ajaxData = {

    url:  'http://imperialholonet.herokuapp.com/api/mail',
    type:  'POST',
    data:  emailData,
    success:  function(data) {
      console.log(data);
      $('.loading').slideUp();  // .hide()
      $('.success').show();  // .slideDown
    },
    error: function(err) {
      console.log(err);
      $('.loading').slideUp();  //hide
      $('.error').show();
    }

  };
  $.ajax(ajaxData);


}
