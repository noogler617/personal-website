
    function initMap(){
    var location = {lat:42.360082, lng:-71.058880};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 14,
      center: location,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

  };
