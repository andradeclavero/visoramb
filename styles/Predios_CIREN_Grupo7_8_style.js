var size = 0;
var placement = 'point';

var style_Predios_CIREN_Grupo7_8 = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("ROL") || feature.get("rol");
    var labelFont = "9px 'Inter', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (value !== null && value !== undefined && typeof map !== 'undefined' && map.getView().getZoom() >= 12) {
        labelText = String(value);
    }
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988 }), fill: new ol.style.Fill({ color: 'rgba(190,178,151,0.4)' }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
            labelFill, placement, bufferColor,
            bufferWidth)
    })];

    return style;
};
