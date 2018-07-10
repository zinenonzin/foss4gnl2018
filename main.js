//mapboxgl.accessToken = 'pk.eyJ1IjoibGR2IiwiYSI6IjM2MTMwZjBkYzhiZDIyODA3OTdiYzZiNGY4MDdjNmQ1In0.Bv2Y8-N6Vw7w7TiHJEP0xw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'style.json',
    hash: true,
    zoom: 11,
    pitch: 60,
    bearing: 62.4,
    center: [ 4.8, 52.4]
});

