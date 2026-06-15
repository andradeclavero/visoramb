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
var group_Planificacin = new ol.layer.Group({
                                layers: [lyr_InmueblesdeConservacinHistrica_28,lyr_ZonasdeConservacinHistrica_29,lyr_ZonasdeIntersTursticoZOIT_30,],
                                fold: 'open',
                                title: 'Planificación'});
var group_MedioNatural = new ol.layer.Group({
                                layers: [lyr_SNAP_21,lyr_ReservasdelaBiosfera_22,lyr_PlanesRECOGEMMA_23,lyr_SitiosPrioritariosdeConservacin_24,lyr_reasMarinasProtegidas_25,lyr_SitiosRamsar_26,lyr_InventarioNacionaldeHumedalesMMA_27,],
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
                                layers: [lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9,lyr_AREAESTUDIONvaSETiuquilemu_10,lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11,lyr_AREAESTUDIONvaSETiuquilemu_12,lyr_AREAESTUDIOAnlisisprefactibilidad_13,lyr_AREAESTUDIOAnlisisprefactibilidad_14,],
                                fold: 'open',
                                title: 'Grupo 1 - Tiquel / Tiuquilemu'});
var group_Grupo5LongoviloNavidad = new ol.layer.Group({
                                layers: [lyr_AREAESTUDIONvaSELongovilo_5,lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6,lyr_AREAESTUDIONvaSELongovilo_7,lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8,],
                                fold: 'open',
                                title: 'Grupo 5 - Longovilo / Navidad'});
var group_Grupo7RioViejoGuanguali = new ol.layer.Group({
                                layers: [lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1,lyr_AREAESTUDIONuevaSERoViejo_2,lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3,lyr_AREAESTUDIONuevaSERoViejo_4,],
                                fold: 'open',
                                title: 'Grupo 7 - Rio Viejo / Guanguali'});

lyr_GoogleHybrid_0.setVisible(true);lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.setVisible(true);lyr_AREAESTUDIONuevaSERoViejo_2.setVisible(true);lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.setVisible(true);lyr_AREAESTUDIONuevaSERoViejo_4.setVisible(true);lyr_AREAESTUDIONvaSELongovilo_5.setVisible(true);lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.setVisible(true);lyr_AREAESTUDIONvaSELongovilo_7.setVisible(true);lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.setVisible(true);lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.setVisible(true);lyr_AREAESTUDIONvaSETiuquilemu_10.setVisible(true);lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.setVisible(true);lyr_AREAESTUDIONvaSETiuquilemu_12.setVisible(true);lyr_AREAESTUDIOAnlisisprefactibilidad_13.setVisible(true);lyr_AREAESTUDIOAnlisisprefactibilidad_14.setVisible(true);lyr_TtulosdeMerced_15.setVisible(true);lyr_reasdeDesarrolloIndgenaADI_16.setVisible(true);lyr_Comprasdetierras_17.setVisible(true);lyr_ComunidadesIndgenas_18.setVisible(true);lyr_MonumentosArqueolgicos_19.setVisible(true);lyr_MonumentosNacionales_20.setVisible(true);lyr_SNAP_21.setVisible(true);lyr_ReservasdelaBiosfera_22.setVisible(true);lyr_PlanesRECOGEMMA_23.setVisible(true);lyr_SitiosPrioritariosdeConservacin_24.setVisible(true);lyr_reasMarinasProtegidas_25.setVisible(true);lyr_SitiosRamsar_26.setVisible(true);lyr_InventarioNacionaldeHumedalesMMA_27.setVisible(true);lyr_InmueblesdeConservacinHistrica_28.setVisible(true);lyr_ZonasdeConservacinHistrica_29.setVisible(true);lyr_ZonasdeIntersTursticoZOIT_30.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_Grupo7RioViejoGuanguali,group_Grupo5LongoviloNavidad,group_Grupo1TiquelTiuquilemu,group_CONADI,group_MedioCultural,group_MedioNatural,group_Planificacin];
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAESTUDIONuevaSERoViejo_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAESTUDIONuevaSERoViejo_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAESTUDIONvaSELongovilo_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AREAESTUDIONvaSELongovilo_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AREAESTUDIONvaSETiuquilemu_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AREAESTUDIONvaSETiuquilemu_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_AREAESTUDIOAnlisisprefactibilidad_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AREAESTUDIOAnlisisprefactibilidad_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TtulosdeMerced_15.set('fieldAliases', {'fid': 'fid', 'comunidad': 'comunidad', 'letra': 'letra', 'titulo_mer': 'titulo_mer', 'p_remensur': 'p_remensur', 'cod_region': 'cod_region', 'nom_region': 'nom_region', 'cod_provin': 'cod_provin', 'nom_provin': 'nom_provin', 'cod_comuna': 'cod_comuna', 'nom_comuna': 'nom_comuna', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_reasdeDesarrolloIndgenaADI_16.set('fieldAliases', {'fid': 'fid', 'COD_COMUNA': 'COD_COMUNA', 'COD_PROVIN': 'COD_PROVIN', 'COD_REGION': 'COD_REGION', 'COMUNAS': 'COMUNAS', 'ETNIA': 'ETNIA', 'FUENTE_INF': 'FUENTE_INF', 'HA': 'HA', 'NOMBRE': 'NOMBRE', 'OBJECTID_1': 'OBJECTID_1', 'PROVINCIAS': 'PROVINCIAS', 'REGION': 'REGION', 'OBSERVACIO': 'OBSERVACIO', });
lyr_Comprasdetierras_17.set('fieldAliases', {'fid': 'fid', 'year': 'year', 'sector': 'sector', 'nombre': 'nombre', 'apellido_p': 'apellido_p', 'apellido_m': 'apellido_m', 'tipo_proye': 'tipo_proye', 'ejecutor': 'ejecutor', 'oficina': 'oficina', 'observacio': 'observacio', 'tipo_compr': 'tipo_compr', 'predio': 'predio', 'n_resoluci': 'n_resoluci', 'n_concurso': 'n_concurso', 'beneficiar': 'beneficiar', 'id_licitac': 'id_licitac', 'ssc': 'ssc', 'tipo_ssc': 'tipo_ssc', 'N_PJ': 'N_PJ', 'articulo': 'articulo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'cod_region': 'cod_region', 'nom_region': 'nom_region', 'cod_provin': 'cod_provin', 'nom_provin': 'nom_provin', 'cod_comuna': 'cod_comuna', 'nom_comuna': 'nom_comuna', });
lyr_ComunidadesIndgenas_18.set('fieldAliases', {'fid': 'fid', 'direccion': 'direccion', 'comunidad': 'comunidad', 'fuente_inf': 'fuente_inf', 'estado': 'estado', 'cod_region': 'cod_region', 'nom_region': 'nom_region', 'cod_provin': 'cod_provin', 'nom_provin': 'nom_provin', 'cod_comuna': 'cod_comuna', 'nom_comuna': 'nom_comuna', });
lyr_MonumentosArqueolgicos_19.set('fieldAliases', {'fid': 'fid', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'CORRELATIV': 'CORRELATIV', 'ID_REGISTR': 'ID_REGISTR', 'CATEGORIA_': 'CATEGORIA_', 'NOMBRE': 'NOMBRE', 'OTRO_NOMBR': 'OTRO_NOMBR', 'REGISTRADO': 'REGISTRADO', 'FECHA_REGI': 'FECHA_REGI', 'VALIDADOR': 'VALIDADOR', 'FECHA_VALI': 'FECHA_VALI', 'TIPOLOGIA_': 'TIPOLOGIA_', 'OBSERVACIO': 'OBSERVACIO', 'CRONOLOGIA': 'CRONOLOGIA', 'MONUMENTO_': 'MONUMENTO_', 'DECRETO_DE': 'DECRETO_DE', 'COORD_GEO_': 'COORD_GEO_', 'COORD_GEO1': 'COORD_GEO1', 'AUTOR_RESP': 'AUTOR_RESP', 'MEDIO_PUBL': 'MEDIO_PUBL', 'ANO': 'ANO', 'GlobalID': 'GlobalID', 'ID_MA': 'ID_MA', 'ID_COMPONE': 'ID_COMPONE', 'CODIGO_MN': 'CODIGO_MN', 'VALIDACION': 'VALIDACION', 'COMENTARIO': 'COMENTARIO', 'ULTIMA_ACT': 'ULTIMA_ACT', 'NOMBRE_COM': 'NOMBRE_COM', 'FUENTE_ANT': 'FUENTE_ANT', });
lyr_MonumentosNacionales_20.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'cut_com': 'cut_com', 'region': 'region', 'provincia': 'provincia', 'comuna': 'comuna', 'codigo': 'codigo', 'nombre': 'nombre', 'categoria': 'categoria', 'coord_este': 'coord_este', 'coord_nort': 'coord_nort', 'sup_ofc_mt': 'sup_ofc_mt', 'sup_ofc_ha': 'sup_ofc_ha', 'actualizac': 'actualizac', 'tipo_decre': 'tipo_decre', 'num_dec': 'num_dec', 'fch_dec': 'fch_dec', 'pub_dec': 'pub_dec', 'obs_dpa': 'obs_dpa', 'imagen': 'imagen', 'lat': 'lat', 'long': 'long', 'GlobalID': 'GlobalID', 'CORRELATIV': 'CORRELATIV', 'web': 'web', 'URL_DECRET': 'URL_DECRET', 'URL_PLANO': 'URL_PLANO', 'ID_INT': 'ID_INT', });
lyr_SNAP_21.set('fieldAliases', {'fid': 'fid', 'SUPERFICIE': 'SUPERFICIE', 'NOMBRE_TOT': 'NOMBRE_TOT', 'ID_CATASTR': 'ID_CATASTR', 'CATEGORIA': 'CATEGORIA', 'NOMBRE_UNI': 'NOMBRE_UNI', 'REGION': 'REGION', 'CONDICION': 'CONDICION', 'TIPO_DE_PR': 'TIPO_DE_PR', 'NUM_PLANO': 'NUM_PLANO', 'TERRITORIO': 'TERRITORIO', 'DECRETO': 'DECRETO', 'EMISOR_DEC': 'EMISOR_DEC', 'LINK': 'LINK', });
lyr_ReservasdelaBiosfera_22.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'cod_ap': 'cod_ap', 'Codrnap': 'Codrnap', 'nom_orig': 'nom_orig', 'id_desig': 'id_desig', 'designa': 'designa', 'anio_decre': 'anio_decre', 'autoridad': 'autoridad', 'StatusWDPA': 'StatusWDPA', 'sup_ha': 'sup_ha', 'sup_km': 'sup_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_PlanesRECOGEMMA_23.set('fieldAliases', {'fid': 'fid', 'ID_Plan': 'ID_Plan', 'superficie': 'superficie', 'recoge': 'recoge', });
lyr_SitiosPrioritariosdeConservacin_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'cod_region': 'Región (CUT)', 'nom_region': 'Región', 'cod_provincia': 'Provincia (CUT)', 'nom_provincia': 'Provincia', 'cod_comuna': 'Comuna (CUT)', 'nom_comuna': 'Comuna', 'id_catastro': 'ID Catastro', 'categoria': 'Categoría', 'nombre_unidad': 'Nombre Unidad', 'region': 'Región (2)', 'condicion': 'Condición', 'decreto': 'decreto', 'tipo_propiedad': 'Tipo de propiedad', 'n_plano': 'Número plano', 'territorio': 'territorio', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_reasMarinasProtegidas_25.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'TIPO_AMP': 'TIPO_AMP', 'C_REGION': 'C_REGION', 'REGION': 'REGION', 'C_INSTIT': 'C_INSTIT', 'SUP_HA': 'SUP_HA', 'PLANO': 'PLANO', 'ESCALA': 'ESCALA', 'DATUM': 'DATUM', 'N_DECTO': 'N_DECTO', 'F__DECTO': 'F__DECTO', });
lyr_SitiosRamsar_26.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'cod_ap': 'cod_ap', 'Codrnap': 'Codrnap', 'nom_orig': 'nom_orig', 'id_desig': 'id_desig', 'designa': 'designa', 'anio_decre': 'anio_decre', 'autoridad': 'autoridad', 'StatusWDPA': 'StatusWDPA', 'sup_ha': 'sup_ha', 'sup_km': 'sup_km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_InventarioNacionaldeHumedalesMMA_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'COD_HUMEDA': 'COD_HUMEDA', 'NOM_HUMDET': 'NOM_HUMDET', 'NOM_HUMMAS': 'NOM_HUMMAS', 'ORDEN_1': 'ORDEN_1', 'ORDEN_2': 'ORDEN_2', 'ORDEN_3': 'ORDEN_3', 'ORDEN_4': 'ORDEN_4', 'ORDEN_5': 'ORDEN_5', 'HECTAREAS': 'HECTAREAS', 'HLIMITEURB': 'HLIMITEURB', 'URL_SIMBIO': 'URL_SIMBIO', 'COD_HUMMAS': 'COD_HUMMAS', });
lyr_InmueblesdeConservacinHistrica_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'COMUNA': 'COMUNA', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'DO': 'DO', 'SECTOR': 'SECTOR', 'ROL': 'ROL', 'SUP_EDI_M2': 'SUP_EDI_M2', 'EST_CONS': 'EST_CONS', 'REGIMEN': 'REGIMEN', 'CAL_JURID': 'CAL_JURID', 'AGNO_CONS': 'AGNO_CONS', 'DOC': 'DOC', 'N_DOC': 'N_DOC', 'CUT': 'CUT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZonasdeConservacinHistrica_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'REG': 'REG', 'COM': 'COM', 'LOC': 'LOC', 'ZONA': 'ZONA', 'NOM': 'NOM', 'UPERM': 'UPERM', 'UPROH': 'UPROH', 'P_DO': 'P_DO', 'N_DO': 'N_DO', 'T_DO': 'T_DO', 'OBS': 'OBS', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ZonasdeIntersTursticoZOIT_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_AREAESTUDIONuevaSERoViejo_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_AREAESTUDIONuevaSERoViejo_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_AREAESTUDIONvaSELongovilo_5.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AREAESTUDIONvaSELongovilo_7.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AREAESTUDIONvaSETiuquilemu_10.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AREAESTUDIONvaSETiuquilemu_12.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_AREAESTUDIOAnlisisprefactibilidad_13.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AREAESTUDIOAnlisisprefactibilidad_14.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TtulosdeMerced_15.set('fieldImages', {'fid': 'TextEdit', 'comunidad': 'TextEdit', 'letra': 'TextEdit', 'titulo_mer': 'Range', 'p_remensur': 'TextEdit', 'cod_region': 'TextEdit', 'nom_region': 'TextEdit', 'cod_provin': 'TextEdit', 'nom_provin': 'TextEdit', 'cod_comuna': 'TextEdit', 'nom_comuna': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_reasdeDesarrolloIndgenaADI_16.set('fieldImages', {'fid': 'TextEdit', 'COD_COMUNA': 'TextEdit', 'COD_PROVIN': 'TextEdit', 'COD_REGION': 'TextEdit', 'COMUNAS': 'TextEdit', 'ETNIA': 'TextEdit', 'FUENTE_INF': 'TextEdit', 'HA': 'TextEdit', 'NOMBRE': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'PROVINCIAS': 'TextEdit', 'REGION': 'TextEdit', 'OBSERVACIO': 'TextEdit', });
lyr_Comprasdetierras_17.set('fieldImages', {'fid': 'TextEdit', 'year': 'TextEdit', 'sector': 'TextEdit', 'nombre': 'TextEdit', 'apellido_p': 'TextEdit', 'apellido_m': 'TextEdit', 'tipo_proye': 'TextEdit', 'ejecutor': 'TextEdit', 'oficina': 'TextEdit', 'observacio': 'TextEdit', 'tipo_compr': 'TextEdit', 'predio': 'TextEdit', 'n_resoluci': 'Range', 'n_concurso': 'Range', 'beneficiar': 'TextEdit', 'id_licitac': 'TextEdit', 'ssc': 'TextEdit', 'tipo_ssc': 'TextEdit', 'N_PJ': 'TextEdit', 'articulo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'cod_region': 'TextEdit', 'nom_region': 'TextEdit', 'cod_provin': 'TextEdit', 'nom_provin': 'TextEdit', 'cod_comuna': 'TextEdit', 'nom_comuna': 'TextEdit', });
lyr_ComunidadesIndgenas_18.set('fieldImages', {'fid': 'TextEdit', 'direccion': 'TextEdit', 'comunidad': 'TextEdit', 'fuente_inf': 'TextEdit', 'estado': 'TextEdit', 'cod_region': 'TextEdit', 'nom_region': 'TextEdit', 'cod_provin': 'TextEdit', 'nom_provin': 'TextEdit', 'cod_comuna': 'TextEdit', 'nom_comuna': 'TextEdit', });
lyr_MonumentosArqueolgicos_19.set('fieldImages', {'fid': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'CORRELATIV': 'TextEdit', 'ID_REGISTR': 'TextEdit', 'CATEGORIA_': 'TextEdit', 'NOMBRE': 'TextEdit', 'OTRO_NOMBR': 'TextEdit', 'REGISTRADO': 'TextEdit', 'FECHA_REGI': 'DateTime', 'VALIDADOR': 'TextEdit', 'FECHA_VALI': 'DateTime', 'TIPOLOGIA_': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CRONOLOGIA': 'TextEdit', 'MONUMENTO_': 'TextEdit', 'DECRETO_DE': 'TextEdit', 'COORD_GEO_': 'TextEdit', 'COORD_GEO1': 'TextEdit', 'AUTOR_RESP': 'TextEdit', 'MEDIO_PUBL': 'TextEdit', 'ANO': 'TextEdit', 'GlobalID': 'TextEdit', 'ID_MA': 'TextEdit', 'ID_COMPONE': 'TextEdit', 'CODIGO_MN': 'TextEdit', 'VALIDACION': 'TextEdit', 'COMENTARIO': 'TextEdit', 'ULTIMA_ACT': 'TextEdit', 'NOMBRE_COM': 'TextEdit', 'FUENTE_ANT': 'TextEdit', });
lyr_MonumentosNacionales_20.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'cut_com': 'TextEdit', 'region': 'TextEdit', 'provincia': 'TextEdit', 'comuna': 'TextEdit', 'codigo': 'TextEdit', 'nombre': 'TextEdit', 'categoria': 'TextEdit', 'coord_este': 'TextEdit', 'coord_nort': 'TextEdit', 'sup_ofc_mt': 'TextEdit', 'sup_ofc_ha': 'TextEdit', 'actualizac': 'DateTime', 'tipo_decre': 'TextEdit', 'num_dec': 'TextEdit', 'fch_dec': 'DateTime', 'pub_dec': 'DateTime', 'obs_dpa': 'TextEdit', 'imagen': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'GlobalID': 'TextEdit', 'CORRELATIV': 'TextEdit', 'web': 'TextEdit', 'URL_DECRET': 'TextEdit', 'URL_PLANO': 'TextEdit', 'ID_INT': 'TextEdit', });
lyr_SNAP_21.set('fieldImages', {'fid': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'NOMBRE_TOT': 'TextEdit', 'ID_CATASTR': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOMBRE_UNI': 'TextEdit', 'REGION': 'TextEdit', 'CONDICION': 'TextEdit', 'TIPO_DE_PR': 'TextEdit', 'NUM_PLANO': 'TextEdit', 'TERRITORIO': 'TextEdit', 'DECRETO': 'TextEdit', 'EMISOR_DEC': 'TextEdit', 'LINK': 'TextEdit', });
lyr_ReservasdelaBiosfera_22.set('fieldImages', {'fid': 'TextEdit', 'fid_1': 'TextEdit', 'cod_ap': 'TextEdit', 'Codrnap': 'TextEdit', 'nom_orig': 'TextEdit', 'id_desig': 'TextEdit', 'designa': 'TextEdit', 'anio_decre': 'TextEdit', 'autoridad': 'TextEdit', 'StatusWDPA': 'TextEdit', 'sup_ha': 'TextEdit', 'sup_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_PlanesRECOGEMMA_23.set('fieldImages', {'fid': 'TextEdit', 'ID_Plan': 'TextEdit', 'superficie': 'TextEdit', 'recoge': 'TextEdit', });
lyr_SitiosPrioritariosdeConservacin_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'nombre': 'TextEdit', 'cod_region': 'TextEdit', 'nom_region': 'TextEdit', 'cod_provincia': 'TextEdit', 'nom_provincia': 'TextEdit', 'cod_comuna': 'TextEdit', 'nom_comuna': 'TextEdit', 'id_catastro': 'TextEdit', 'categoria': 'TextEdit', 'nombre_unidad': 'TextEdit', 'region': 'TextEdit', 'condicion': 'TextEdit', 'decreto': 'TextEdit', 'tipo_propiedad': 'TextEdit', 'n_plano': 'TextEdit', 'territorio': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_reasMarinasProtegidas_25.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO_AMP': 'TextEdit', 'C_REGION': 'TextEdit', 'REGION': 'TextEdit', 'C_INSTIT': 'TextEdit', 'SUP_HA': 'TextEdit', 'PLANO': 'TextEdit', 'ESCALA': 'TextEdit', 'DATUM': 'TextEdit', 'N_DECTO': 'TextEdit', 'F__DECTO': 'DateTime', });
lyr_SitiosRamsar_26.set('fieldImages', {'fid': 'TextEdit', 'fid_1': 'TextEdit', 'cod_ap': 'TextEdit', 'Codrnap': 'TextEdit', 'nom_orig': 'TextEdit', 'id_desig': 'TextEdit', 'designa': 'TextEdit', 'anio_decre': 'TextEdit', 'autoridad': 'TextEdit', 'StatusWDPA': 'TextEdit', 'sup_ha': 'TextEdit', 'sup_km': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_InventarioNacionaldeHumedalesMMA_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'COD_HUMEDA': 'TextEdit', 'NOM_HUMDET': 'TextEdit', 'NOM_HUMMAS': 'TextEdit', 'ORDEN_1': 'TextEdit', 'ORDEN_2': 'TextEdit', 'ORDEN_3': 'TextEdit', 'ORDEN_4': 'TextEdit', 'ORDEN_5': 'TextEdit', 'HECTAREAS': 'TextEdit', 'HLIMITEURB': 'TextEdit', 'URL_SIMBIO': 'TextEdit', 'COD_HUMMAS': 'TextEdit', });
lyr_InmueblesdeConservacinHistrica_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'REGION': 'TextEdit', 'COMUNA': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'DO': 'TextEdit', 'SECTOR': 'TextEdit', 'ROL': 'TextEdit', 'SUP_EDI_M2': 'TextEdit', 'EST_CONS': 'TextEdit', 'REGIMEN': 'TextEdit', 'CAL_JURID': 'TextEdit', 'AGNO_CONS': 'TextEdit', 'DOC': 'TextEdit', 'N_DOC': 'TextEdit', 'CUT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZonasdeConservacinHistrica_29.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'Shape_Leng': '', 'REG': '', 'COM': '', 'LOC': '', 'ZONA': '', 'NOM': '', 'UPERM': '', 'UPROH': '', 'P_DO': '', 'N_DO': '', 'T_DO': '', 'OBS': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_ZonasdeIntersTursticoZOIT_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'Hidden', });
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_AREAESTUDIONuevaSERoViejo_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_AREAESTUDIONuevaSEGuangualynuevalnea2x66kVGuangualRoViejo_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_AREAESTUDIONuevaSERoViejo_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_AREAESTUDIONvaSELongovilo_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AREAESTUDIONvaSELongovilo_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_AREAESTUDIONvaSENavidadynvalnea2x66kVNavidadLongovilo_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AREAESTUDIONvaSETiuquilemu_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_AREAESTUDIONvaSETiquelyNvalnea2x500KVTiquelTiuquilemu_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AREAESTUDIONvaSETiuquilemu_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_AREAESTUDIOAnlisisprefactibilidad_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AREAESTUDIOAnlisisprefactibilidad_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TtulosdeMerced_15.set('fieldLabels', {'fid': 'hidden field', 'comunidad': 'no label', 'letra': 'no label', 'titulo_mer': 'no label', 'p_remensur': 'no label', 'cod_region': 'no label', 'nom_region': 'no label', 'cod_provin': 'no label', 'nom_provin': 'no label', 'cod_comuna': 'no label', 'nom_comuna': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_reasdeDesarrolloIndgenaADI_16.set('fieldLabels', {'fid': 'no label', 'COD_COMUNA': 'no label', 'COD_PROVIN': 'no label', 'COD_REGION': 'no label', 'COMUNAS': 'no label', 'ETNIA': 'no label', 'FUENTE_INF': 'no label', 'HA': 'no label', 'NOMBRE': 'no label', 'OBJECTID_1': 'no label', 'PROVINCIAS': 'no label', 'REGION': 'no label', 'OBSERVACIO': 'no label', });
lyr_Comprasdetierras_17.set('fieldLabels', {'fid': 'hidden field', 'year': 'no label', 'sector': 'no label', 'nombre': 'no label', 'apellido_p': 'no label', 'apellido_m': 'no label', 'tipo_proye': 'no label', 'ejecutor': 'no label', 'oficina': 'no label', 'observacio': 'no label', 'tipo_compr': 'no label', 'predio': 'no label', 'n_resoluci': 'no label', 'n_concurso': 'no label', 'beneficiar': 'no label', 'id_licitac': 'no label', 'ssc': 'no label', 'tipo_ssc': 'no label', 'N_PJ': 'no label', 'articulo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'cod_region': 'no label', 'nom_region': 'no label', 'cod_provin': 'no label', 'nom_provin': 'no label', 'cod_comuna': 'no label', 'nom_comuna': 'no label', });
lyr_ComunidadesIndgenas_18.set('fieldLabels', {'fid': 'hidden field', 'direccion': 'no label', 'comunidad': 'no label', 'fuente_inf': 'no label', 'estado': 'no label', 'cod_region': 'no label', 'nom_region': 'no label', 'cod_provin': 'no label', 'nom_provin': 'no label', 'cod_comuna': 'no label', 'nom_comuna': 'no label', });
lyr_MonumentosArqueolgicos_19.set('fieldLabels', {'fid': 'hidden field', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'CORRELATIV': 'no label', 'ID_REGISTR': 'no label', 'CATEGORIA_': 'no label', 'NOMBRE': 'no label', 'OTRO_NOMBR': 'no label', 'REGISTRADO': 'no label', 'FECHA_REGI': 'no label', 'VALIDADOR': 'no label', 'FECHA_VALI': 'no label', 'TIPOLOGIA_': 'no label', 'OBSERVACIO': 'no label', 'CRONOLOGIA': 'no label', 'MONUMENTO_': 'no label', 'DECRETO_DE': 'no label', 'COORD_GEO_': 'no label', 'COORD_GEO1': 'no label', 'AUTOR_RESP': 'no label', 'MEDIO_PUBL': 'no label', 'ANO': 'no label', 'GlobalID': 'hidden field', 'ID_MA': 'no label', 'ID_COMPONE': 'no label', 'CODIGO_MN': 'no label', 'VALIDACION': 'no label', 'COMENTARIO': 'no label', 'ULTIMA_ACT': 'no label', 'NOMBRE_COM': 'no label', 'FUENTE_ANT': 'no label', });
lyr_MonumentosNacionales_20.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'cut_com': 'no label', 'region': 'no label', 'provincia': 'no label', 'comuna': 'no label', 'codigo': 'no label', 'nombre': 'no label', 'categoria': 'no label', 'coord_este': 'no label', 'coord_nort': 'no label', 'sup_ofc_mt': 'no label', 'sup_ofc_ha': 'no label', 'actualizac': 'no label', 'tipo_decre': 'no label', 'num_dec': 'no label', 'fch_dec': 'no label', 'pub_dec': 'no label', 'obs_dpa': 'no label', 'imagen': 'no label', 'lat': 'no label', 'long': 'no label', 'GlobalID': 'hidden field', 'CORRELATIV': 'no label', 'web': 'no label', 'URL_DECRET': 'no label', 'URL_PLANO': 'no label', 'ID_INT': 'hidden field', });
lyr_SNAP_21.set('fieldLabels', {'fid': 'hidden field', 'SUPERFICIE': 'no label', 'NOMBRE_TOT': 'no label', 'ID_CATASTR': 'no label', 'CATEGORIA': 'no label', 'NOMBRE_UNI': 'no label', 'REGION': 'no label', 'CONDICION': 'no label', 'TIPO_DE_PR': 'no label', 'NUM_PLANO': 'no label', 'TERRITORIO': 'no label', 'DECRETO': 'no label', 'EMISOR_DEC': 'no label', 'LINK': 'no label', });
lyr_ReservasdelaBiosfera_22.set('fieldLabels', {'fid': 'no label', 'fid_1': 'no label', 'cod_ap': 'no label', 'Codrnap': 'no label', 'nom_orig': 'no label', 'id_desig': 'no label', 'designa': 'no label', 'anio_decre': 'no label', 'autoridad': 'no label', 'StatusWDPA': 'no label', 'sup_ha': 'no label', 'sup_km': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_PlanesRECOGEMMA_23.set('fieldLabels', {'fid': 'hidden field', 'ID_Plan': 'no label', 'superficie': 'no label', 'recoge': 'no label', });
lyr_SitiosPrioritariosdeConservacin_24.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'nombre': 'no label', 'cod_region': 'no label', 'nom_region': 'no label', 'cod_provincia': 'no label', 'nom_provincia': 'no label', 'cod_comuna': 'no label', 'nom_comuna': 'no label', 'id_catastro': 'no label', 'categoria': 'no label', 'nombre_unidad': 'no label', 'region': 'no label', 'condicion': 'no label', 'decreto': 'no label', 'tipo_propiedad': 'no label', 'n_plano': 'no label', 'territorio': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_reasMarinasProtegidas_25.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE': 'no label', 'TIPO_AMP': 'no label', 'C_REGION': 'no label', 'REGION': 'no label', 'C_INSTIT': 'no label', 'SUP_HA': 'no label', 'PLANO': 'no label', 'ESCALA': 'no label', 'DATUM': 'no label', 'N_DECTO': 'no label', 'F__DECTO': 'no label', });
lyr_SitiosRamsar_26.set('fieldLabels', {'fid': 'hidden field', 'fid_1': 'hidden field', 'cod_ap': 'hidden field', 'Codrnap': 'no label', 'nom_orig': 'no label', 'id_desig': 'no label', 'designa': 'no label', 'anio_decre': 'no label', 'autoridad': 'no label', 'StatusWDPA': 'no label', 'sup_ha': 'no label', 'sup_km': 'no label', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_InventarioNacionaldeHumedalesMMA_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'COD_HUMEDA': 'no label', 'NOM_HUMDET': 'no label', 'NOM_HUMMAS': 'no label', 'ORDEN_1': 'no label', 'ORDEN_2': 'no label', 'ORDEN_3': 'no label', 'ORDEN_4': 'no label', 'ORDEN_5': 'no label', 'HECTAREAS': 'no label', 'HLIMITEURB': 'no label', 'URL_SIMBIO': 'no label', 'COD_HUMMAS': 'no label', });
lyr_InmueblesdeConservacinHistrica_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'no label', 'COMUNA': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'DO': 'no label', 'SECTOR': 'no label', 'ROL': 'no label', 'SUP_EDI_M2': 'no label', 'EST_CONS': 'no label', 'REGIMEN': 'no label', 'CAL_JURID': 'no label', 'AGNO_CONS': 'no label', 'DOC': 'no label', 'N_DOC': 'no label', 'CUT': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ZonasdeConservacinHistrica_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'Shape_Leng': 'hidden field', 'REG': 'no label', 'COM': 'no label', 'LOC': 'no label', 'ZONA': 'no label', 'NOM': 'no label', 'UPERM': 'no label', 'UPROH': 'no label', 'P_DO': 'no label', 'N_DO': 'no label', 'T_DO': 'no label', 'OBS': 'no label', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ZonasdeIntersTursticoZOIT_30.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ZonasdeIntersTursticoZOIT_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});