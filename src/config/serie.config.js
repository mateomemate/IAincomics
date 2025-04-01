const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://mateomemate.github.io",
  "baseurl": "/IAincomics",
  "title": "IAs en Comics",
  "subtitle": "TBD",
  "credits": "Mateo Rojas Borrero",
  "copyright": "Todos los derechos reservados, 2025",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "Creator",
        "label": "Creator",
        "type": "text"
      },
      {
        "key": "Page",
        "label": "Page",
        "type": "text"
      },
      {
        "key": "Medium",
        "label": "Medium",
        "type": "text"
      },
      {
        "key": "Date",
        "label": "Date",
        "type": "text"
      },
      {
        "key": "Genre",
        "label": "Genre",
        "type": "text"
      },
      {
        "key": "Source",
        "label": "Source",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "Creator",
      "Page",
      "Medium",
      "Date",
      "Genre",
      "Source"
    ]
  }
};
export default config;