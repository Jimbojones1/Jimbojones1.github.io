var app = app || {};

$.ajax({
  url: 'http://url.endpoint.com/file.json',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    app.accessBikeData = function() {
      return data
    }
  })


});

app.accessBikeData
for (i=0; i < data.length; i+=25) {

  $('.divyList ul').append('<li> This divy is located at the station ' + data[i].station_name + ' with its longitude at ' + data[i].longitude + ' and its latitude at ' + data[i].latitude + '</li>')
}//end of for loop
for (i=0; i < data.length; i+=25) {
  console.log(data[i].latitude + ', ' + data[i].longitude);
  app.getLatLan = new Object();
  app.getLatLan = {
    lat: data[i].latitude,
    lng: data[i].longitude
  };

    app.myLatLan.push(app.getLatLan);
//  console.log(app.getLatLan);
};
return app.myLatLan;
}, error: function() {
console.log("It didn't work big dumb idiot")
}
console.log(app.myLatLan);
