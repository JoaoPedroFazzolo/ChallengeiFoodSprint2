// Cria o mapa e define o centro e o nível de zoom
var map = L.map('map').setView([-23.55052, -46.633308], 13);

// Adiciona a camada do mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Dados de exemplo (pode ser carregado de um arquivo ou API)
var heatData = [

    [-23.55052, -46.633308, 0.8],  // São Paulo

    [-23.55982, -46.639308, 0.7],  // Região próxima

    [-23.54932, -46.629308, 0.6],  // Região próxima

    [-23.54332, -46.633108, 0.5],  // Outra área

    [-23.55352, -46.637308, 0.9]   // Outra área

];

// Cria o mapa de calor com opções personalizadas
var heat = L.heatLayer(heatData, {
    radius: 20,
    blur: 15,
    maxZoom: 18,
    gradient: {
        0.2: 'blue',
        0.4: 'green',
        0.6: 'yellow',
        0.8: 'orange',
        1.0: 'red'
    }
}).addTo(map);