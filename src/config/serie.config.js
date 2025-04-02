const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://mateomemate.github.io",
  "baseurl": "/IAincomics",
  "title": "IAs en Comics",
  "subtitle": "Como imaginamos la Inteligencia Artificial en el arte secuencial",
  "credits": "Mateo Rojas Borrero",
  "copyright": "Todos los derechos reservados, 2025",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Comic",
        "type": "text"
      },
      {
        "key": "Artista",
        "label": "Artista",
        "type": "text"
      },
      {
        "key": "Página",
        "label": "Página",
        "type": "text"
      },
      {
        "key": "Medio",
        "label": "Medio",
        "type": "text"
      },
      {
        "key": "Fecha",
        "label": "Fecha",
        "type": "Date"
      },
      {
        "key": "Género",
        "label": "Género",
        "type": "text"
      },
      {
        "key": "Fuente",
        "label": "Fuente",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "Artista",
      "Página",
      "Medio",
      "Fecha",
      "Género",
      "Fuente"
    ]
  }
};
export default config;