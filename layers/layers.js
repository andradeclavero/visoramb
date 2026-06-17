ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8056135.444617, -4451723.954260, -7911426.339546, -3973178.965860]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1 = new ol.format.GeoJSON();
var features_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1 = format_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.readFeatures(json_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.addFeatures(features_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1);
var lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1, 
                style: style_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1,
                popuplayertitle: 'AREA ESTUDIO — Nueva S/E Guangualí y nueva línea 2x66 kV Guangualí – Río Viejo',
                interactive: true,
                title: 'AREA ESTUDIO — Nueva S/E Guangualí y nueva línea 2x66 kV Guangualí – Río Viejo'
            });
var format_AREAESTUDIONuevaSERoViejo_2 = new ol.format.GeoJSON();
var features_AREAESTUDIONuevaSERoViejo_2 = format_AREAESTUDIONuevaSERoViejo_2.readFeatures(json_AREAESTUDIONuevaSERoViejo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONuevaSERoViejo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONuevaSERoViejo_2.addFeatures(features_AREAESTUDIONuevaSERoViejo_2);
var lyr_AREAESTUDIONuevaSERoViejo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONuevaSERoViejo_2, 
                style: style_AREAESTUDIONuevaSERoViejo_2,
                popuplayertitle: 'AREA ESTUDIO — Nueva S/E Río Viejo',
                interactive: true,
                title: 'AREA ESTUDIO — Nueva S/E Río Viejo'
            });
var format_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3 = new ol.format.GeoJSON();
var features_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3 = format_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.readFeatures(json_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.addFeatures(features_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3);
var lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3, 
                style: style_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3,
                popuplayertitle: 'AREA ESTUDIO — Nueva S/E Guangualí y nueva línea 2x66 kV Guangualí – Río Viejo',
                interactive: true,
                title: 'AREA ESTUDIO — Nueva S/E Guangualí y nueva línea 2x66 kV Guangualí – Río Viejo'
            });
var format_AREAESTUDIONuevaSERoViejo_4 = new ol.format.GeoJSON();
var features_AREAESTUDIONuevaSERoViejo_4 = format_AREAESTUDIONuevaSERoViejo_4.readFeatures(json_AREAESTUDIONuevaSERoViejo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONuevaSERoViejo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONuevaSERoViejo_4.addFeatures(features_AREAESTUDIONuevaSERoViejo_4);
var lyr_AREAESTUDIONuevaSERoViejo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONuevaSERoViejo_4, 
                style: style_AREAESTUDIONuevaSERoViejo_4,
                popuplayertitle: 'AREA ESTUDIO — Nueva S/E Río Viejo',
                interactive: true,
                title: 'AREA ESTUDIO — Nueva S/E Río Viejo'
            });
var format_AREAESTUDIONvaSELongovilo_5 = new ol.format.GeoJSON();
var features_AREAESTUDIONvaSELongovilo_5 = format_AREAESTUDIONvaSELongovilo_5.readFeatures(json_AREAESTUDIONvaSELongovilo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONvaSELongovilo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONvaSELongovilo_5.addFeatures(features_AREAESTUDIONvaSELongovilo_5);
var lyr_AREAESTUDIONvaSELongovilo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONvaSELongovilo_5, 
                style: style_AREAESTUDIONvaSELongovilo_5,
                popuplayertitle: 'AREA ESTUDIO — Nva S/E Longovilo',
                interactive: true,
                title: 'AREA ESTUDIO — Nva S/E Longovilo'
            });
var format_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6 = new ol.format.GeoJSON();
var features_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6 = format_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.readFeatures(json_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.addFeatures(features_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6);
var lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6, 
                style: style_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6,
                popuplayertitle: 'AREA ESTUDIO — Nva S/E Navidad y nva línea 2x66 kV Navidad – Longovilo',
                interactive: true,
                title: 'AREA ESTUDIO — Nva S/E Navidad y nva línea 2x66 kV Navidad – Longovilo'
            });
var format_AREAESTUDIONvaSELongovilo_7 = new ol.format.GeoJSON();
var features_AREAESTUDIONvaSELongovilo_7 = format_AREAESTUDIONvaSELongovilo_7.readFeatures(json_AREAESTUDIONvaSELongovilo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONvaSELongovilo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONvaSELongovilo_7.addFeatures(features_AREAESTUDIONvaSELongovilo_7);
var lyr_AREAESTUDIONvaSELongovilo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONvaSELongovilo_7, 
                style: style_AREAESTUDIONvaSELongovilo_7,
                popuplayertitle: 'AREA ESTUDIO — Nva S/E Longovilo',
                interactive: true,
                title: 'AREA ESTUDIO — Nva S/E Longovilo'
            });
var format_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8 = new ol.format.GeoJSON();
var features_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8 = format_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.readFeatures(json_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.addFeatures(features_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8);
var lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8, 
                style: style_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8,
                popuplayertitle: 'AREA ESTUDIO — Nva S/E Navidad y nva línea 2x66 kV Navidad – Longovilo',
                interactive: true,
                title: 'AREA ESTUDIO — Nva S/E Navidad y nva línea 2x66 kV Navidad – Longovilo'
            });
var format_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9 = new ol.format.GeoJSON();
var features_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9 = format_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.readFeatures(json_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.addFeatures(features_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9);
var lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9, 
                style: style_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9,
                popuplayertitle: 'AREA ESTUDIO — Nva S/E Tiquel y Nva línea 2x500KV Tiquel  - Tiuquilemu',
                interactive: true,
                title: 'AREA ESTUDIO — Nva S/E Tiquel y Nva línea 2x500KV Tiquel  - Tiuquilemu'
            });
var format_AREAESTUDIONvaSETiuquilemu_10 = new ol.format.GeoJSON();
var features_AREAESTUDIONvaSETiuquilemu_10 = format_AREAESTUDIONvaSETiuquilemu_10.readFeatures(json_AREAESTUDIONvaSETiuquilemu_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONvaSETiuquilemu_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONvaSETiuquilemu_10.addFeatures(features_AREAESTUDIONvaSETiuquilemu_10);
var lyr_AREAESTUDIONvaSETiuquilemu_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONvaSETiuquilemu_10, 
                style: style_AREAESTUDIONvaSETiuquilemu_10,
                popuplayertitle: 'AREA ESTUDIO — Nva S/E Tiuquilemu',
                interactive: true,
                title: 'AREA ESTUDIO — Nva S/E Tiuquilemu'
            });
var format_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11 = new ol.format.GeoJSON();
var features_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11 = format_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.readFeatures(json_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.addFeatures(features_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11);
var lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11, 
                style: style_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11,
                popuplayertitle: 'AREA ESTUDIO — Nva S/E Tiquel y Nva línea 2x500KV Tiquel  - Tiuquilemu',
                interactive: true,
                title: 'AREA ESTUDIO — Nva S/E Tiquel y Nva línea 2x500KV Tiquel  - Tiuquilemu'
            });
var format_AREAESTUDIONvaSETiuquilemu_12 = new ol.format.GeoJSON();
var features_AREAESTUDIONvaSETiuquilemu_12 = format_AREAESTUDIONvaSETiuquilemu_12.readFeatures(json_AREAESTUDIONvaSETiuquilemu_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIONvaSETiuquilemu_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIONvaSETiuquilemu_12.addFeatures(features_AREAESTUDIONvaSETiuquilemu_12);
var lyr_AREAESTUDIONvaSETiuquilemu_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIONvaSETiuquilemu_12, 
                style: style_AREAESTUDIONvaSETiuquilemu_12,
                popuplayertitle: 'AREA ESTUDIO — Nva S/E Tiuquilemu',
                interactive: true,
                title: 'AREA ESTUDIO — Nva S/E Tiuquilemu'
            });
var format_AREAESTUDIOAnlisisprefactibilidad_13 = new ol.format.GeoJSON();
var features_AREAESTUDIOAnlisisprefactibilidad_13 = format_AREAESTUDIOAnlisisprefactibilidad_13.readFeatures(json_AREAESTUDIOAnlisisprefactibilidad_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIOAnlisisprefactibilidad_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIOAnlisisprefactibilidad_13.addFeatures(features_AREAESTUDIOAnlisisprefactibilidad_13);
var lyr_AREAESTUDIOAnlisisprefactibilidad_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIOAnlisisprefactibilidad_13, 
                style: style_AREAESTUDIOAnlisisprefactibilidad_13,
                popuplayertitle: 'AREA ESTUDIO — Análisis prefactibilidad',
                interactive: true,
                title: 'AREA ESTUDIO — Análisis prefactibilidad'
            });
var format_AREAESTUDIOAnlisisprefactibilidad_14 = new ol.format.GeoJSON();
var features_AREAESTUDIOAnlisisprefactibilidad_14 = format_AREAESTUDIOAnlisisprefactibilidad_14.readFeatures(json_AREAESTUDIOAnlisisprefactibilidad_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAESTUDIOAnlisisprefactibilidad_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAESTUDIOAnlisisprefactibilidad_14.addFeatures(features_AREAESTUDIOAnlisisprefactibilidad_14);
var lyr_AREAESTUDIOAnlisisprefactibilidad_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAESTUDIOAnlisisprefactibilidad_14, 
                style: style_AREAESTUDIOAnlisisprefactibilidad_14,
                popuplayertitle: 'AREA ESTUDIO — Análisis prefactibilidad',
                interactive: true,
                title: 'AREA ESTUDIO — Análisis prefactibilidad'
            });
var format_Poligonos_Analisis_Grupo1_3_31 = new ol.format.GeoJSON();
var features_Poligonos_Analisis_Grupo1_3_31 = format_Poligonos_Analisis_Grupo1_3_31.readFeatures(json_Poligonos_Analisis_Grupo1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligonos_Analisis_Grupo1_3_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligonos_Analisis_Grupo1_3_31.addFeatures(features_Poligonos_Analisis_Grupo1_3_31);
var lyr_Poligonos_Analisis_Grupo1_3_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligonos_Analisis_Grupo1_3_31, 
                style: style_Poligonos_Analisis_Grupo1_3,
                popuplayertitle: 'Polígonos Análisis Grupo 1',
                interactive: true,
                title: 'Polígonos Análisis Grupo 1'
            });
var format_Poligonos_Analisis_Grupo5_6_32 = new ol.format.GeoJSON();
var features_Poligonos_Analisis_Grupo5_6_32 = format_Poligonos_Analisis_Grupo5_6_32.readFeatures(json_Poligonos_Analisis_Grupo5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligonos_Analisis_Grupo5_6_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligonos_Analisis_Grupo5_6_32.addFeatures(features_Poligonos_Analisis_Grupo5_6_32);
var lyr_Poligonos_Analisis_Grupo5_6_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligonos_Analisis_Grupo5_6_32, 
                style: style_Poligonos_Analisis_Grupo5_6,
                popuplayertitle: 'Polígonos Análisis Grupo 5',
                interactive: true,
                title: 'Polígonos Análisis Grupo 5'
            });
var format_Poligonos_Analisis_Grupo7_9_33 = new ol.format.GeoJSON();
var features_Poligonos_Analisis_Grupo7_9_33 = format_Poligonos_Analisis_Grupo7_9_33.readFeatures(json_Poligonos_Analisis_Grupo7_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligonos_Analisis_Grupo7_9_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligonos_Analisis_Grupo7_9_33.addFeatures(features_Poligonos_Analisis_Grupo7_9_33);
var lyr_Poligonos_Analisis_Grupo7_9_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligonos_Analisis_Grupo7_9_33, 
                style: style_Poligonos_Analisis_Grupo7_9,
                popuplayertitle: 'Polígonos Análisis Grupo 7',
                interactive: true,
                title: 'Polígonos Análisis Grupo 7'
            });
var format_Predios_CIREN_Grupo1_2_34 = new ol.format.GeoJSON();
var features_Predios_CIREN_Grupo1_2_34 = format_Predios_CIREN_Grupo1_2_34.readFeatures(json_Predios_CIREN_Grupo1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_CIREN_Grupo1_2_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_CIREN_Grupo1_2_34.addFeatures(features_Predios_CIREN_Grupo1_2_34);
var lyr_Predios_CIREN_Grupo1_2_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_CIREN_Grupo1_2_34, 
                style: style_Predios_CIREN_Grupo1_2,
                popuplayertitle: 'Predios CIREN Grupo 1',
                interactive: true,
                title: 'Predios CIREN Grupo 1'
            });
var format_Predios_CIREN_Grupo7_8_35 = new ol.format.GeoJSON();
var features_Predios_CIREN_Grupo7_8_35 = format_Predios_CIREN_Grupo7_8_35.readFeatures(json_Predios_CIREN_Grupo7_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_CIREN_Grupo7_8_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_CIREN_Grupo7_8_35.addFeatures(features_Predios_CIREN_Grupo7_8_35);
var lyr_Predios_CIREN_Grupo7_8_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_CIREN_Grupo7_8_35, 
                style: style_Predios_CIREN_Grupo7_8,
                popuplayertitle: 'Predios CIREN Grupo 7',
                interactive: true,
                title: 'Predios CIREN Grupo 7'
            });
var format_Suelos_CIREN_Grupo1_1_36 = new ol.format.GeoJSON();
var features_Suelos_CIREN_Grupo1_1_36 = format_Suelos_CIREN_Grupo1_1_36.readFeatures(json_Suelos_CIREN_Grupo1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suelos_CIREN_Grupo1_1_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suelos_CIREN_Grupo1_1_36.addFeatures(features_Suelos_CIREN_Grupo1_1_36);
var lyr_Suelos_CIREN_Grupo1_1_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suelos_CIREN_Grupo1_1_36, 
                style: style_Suelos_CIREN_Grupo1_1,
                popuplayertitle: 'Suelos CIREN Grupo 1',
                interactive: true,
                title: 'Suelos CIREN Grupo 1'
            });
var format_Suelos_CIREN_Grupo5_4_37 = new ol.format.GeoJSON();
var features_Suelos_CIREN_Grupo5_4_37 = format_Suelos_CIREN_Grupo5_4_37.readFeatures(json_Suelos_CIREN_Grupo5_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suelos_CIREN_Grupo5_4_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suelos_CIREN_Grupo5_4_37.addFeatures(features_Suelos_CIREN_Grupo5_4_37);
var lyr_Suelos_CIREN_Grupo5_4_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suelos_CIREN_Grupo5_4_37, 
                style: style_Suelos_CIREN_Grupo5_4,
                popuplayertitle: 'Suelos CIREN Grupo 5',
                interactive: true,
                title: 'Suelos CIREN Grupo 5'
            });
var format_Suelos_CIREN_Grupo7_7_38 = new ol.format.GeoJSON();
var features_Suelos_CIREN_Grupo7_7_38 = format_Suelos_CIREN_Grupo7_7_38.readFeatures(json_Suelos_CIREN_Grupo7_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suelos_CIREN_Grupo7_7_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suelos_CIREN_Grupo7_7_38.addFeatures(features_Suelos_CIREN_Grupo7_7_38);
var lyr_Suelos_CIREN_Grupo7_7_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suelos_CIREN_Grupo7_7_38, 
                style: style_Suelos_CIREN_Grupo7_7,
                popuplayertitle: 'Suelos CIREN Grupo 7',
                interactive: true,
                title: 'Suelos CIREN Grupo 7'
            });
var format_propiedades_R05_R06_R13_29943_5_39 = new ol.format.GeoJSON();
var features_propiedades_R05_R06_R13_29943_5_39 = format_propiedades_R05_R06_R13_29943_5_39.readFeatures(json_propiedades_R05_R06_R13_29943_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_propiedades_R05_R06_R13_29943_5_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_propiedades_R05_R06_R13_29943_5_39.addFeatures(features_propiedades_R05_R06_R13_29943_5_39);
var lyr_propiedades_R05_R06_R13_29943_5_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_propiedades_R05_R06_R13_29943_5_39, 
                style: style_propiedades_R05_R06_R13_29943_5,
                popuplayertitle: 'Propiedades SII (R05, R06, R13)',
                interactive: true,
                title: 'Propiedades SII (R05, R06, R13)'
            });
var format_TtulosdeMerced_15 = new ol.format.GeoJSON();
var features_TtulosdeMerced_15 = format_TtulosdeMerced_15.readFeatures(json_TtulosdeMerced_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TtulosdeMerced_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TtulosdeMerced_15.addFeatures(features_TtulosdeMerced_15);
var lyr_TtulosdeMerced_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TtulosdeMerced_15, 
                style: style_TtulosdeMerced_15,
                popuplayertitle: 'Títulos de Merced',
                interactive: true,
                title: '<span style="display:inline-block;width:14px;height:14px;background:rgba(210,105,30,0.4);border:2px solid rgba(210,105,30,1.0);vertical-align:middle;margin-right:4px;box-sizing:border-box;"></span> Títulos de Merced'
            });
var format_reasdeDesarrolloIndgenaADI_16 = new ol.format.GeoJSON();
var features_reasdeDesarrolloIndgenaADI_16 = format_reasdeDesarrolloIndgenaADI_16.readFeatures(json_reasdeDesarrolloIndgenaADI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdeDesarrolloIndgenaADI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdeDesarrolloIndgenaADI_16.addFeatures(features_reasdeDesarrolloIndgenaADI_16);
var lyr_reasdeDesarrolloIndgenaADI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasdeDesarrolloIndgenaADI_16, 
                style: style_reasdeDesarrolloIndgenaADI_16,
                popuplayertitle: 'Áreas de Desarrollo Indígena (ADI)',
                interactive: true,
                title: '<span style="display:inline-block;width:14px;height:14px;background:rgba(128,0,128,0.3);border:2px dashed rgba(128,0,128,1.0);vertical-align:middle;margin-right:4px;box-sizing:border-box;"></span> Áreas de Desarrollo Indígena (ADI)'
            });
var format_Comprasdetierras_17 = new ol.format.GeoJSON();
var features_Comprasdetierras_17 = format_Comprasdetierras_17.readFeatures(json_Comprasdetierras_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comprasdetierras_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comprasdetierras_17.addFeatures(features_Comprasdetierras_17);
var lyr_Comprasdetierras_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comprasdetierras_17, 
                style: style_Comprasdetierras_17,
                popuplayertitle: 'Compras de tierras',
                interactive: true,
                title: '<span style="display:inline-block;width:14px;height:14px;background:rgba(0,128,0,0.4);border:2px solid rgba(0,128,0,1.0);vertical-align:middle;margin-right:4px;box-sizing:border-box;"></span> Compras de tierras'
            });
var format_ComunidadesIndgenas_18 = new ol.format.GeoJSON();
var features_ComunidadesIndgenas_18 = format_ComunidadesIndgenas_18.readFeatures(json_ComunidadesIndgenas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesIndgenas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesIndgenas_18.addFeatures(features_ComunidadesIndgenas_18);
var lyr_ComunidadesIndgenas_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesIndgenas_18, 
                style: style_ComunidadesIndgenas_18,
                popuplayertitle: 'Comunidades Indígenas',
                interactive: true,
                title: '<span style="display:inline-block;width:14px;height:14px;background:rgba(220,20,60,1.0);border:2px solid rgba(200,200,200,1.0);border-radius:50%;vertical-align:middle;margin-right:4px;box-sizing:border-box;"></span> Comunidades Indígenas'
            });
var format_MonumentosArqueolgicos_19 = new ol.format.GeoJSON();
var features_MonumentosArqueolgicos_19 = format_MonumentosArqueolgicos_19.readFeatures(json_MonumentosArqueolgicos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonumentosArqueolgicos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonumentosArqueolgicos_19.addFeatures(features_MonumentosArqueolgicos_19);
var lyr_MonumentosArqueolgicos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonumentosArqueolgicos_19, 
                style: style_MonumentosArqueolgicos_19,
                popuplayertitle: 'Monumentos Arqueológicos',
                interactive: true,
                title: '<img src="styles/legend/MonumentosArqueolgicos_19.png" /> Monumentos Arqueológicos'
            });
var format_MonumentosNacionales_20 = new ol.format.GeoJSON();
var features_MonumentosNacionales_20 = format_MonumentosNacionales_20.readFeatures(json_MonumentosNacionales_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonumentosNacionales_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonumentosNacionales_20.addFeatures(features_MonumentosNacionales_20);
var lyr_MonumentosNacionales_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonumentosNacionales_20, 
                style: style_MonumentosNacionales_20,
                popuplayertitle: 'Monumentos Nacionales',
                interactive: true,
                title: '<img src="styles/legend/MonumentosNacionales_20.png" /> Monumentos Nacionales'
            });
var format_SNAP_21 = new ol.format.GeoJSON();
var features_SNAP_21 = format_SNAP_21.readFeatures(json_SNAP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SNAP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNAP_21.addFeatures(features_SNAP_21);
var lyr_SNAP_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SNAP_21, 
                style: style_SNAP_21,
                popuplayertitle: 'SNAP',
                interactive: true,
                title: '<img src="styles/legend/SNAP_21.png" /> SNAP'
            });
var format_ReservasdelaBiosfera_22 = new ol.format.GeoJSON();
var features_ReservasdelaBiosfera_22 = format_ReservasdelaBiosfera_22.readFeatures(json_ReservasdelaBiosfera_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservasdelaBiosfera_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservasdelaBiosfera_22.addFeatures(features_ReservasdelaBiosfera_22);
var lyr_ReservasdelaBiosfera_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservasdelaBiosfera_22, 
                style: style_ReservasdelaBiosfera_22,
                popuplayertitle: 'Reservas de la Biosfera',
                interactive: true,
                title: '<img src="styles/legend/ReservasdelaBiosfera_22.png" /> Reservas de la Biosfera'
            });
var format_PlanesRECOGEMMA_23 = new ol.format.GeoJSON();
var features_PlanesRECOGEMMA_23 = format_PlanesRECOGEMMA_23.readFeatures(json_PlanesRECOGEMMA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanesRECOGEMMA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanesRECOGEMMA_23.addFeatures(features_PlanesRECOGEMMA_23);
var lyr_PlanesRECOGEMMA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanesRECOGEMMA_23, 
                style: style_PlanesRECOGEMMA_23,
                popuplayertitle: 'Planes RECOGE MMA',
                interactive: true,
                title: '<img src="styles/legend/PlanesRECOGEMMA_23.png" /> Planes RECOGE MMA'
            });
var format_SitiosPrioritariosdeConservacin_24 = new ol.format.GeoJSON();
var features_SitiosPrioritariosdeConservacin_24 = format_SitiosPrioritariosdeConservacin_24.readFeatures(json_SitiosPrioritariosdeConservacin_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosPrioritariosdeConservacin_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosPrioritariosdeConservacin_24.addFeatures(features_SitiosPrioritariosdeConservacin_24);
var lyr_SitiosPrioritariosdeConservacin_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiosPrioritariosdeConservacin_24, 
                style: style_SitiosPrioritariosdeConservacin_24,
                popuplayertitle: 'Sitios Prioritarios de Conservación',
                interactive: true,
                title: '<img src="styles/legend/SitiosPrioritariosdeConservacin_24.png" /> Sitios Prioritarios de Conservación'
            });
var format_reasMarinasProtegidas_25 = new ol.format.GeoJSON();
var features_reasMarinasProtegidas_25 = format_reasMarinasProtegidas_25.readFeatures(json_reasMarinasProtegidas_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasMarinasProtegidas_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasMarinasProtegidas_25.addFeatures(features_reasMarinasProtegidas_25);
var lyr_reasMarinasProtegidas_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasMarinasProtegidas_25, 
                style: style_reasMarinasProtegidas_25,
                popuplayertitle: 'Áreas Marinas Protegidas',
                interactive: true,
                title: '<img src="styles/legend/reasMarinasProtegidas_25.png" /> Áreas Marinas Protegidas'
            });
var format_SitiosRamsar_26 = new ol.format.GeoJSON();
var features_SitiosRamsar_26 = format_SitiosRamsar_26.readFeatures(json_SitiosRamsar_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosRamsar_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosRamsar_26.addFeatures(features_SitiosRamsar_26);
var lyr_SitiosRamsar_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiosRamsar_26, 
                style: style_SitiosRamsar_26,
                popuplayertitle: 'Sitios Ramsar',
                interactive: true,
                title: '<img src="styles/legend/SitiosRamsar_26.png" /> Sitios Ramsar'
            });
var format_InventarioNacionaldeHumedalesMMA_27 = new ol.format.GeoJSON();
var features_InventarioNacionaldeHumedalesMMA_27 = format_InventarioNacionaldeHumedalesMMA_27.readFeatures(json_InventarioNacionaldeHumedalesMMA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InventarioNacionaldeHumedalesMMA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InventarioNacionaldeHumedalesMMA_27.addFeatures(features_InventarioNacionaldeHumedalesMMA_27);
var lyr_InventarioNacionaldeHumedalesMMA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InventarioNacionaldeHumedalesMMA_27, 
                style: style_InventarioNacionaldeHumedalesMMA_27,
                popuplayertitle: 'Inventario Nacional de Humedales MMA',
                interactive: true,
                opacity: 0.6,
                title: '<img src="styles/legend/InventarioNacionaldeHumedalesMMA_27.png" /> Inventario Nacional de Humedales MMA'
            });
var format_InmueblesdeConservacinHistrica_28 = new ol.format.GeoJSON();
var features_InmueblesdeConservacinHistrica_28 = format_InmueblesdeConservacinHistrica_28.readFeatures(json_InmueblesdeConservacinHistrica_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InmueblesdeConservacinHistrica_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InmueblesdeConservacinHistrica_28.addFeatures(features_InmueblesdeConservacinHistrica_28);
var lyr_InmueblesdeConservacinHistrica_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InmueblesdeConservacinHistrica_28, 
                style: style_InmueblesdeConservacinHistrica_28,
                popuplayertitle: 'Inmuebles de Conservación Histórica',
                interactive: true,
                title: '<img src="styles/legend/InmueblesdeConservacinHistrica_28.png" /> Inmuebles de Conservación Histórica'
            });
var format_ZonasdeConservacinHistrica_29 = new ol.format.GeoJSON();
var features_ZonasdeConservacinHistrica_29 = format_ZonasdeConservacinHistrica_29.readFeatures(json_ZonasdeConservacinHistrica_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeConservacinHistrica_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeConservacinHistrica_29.addFeatures(features_ZonasdeConservacinHistrica_29);
var lyr_ZonasdeConservacinHistrica_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasdeConservacinHistrica_29, 
                style: style_ZonasdeConservacinHistrica_29,
                popuplayertitle: 'Zonas de Conservación Histórica',
                interactive: true,
                title: '<img src="styles/legend/ZonasdeConservacinHistrica_29.png" /> Zonas de Conservación Histórica'
            });
var format_ZonasdeIntersTursticoZOIT_30 = new ol.format.GeoJSON();
var features_ZonasdeIntersTursticoZOIT_30 = format_ZonasdeIntersTursticoZOIT_30.readFeatures(json_ZonasdeIntersTursticoZOIT_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeIntersTursticoZOIT_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeIntersTursticoZOIT_30.addFeatures(features_ZonasdeIntersTursticoZOIT_30);
var lyr_ZonasdeIntersTursticoZOIT_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasdeIntersTursticoZOIT_30, 
                style: style_ZonasdeIntersTursticoZOIT_30,
                popuplayertitle: 'Zonas de Interés Turístico - ZOIT',
                interactive: true,
                opacity: 0.6,
                title: '<img src="styles/legend/ZonasdeIntersTursticoZOIT_30.png" /> Zonas de Interés Turístico - ZOIT'
            });
var group_CIREN_SII = new ol.layer.Group({
                                layers: [lyr_propiedades_R05_R06_R13_29943_5_39,lyr_Suelos_CIREN_Grupo7_7_38,lyr_Suelos_CIREN_Grupo5_4_37,lyr_Suelos_CIREN_Grupo1_1_36,lyr_Predios_CIREN_Grupo7_8_35,lyr_Predios_CIREN_Grupo1_2_34,lyr_Poligonos_Analisis_Grupo7_9_33,lyr_Poligonos_Analisis_Grupo5_6_32,lyr_Poligonos_Analisis_Grupo1_3_31,],
                                fold: 'open',
                                title: 'CIREN y SII'});
var group_Planificacin = new ol.layer.Group({
                                layers: [lyr_InmueblesdeConservacinHistrica_28,lyr_ZonasdeConservacinHistrica_29,lyr_ZonasdeIntersTursticoZOIT_30,],
                                fold: 'open',
                                title: 'Planificación'});
var group_MedioNatural = new ol.layer.Group({
                                layers: [lyr_SNAP_21,lyr_ReservasdelaBiosfera_22,lyr_PlanesRECOGEMMA_23,lyr_SitiosPrioritariosdeConservacin_24,lyr_reasMarinasProtegidas_25,lyr_SitiosRamsar_26],
                                fold: 'open',
                                title: 'Medio Natural'});
var group_MedioCultural = new ol.layer.Group({
                                layers: [lyr_MonumentosArqueolgicos_19,lyr_MonumentosNacionales_20,],
                                fold: 'open',
                                title: 'Medio Cultural'});
var group_CONADI = new ol.layer.Group({
                                layers: [lyr_TtulosdeMerced_15,lyr_reasdeDesarrolloIndgenaADI_16,lyr_Comprasdetierras_17,lyr_ComunidadesIndgenas_18,],
                                fold: 'open',
                                title: 'CONADI'});
var group_Grupo1TiquelTiuquilemu = new ol.layer.Group({
                                layers: [lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9,lyr_AREAESTUDIONvaSETiuquilemu_10],
                                fold: 'open',
                                title: 'Grupo 1 - Tiquel / Tiuquilemu'});
var group_Grupo5LongoviloNavidad = new ol.layer.Group({
                                layers: [lyr_AREAESTUDIONvaSELongovilo_5,lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6,lyr_AREAESTUDIONvaSELongovilo_7],
                                fold: 'open',
                                title: 'Grupo 5 - Longovilo / Navidad'});
var group_Grupo7RioViejoGuanguali = new ol.layer.Group({
                                layers: [lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1,lyr_AREAESTUDIONuevaSERoViejo_2],
                                fold: 'open',
                                title: 'Grupo 7 - Rio Viejo / Guanguali'});

lyr_GoogleHybrid_0.setVisible(true);lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.setVisible(true);lyr_AREAESTUDIONuevaSERoViejo_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_Grupo7RioViejoGuanguali,group_Grupo5LongoviloNavidad,group_Grupo1TiquelTiuquilemu,group_CONADI,group_MedioCultural,group_MedioNatural,group_Planificacin,group_CIREN_SII];
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin'});
lyr_AREAESTUDIONuevaSERoViejo_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end'});
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin'});
lyr_AREAESTUDIONuevaSERoViejo_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end'});
lyr_AREAESTUDIONvaSELongovilo_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end'});
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin'});
lyr_AREAESTUDIONvaSELongovilo_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end'});
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin'});
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin'});
lyr_AREAESTUDIONvaSETiuquilemu_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end'});
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin'});
lyr_AREAESTUDIONvaSETiuquilemu_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end'});
lyr_AREAESTUDIOAnlisisprefactibilidad_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end'});
lyr_AREAESTUDIOAnlisisprefactibilidad_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end'});
lyr_Poligonos_Analisis_Grupo1_3_31.set('fieldAliases', {'AREA': 'AREA', 'NOMBRE': 'NOMBRE'});
lyr_Poligonos_Analisis_Grupo5_6_32.set('fieldAliases', {'AREA': 'AREA', 'NOMBRE': 'NOMBRE'});
lyr_Poligonos_Analisis_Grupo7_9_33.set('fieldAliases', {'AREA': 'AREA', 'NOMBRE': 'NOMBRE'});
lyr_Predios_CIREN_Grupo1_2_34.set('fieldAliases', {'ROL': 'ROL'});
lyr_Predios_CIREN_Grupo7_8_35.set('fieldAliases', {'ROL': 'ROL'});
lyr_Suelos_CIREN_Grupo1_1_36.set('fieldAliases', {'TEXTCAUS': 'TEXTCAUS'});
lyr_Suelos_CIREN_Grupo5_4_37.set('fieldAliases', {'TEXTCAUS': 'TEXTCAUS'});
lyr_Suelos_CIREN_Grupo7_7_38.set('fieldAliases', {'TEXTCAUS': 'TEXTCAUS'});
lyr_propiedades_R05_R06_R13_29943_5_39.set('fieldAliases', {'ROL': 'ROL'});
lyr_TtulosdeMerced_15.set('fieldAliases', {'fid': 'fid', 'comunidad': 'comunidad', 'letra': 'letra', 'titulo_mer': 'titulo_mer', 'p_remensur': 'p_remensur', 'cod_region': 'cod_region'});
lyr_reasdeDesarrolloIndgenaADI_16.set('fieldAliases', {'fid': 'fid', 'COD_COMUNA': 'COD_COMUNA', 'COD_PROVIN': 'COD_PROVIN', 'COD_REGION': 'COD_REGION', 'COMUNAS': 'COMUNAS', 'ETNIA': 'ETNIA'});
lyr_Comprasdetierras_17.set('fieldAliases', {'fid': 'fid', 'year': 'year', 'sector': 'sector', 'nombre': 'nombre', 'apellido_p': 'apellido_p', 'apellido_m': 'apellido_m'});
lyr_ComunidadesIndgenas_18.set('fieldAliases', {'fid': 'fid', 'direccion': 'direccion', 'comunidad': 'comunidad', 'fuente_inf': 'fuente_inf', 'estado': 'estado', 'cod_region': 'cod_region'});
lyr_MonumentosArqueolgicos_19.set('fieldAliases', {'fid': 'fid', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'CORRELATIV': 'CORRELATIV'});
lyr_MonumentosNacionales_20.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'cut_com': 'cut_com', 'region': 'region', 'provincia': 'provincia', 'comuna': 'comuna', 'codigo': 'codigo'});
lyr_SNAP_21.set('fieldAliases', {'fid': 'fid', 'SUPERFICIE': 'SUPERFICIE', 'NOMBRE_TOT': 'NOMBRE_TOT', 'ID_CATASTR': 'ID_CATASTR', 'CATEGORIA': 'CATEGORIA', 'NOMBRE_UNI': 'NOMBRE_UNI'});
lyr_ReservasdelaBiosfera_22.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'cod_ap': 'cod_ap', 'Codrnap': 'Codrnap', 'nom_orig': 'nom_orig', 'id_desig': 'id_desig', 'designa': 'designa'});
lyr_PlanesRECOGEMMA_23.set('fieldAliases', {'fid': 'fid', 'ID_Plan': 'ID_Plan', 'superficie': 'superficie', 'recoge': 'recoge', });
lyr_SitiosPrioritariosdeConservacin_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'cod_region': 'Región (CUT)', 'nom_region': 'Región'});
lyr_reasMarinasProtegidas_25.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'TIPO_AMP': 'TIPO_AMP', 'C_REGION': 'C_REGION', 'REGION': 'REGION', 'C_INSTIT': 'C_INSTIT', 'SUP_HA': 'SUP_HA'});
lyr_SitiosRamsar_26.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'cod_ap': 'cod_ap', 'Codrnap': 'Codrnap', 'nom_orig': 'nom_orig', 'id_desig': 'id_desig', 'designa': 'designa'});
lyr_InventarioNacionaldeHumedalesMMA_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'COD_HUMEDA': 'COD_HUMEDA', 'NOM_HUMDET': 'NOM_HUMDET', 'NOM_HUMMAS': 'NOM_HUMMAS'});
lyr_InmueblesdeConservacinHistrica_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'COMUNA': 'COMUNA', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'DO': 'DO'});
lyr_ZonasdeConservacinHistrica_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'REG': 'REG', 'COM': 'COM', 'LOC': 'LOC'});
lyr_ZonasdeIntersTursticoZOIT_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo'});
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': ''});
lyr_AREAESTUDIONuevaSERoViejo_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': ''});
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': ''});
lyr_AREAESTUDIONuevaSERoViejo_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': ''});
lyr_AREAESTUDIONvaSELongovilo_5.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': ''});
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': ''});
lyr_AREAESTUDIONvaSELongovilo_7.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': ''});
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': ''});
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': ''});
lyr_AREAESTUDIONvaSETiuquilemu_10.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': ''});
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': ''});
lyr_AREAESTUDIONvaSETiuquilemu_12.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': ''});
lyr_AREAESTUDIOAnlisisprefactibilidad_13.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': ''});
lyr_AREAESTUDIOAnlisisprefactibilidad_14.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': ''});
lyr_Poligonos_Analisis_Grupo1_3_31.set('fieldImages', {'AREA': 'TextEdit', 'NOMBRE': 'TextEdit'});
lyr_Poligonos_Analisis_Grupo5_6_32.set('fieldImages', {'AREA': 'TextEdit', 'NOMBRE': 'TextEdit'});
lyr_Poligonos_Analisis_Grupo7_9_33.set('fieldImages', {'AREA': 'TextEdit', 'NOMBRE': 'TextEdit'});
lyr_Predios_CIREN_Grupo1_2_34.set('fieldImages', {'ROL': 'TextEdit'});
lyr_Predios_CIREN_Grupo7_8_35.set('fieldImages', {'ROL': 'TextEdit'});
lyr_Suelos_CIREN_Grupo1_1_36.set('fieldImages', {'TEXTCAUS': 'TextEdit'});
lyr_Suelos_CIREN_Grupo5_4_37.set('fieldImages', {'TEXTCAUS': 'TextEdit'});
lyr_Suelos_CIREN_Grupo7_7_38.set('fieldImages', {'TEXTCAUS': 'TextEdit'});
lyr_propiedades_R05_R06_R13_29943_5_39.set('fieldImages', {'ROL': 'TextEdit'});
lyr_TtulosdeMerced_15.set('fieldImages', {'fid': 'TextEdit', 'comunidad': 'TextEdit', 'letra': 'TextEdit', 'titulo_mer': 'Range', 'p_remensur': 'TextEdit', 'cod_region': 'TextEdit'});
lyr_reasdeDesarrolloIndgenaADI_16.set('fieldImages', {'fid': 'TextEdit', 'COD_COMUNA': 'TextEdit', 'COD_PROVIN': 'TextEdit', 'COD_REGION': 'TextEdit', 'COMUNAS': 'TextEdit', 'ETNIA': 'TextEdit'});
lyr_Comprasdetierras_17.set('fieldImages', {'fid': 'TextEdit', 'year': 'TextEdit', 'sector': 'TextEdit', 'nombre': 'TextEdit', 'apellido_p': 'TextEdit', 'apellido_m': 'TextEdit'});
lyr_ComunidadesIndgenas_18.set('fieldImages', {'fid': 'TextEdit', 'direccion': 'TextEdit', 'comunidad': 'TextEdit', 'fuente_inf': 'TextEdit', 'estado': 'TextEdit', 'cod_region': 'TextEdit'});
lyr_MonumentosArqueolgicos_19.set('fieldImages', {'fid': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'CORRELATIV': 'TextEdit'});
lyr_MonumentosNacionales_20.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'cut_com': 'TextEdit', 'region': 'TextEdit', 'provincia': 'TextEdit', 'comuna': 'TextEdit'});
lyr_SNAP_21.set('fieldImages', {'fid': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'NOMBRE_TOT': 'TextEdit', 'ID_CATASTR': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOMBRE_UNI': 'TextEdit'});
lyr_ReservasdelaBiosfera_22.set('fieldImages', {'fid': 'TextEdit', 'fid_1': 'TextEdit', 'cod_ap': 'TextEdit', 'Codrnap': 'TextEdit', 'nom_orig': 'TextEdit', 'id_desig': 'TextEdit'});
lyr_PlanesRECOGEMMA_23.set('fieldImages', {'fid': 'TextEdit', 'ID_Plan': 'TextEdit', 'superficie': 'TextEdit', 'recoge': 'TextEdit', });
lyr_SitiosPrioritariosdeConservacin_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'nombre': 'TextEdit', 'cod_region': 'TextEdit', 'nom_region': 'TextEdit'});
lyr_reasMarinasProtegidas_25.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO_AMP': 'TextEdit', 'C_REGION': 'TextEdit', 'REGION': 'TextEdit', 'C_INSTIT': 'TextEdit'});
lyr_SitiosRamsar_26.set('fieldImages', {'fid': 'TextEdit', 'fid_1': 'TextEdit', 'cod_ap': 'TextEdit', 'Codrnap': 'TextEdit', 'nom_orig': 'TextEdit', 'id_desig': 'TextEdit', 'designa': 'TextEdit'});
lyr_InventarioNacionaldeHumedalesMMA_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'COD_HUMEDA': 'TextEdit', 'NOM_HUMDET': 'TextEdit', 'NOM_HUMMAS': 'TextEdit'});
lyr_InmueblesdeConservacinHistrica_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'REGION': 'TextEdit', 'COMUNA': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit'});
lyr_ZonasdeConservacinHistrica_29.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'Shape_Leng': '', 'REG': '', 'COM': '', 'LOC': '', 'ZONA': '', 'NOM': '', 'UPERM': ''});
lyr_ZonasdeIntersTursticoZOIT_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit'});
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field'});
lyr_AREAESTUDIONuevaSERoViejo_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field'});
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field'});
lyr_AREAESTUDIONuevaSERoViejo_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field'});
lyr_AREAESTUDIONvaSELongovilo_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field'});
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field'});
lyr_AREAESTUDIONvaSELongovilo_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field'});
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field'});
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field'});
lyr_AREAESTUDIONvaSETiuquilemu_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field'});
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field'});
lyr_AREAESTUDIONvaSETiuquilemu_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field'});
lyr_AREAESTUDIOAnlisisprefactibilidad_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label'});
lyr_AREAESTUDIOAnlisisprefactibilidad_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label'});
lyr_Poligonos_Analisis_Grupo1_3_31.set('fieldLabels', {'AREA': 'no label', 'NOMBRE': 'no label'});
lyr_Poligonos_Analisis_Grupo5_6_32.set('fieldLabels', {'AREA': 'no label', 'NOMBRE': 'no label'});
lyr_Poligonos_Analisis_Grupo7_9_33.set('fieldLabels', {'AREA': 'no label', 'NOMBRE': 'no label'});
lyr_Predios_CIREN_Grupo1_2_34.set('fieldLabels', {'ROL': 'inline label - visible with data'});
lyr_Predios_CIREN_Grupo7_8_35.set('fieldLabels', {'ROL': 'inline label - visible with data'});
lyr_Suelos_CIREN_Grupo1_1_36.set('fieldLabels', {'TEXTCAUS': 'inline label - visible with data'});
lyr_Suelos_CIREN_Grupo5_4_37.set('fieldLabels', {'TEXTCAUS': 'inline label - visible with data'});
lyr_Suelos_CIREN_Grupo7_7_38.set('fieldLabels', {'TEXTCAUS': 'inline label - visible with data'});
lyr_propiedades_R05_R06_R13_29943_5_39.set('fieldLabels', {'ROL': 'inline label - visible with data'});
lyr_TtulosdeMerced_15.set('fieldLabels', {'fid': 'hidden field', 'comunidad': 'no label', 'letra': 'no label', 'titulo_mer': 'no label', 'p_remensur': 'no label', 'cod_region': 'no label'});
lyr_reasdeDesarrolloIndgenaADI_16.set('fieldLabels', {'fid': 'no label', 'COD_COMUNA': 'no label', 'COD_PROVIN': 'no label', 'COD_REGION': 'no label', 'COMUNAS': 'no label', 'ETNIA': 'no label'});
lyr_Comprasdetierras_17.set('fieldLabels', {'fid': 'hidden field', 'year': 'no label', 'sector': 'no label', 'nombre': 'no label', 'apellido_p': 'no label', 'apellido_m': 'no label'});
lyr_ComunidadesIndgenas_18.set('fieldLabels', {'fid': 'hidden field', 'direccion': 'no label', 'comunidad': 'no label', 'fuente_inf': 'no label', 'estado': 'no label', 'cod_region': 'no label'});
lyr_MonumentosArqueolgicos_19.set('fieldLabels', {'fid': 'hidden field', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'CORRELATIV': 'no label'});
lyr_MonumentosNacionales_20.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'cut_com': 'no label', 'region': 'no label', 'provincia': 'no label', 'comuna': 'no label'});
lyr_SNAP_21.set('fieldLabels', {'fid': 'hidden field', 'SUPERFICIE': 'no label', 'NOMBRE_TOT': 'no label', 'ID_CATASTR': 'no label', 'CATEGORIA': 'no label', 'NOMBRE_UNI': 'no label'});
lyr_ReservasdelaBiosfera_22.set('fieldLabels', {'fid': 'no label', 'fid_1': 'no label', 'cod_ap': 'no label', 'Codrnap': 'no label', 'nom_orig': 'no label', 'id_desig': 'no label'});
lyr_PlanesRECOGEMMA_23.set('fieldLabels', {'fid': 'hidden field', 'ID_Plan': 'no label', 'superficie': 'no label', 'recoge': 'no label', });
lyr_SitiosPrioritariosdeConservacin_24.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'nombre': 'no label', 'cod_region': 'no label', 'nom_region': 'no label'});
lyr_reasMarinasProtegidas_25.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE': 'no label', 'TIPO_AMP': 'no label', 'C_REGION': 'no label', 'REGION': 'no label', 'C_INSTIT': 'no label'});
lyr_SitiosRamsar_26.set('fieldLabels', {'fid': 'hidden field', 'fid_1': 'hidden field', 'cod_ap': 'hidden field', 'Codrnap': 'no label', 'nom_orig': 'no label', 'id_desig': 'no label'});
lyr_InventarioNacionaldeHumedalesMMA_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'COD_HUMEDA': 'no label', 'NOM_HUMDET': 'no label', 'NOM_HUMMAS': 'no label'});
lyr_InmueblesdeConservacinHistrica_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'no label', 'COMUNA': 'no label', 'NOMBRE': 'no label'});
lyr_ZonasdeConservacinHistrica_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'Shape_Leng': 'hidden field', 'REG': 'no label'});
lyr_ZonasdeIntersTursticoZOIT_30.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label'});
lyr_ZonasdeIntersTursticoZOIT_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

