var map; 
var marker;
var busStops = [    
    { lat: 33.63140970533756, lng: -117.91239884218938 }, 
    { lat: 33.637233836990156, lng: -117.92143268913567 },
    { lat: 33.64417546266777, lng: -117.91584330109559 },
    { lat: 33.647419993862464, lng: -117.91250522036816 },
    { lat: 33.64956792636506, lng: -117.91030389148503 },
    { lat: 33.653709823899334, lng:  -117.90801224872217},
    { lat: 33.65817506096696, lng: -117.9039352910765 },
    { lat: 33.66262590531168, lng: -117.89752430120514 }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 33.630087608352135, lng: -117.91053202472935 },
    zoom: 14
  });

  marker = new google.maps.Marker({
    map: map,
    position: { lat: 33.630087608352135, lng: -117.91053202472935 },
    title: 'Bus'
  });
}


var counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setPosition(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

/*
function restart() {
    let counter = 0; 
    marker.setPosition({ lat: 33.630087608352135, lng: -117.91053202472935 });
    move(); 
} */

