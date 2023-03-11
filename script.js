

//token
mapboxgl.accessToken = 'pk.eyJ1IjoiZG9ubWFyaXVzIiwiYSI6ImNsZjNwM21ybjB1cG8zc2xqZG9razR3MGQifQ.8HfLMdxuoJ-2ca1PWFOa2A';
const map = new mapboxgl.Map({
container: 'map',
zoom: 14,
//cordinate 
center: [14.9914642, 37.7512257],
pitch: 80,
bearing: 41,
// stile della mappa 
style: 'mapbox://styles/mapbox/satellite-streets-v12',

});
 
map.on('style.load', () => {
map.addSource('mapbox-dem', {
'type': 'raster-dem',
'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
'tileSize': 512,
'maxzoom': 14
});
// rilievo delle montagne 
map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
});


