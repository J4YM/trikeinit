let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 14.851057483208162, lng: 120.82824647022561 },
    zoom: 15,
  });
}

initMap();