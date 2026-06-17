# Visor de Análisis Ambiental (visoramb)

Visor de Análisis Espacial y Plataforma de Evaluación de Proximidad y Conflictos. Esta aplicación web permite la visualización y análisis espacial interactivo de infraestructuras y su relación con el entorno natural, cultural y territorial en distintas áreas de estudio.

## Descripción de la Aplicación

La aplicación provee una interfaz de mapa interactivo basada en **OpenLayers**. Su principal funcionalidad es el **Análisis de Proximidad**, el cual permite a los usuarios seleccionar un proyecto de infraestructura (o todos los grupos simultáneamente) y calcular automáticamente qué elementos del entorno se encuentran dentro de un radio de búsqueda predefinido o intersectan directamente con el trazado del proyecto.

### Funcionalidades Principales:
- **Visualización Cartográfica:** Mapa interactivo con soporte de múltiples capas base y capas temáticas, controles de navegación y un selector de capas (Layer Switcher).
- **Motor de Análisis de Proximidad (Buffer e Intersección):** Mediante la biblioteca **JSTS**, se realizan cálculos de topología espacial exactos directamente en el navegador. Identifica intersecciones reales y distancias mínimas entre las geometrías de los proyectos y las capas de entorno.
- **Panel de Resultados Dinámicos:** Muestra los resultados en el panel lateral agrupados por capas. Resalta visualmente si el elemento intersecta el proyecto (rojo) o solo está próximo dentro del radio (amarillo), indicando la distancia exacta en metros.
- **Navegación Asistida:** Permite hacer clic en cualquier resultado del análisis para hacer zoom automático hacia la ubicación geográfica del elemento en el mapa.
- **Diseño Responsivo ("Perfil Ejecutivo"):** Interfaz adaptable y optimizada, asegurando que tanto usuarios de escritorio como en dispositivos móviles tengan una experiencia fluida.

## Principales Mejoras Implementadas

- **Cálculos Espaciales Avanzados (JSTS):** Se integró la librería `jsts.min.js` para cálculos precisos de distancia entre polígonos, líneas y puntos complejos (incluyendo soporte para `GeometryCollection`). Esto evita errores comunes de análisis basados únicamente en *bounding boxes* (cajas delimitadoras).
- **Extracción Inteligente de Atributos:** La lógica del análisis (`analysis.js`) fue refinada para extraer nombres significativos según la naturaleza de la capa de manera dinámica:
  - Extrae el identificador y nombre específico para el Inventario Nacional de Humedales (`COD_HUMEDA`, `NOM_HUMDET`).
  - Reconoce y lista automáticamente los números de rol (`ROL`) para capas de propiedades y predios.
  - Identifica descriptores técnicos como texturas de suelo (`TEXTCAUS`) para capas CIREN.
- **Filtrado por Áreas de Proyecto (Grupos):** Capacidad de focalizar el análisis espacial a infraestructuras clave:
  - **Grupo 1:** Tiquel - Tiuquilemu
  - **Grupo 5:** Longovilo - Navidad
  - **Grupo 7:** Río Viejo - Guangualí
- **Carga y Rendimiento Mejorados:** El análisis geográfico pesado se realiza de forma asíncrona (con `setTimeout`), asegurando que la interfaz de usuario (UI) no se congele e informe el estado de "Analizando..." apropiadamente.

## Tecnologías y Herramientas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla). Tipografía moderna (Inter) para un aspecto ejecutivo.
- **OpenLayers (OL):** Motor de renderizado cartográfico web.
- **JSTS (JavaScript Topology Suite):** Geoprocesamiento avanzado en el cliente.
- **QGIS2Web:** Sistema base de exportación desde proyectos QGIS, enriquecido con scripts personalizados.

## Estructura del Proyecto

- `index.html`: Archivo principal que contiene la maquetación de la interfaz, el panel de controles y el contenedor del mapa.
- `resources/analysis.js`: Contiene el núcleo de la lógica de análisis espacial y las interacciones del panel de resultados.
- `layers/` y `styles/`: Archivos GeoJSON (formato script) y definiciones de estilos generadas a partir del proyecto SIG base.
- `resources/`: Bibliotecas de soporte como OpenLayers, JSTS, proyecciones (proj4), fuentes e iconos.