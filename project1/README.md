# Jimbojones1.github.io
L'Patron Restaurant Website, Chicago Il

This is my first draft of my L'Patron Restaurant website.  This was created because the restaurant did not have a website.  This website was designed to allow people to look at the menu, get directions, and to be able to fill out a customer response form. 

This was created as my first WDI project at General Assembly and was created in four days.  

My project includes three pages: A main menu with links, a map, a weather api, and a picture carousel, a menu page with links, and a menu, and a contact page with a contact form allowing customers to provide feedback to the restaurant.  I would also add a drop down function on the menu, to allow descriptions and possible pictures of the food.


My project is also responsive to phone and laptop windows.  In the future I will add a functioning online ordering function and make the website more responsive in including multiple breakpoints. 


I used a google map api with the marker centered on L'Patron 

function initialize() {
  //the map object constructor takes two arguments
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
      center: new google.maps.LatLng(41.931929, -87.698327),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var i=new google.maps.Marker({
       position:new google.maps.LatLng(41.931929, -87.698327),
       map:map,
      animation: google.maps.Animation.DROP// <------------------ needs to be a google.maps.Map object
       })
  }
  //an event listener to wait for the map div to load

  google.maps.event.addDomListener(window, 'load', initialize);
  
  

The technology used in this project was html5, css3, javascript, jquery plugin, google maps api, sass, and ajax call to a weather api.  
