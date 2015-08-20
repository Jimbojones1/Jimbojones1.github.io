var app = app || {};
app.myLatLan = [];
app.postX = 41.8369;
app.postY = -87.6847
$(document).ready(function() {


  GMaps.geolocate({
    success: function(position) {
      map.setCenter(position.coords.latitude, position.coords.longitude);
      app.postX = position.coords.latitude;
      app.postY = position.coords.longitude;
      console.log(app.postX);
    },
    error: function(error) {
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function() {
      alert("Your browser does not support geolocation");
    },
    always: function() {
      alert("Done!");
    }
  });
console.log("All resources are loaded");

  app.getDivy = {
      type: 'get',
      url: 'https://data.cityofchicago.org/resource/bk89-9dk7.json',
      dataType: 'json',
      success: function(data){

      for (i=0; i < data.length; i++) {
        app.getLatLan = new Object();
        app.getLatLan = {
          lat: parseFloat(data[i].latitude),
          lng: parseFloat(data[i].longitude)
        };
          app.myLatLan.push(app.getLatLan);

        //  console.log(app.getLatLan);
        };
        app.divyMap();
        }, error: function() {
        console.log("It didn't work big dumb idiot")
        }
  };



$.ajax(app.getDivy);


});//end of doc ready





//var myDivyData = app.divyData(app.myLatLan);

app.divyMap = function initialize() {
  var latln = {lat: postX, lng: postY};
  var mapCanvas = new google.maps.Map(document.getElementById('map-canvas'),
  {
    zoom: 15,
    center: latln
  });
  for (var i=0; i < app.myLatLan.length; i++){
    var locations = app.myLatLan[i];
    app.marker = new google.maps.Marker({
      position: locations,
      map: mapCanvas,
      title: 'touch to zoom'
    })
  }
};
