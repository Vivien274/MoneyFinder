function initialize() {
  var myLatlng = new google.maps.LatLng(49.443231999999995,1.099971);
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
	disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image = './img/pin.png';
  
  var contentString = 
	'<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Guillaume</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Hello</b>, bienvenue <b>Guillaume Courtonne</b>,</p>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)',
	  icon : image
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);