$(document).ready(function() {

  console.log("All resources are loaded");


  $('.loading').hide();
  $('.success').hide();
  $('.error').hide();

  $('#form_send').on('click', function () {
    var formdata = app.createFormObject();
    console.log(formdata);
    console.log('Clicked form submit...');
    app.sendEmail(formdata);

  });

  $('.pictures').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
  $(window).load(function(){
  $('img.bgfade').hide();
  var dg_H = $(window).height();
  var dg_W = $(window).width();
  $('#wrap').css({'height':dg_H,'width':dg_W});
  function anim() {
      $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(1500);
      $("#wrap img").first().fadeIn(1500);
      setTimeout(anim, 3000);
  }
  anim();})
  $(window).resize(function(){window.location.href=window.location.href})

  // do my image switching logic here.
  initialize();
});//end of document.ready

//Get weather api
var getWeather = {
  type: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=chicago',
  data: 'json',
  success: function(data){
    console.log("I did it bitches!");
    console.dir(data);
    $('.weather').append('<li class="skies">' + 'The current temparture is '+ Math.round(data.main.temp * 9/5 - 459.67)+ ' degrees with ' + data.weather[0].description + '.' +'</li>');

  },error:  function () {
    console.log("I didn't work you big dumb idiot");
  }


}//end of get weather object

$.ajax(getWeather);
//end of document.ready
//contact form
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
//send contact form
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
  //google map function

};
//function google maps

//initialize new google map object


function initialize() {
  //the map object constructor takes two arguments
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  //an event listener to wait for the map div to load
  google.maps.event.addDomListener(window, 'load', initialize);
