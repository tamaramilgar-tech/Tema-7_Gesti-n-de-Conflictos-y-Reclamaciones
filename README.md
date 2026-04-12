# CYA · Tema 7 · Gestión de conflictos y reclamaciones

Web estática preparada para GitHub Pages.

## Incluye

- práctica inicial de mapa conceptual
- 8 fases temáticas
- casos prácticos por fase
- tests con nivel de grado superior
- guardado automático del progreso mediante `localStorage`
- certificado final en PDF
- bloqueo del certificado si el estudiante no ha escrito su nombre

## Estructura

```text
.
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── certificate.js
    ├── data.js
    └── storage.js
```

## Publicación en GitHub Pages

1. Sube esta carpeta a un repositorio nuevo.
2. En GitHub, entra en **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/root`.
5. Guarda los cambios y espera a que GitHub publique la web.

## Personalización rápida

- contenido de las fases: `js/data.js`
- lógica de progreso: `js/storage.js` y `js/app.js`
- certificado PDF: `js/certificate.js`
- diseño visual: `css/styles.css`

## Nota técnica

El progreso se guarda en el navegador del estudiante. Si cambia de dispositivo o borra los datos del navegador, el avance no se conservará.
