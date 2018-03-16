 window.onscroll = function() {
    myFunction();
    // scrollFunction();
  };

  function myFunction() {
    var url = window.location.pathname;
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
      document.getElementById( "home" ).className = "fixed-header";
      if(url == "/index.html" || url == "/"){
        document.getElementById("logo_img").src="images/pronto_logo_website.png";
      }
    } else {
      document.getElementById( "home" ).className = "header";
      if(url == "/index.html" || url == "/"){
       document.getElementById("logo_img").src="images/white_logo.png";
      }
    }
  }

  function openNav() {
  console.log('openNav');
    document.getElementById("mySidenav").style.width = "700px";
}

function closeNav() {
  console.log('closeNav');  
    document.getElementById("mySidenav").style.width = "0px";
}

jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        //mapTypeId: 'hybrid'
     // mapTypeId: 'satellite'
        mapTypeId: 'roadmap'
      // mapTypeId: 'terrain'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['India', 28.621998, 77.087839],
        ['Aus ', -37.892808, 145.072267],
        ['Ame ', 42.622507, -83.120394],
      
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>India</h3>' +
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' + '</div>'],
       ['<div class="info_content">' +
        '<h3>Dubai, UAE </h3>' +
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' + '</div>'],
      ['<div class="info_content">' +
        '<h3>Ajman, UAE</h3>' +
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>' + '</div>'],
      
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(7);
        google.maps.event.removeListener(boundsListener);
    });
    
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
    $(".zoom-me video").css({
        width: (100 + scroll/14)  + "%",
        top: -(scroll/10)  + "%",
        "-webkit-filter": "blur(" + (scroll/200) + "px)",
        filter: "blur(" + (scroll/200) + "px)"
    });
});