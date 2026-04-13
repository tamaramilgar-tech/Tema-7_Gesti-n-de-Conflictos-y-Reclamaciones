# Tema 7 · Gestión de conflictos y reclamaciones

Repositorio web listo para publicar en GitHub Pages.

## Estructura
- `index.html`
- `css/styles.css`
- `js/app.js`
- `js/data.js`
- `js/storage.js`
- `js/verificacion.js`
- `assets/mapa_conceptual_tema7.png`

## Publicación en GitHub Pages
1. Sube **el contenido de esta carpeta** a la raíz del repositorio.
2. Comprueba que `index.html` está en la raíz.
3. En GitHub, entra en **Settings > Pages**.
4. Selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/(root)`.
6. Guarda y espera unos minutos.

## Funcionamiento didáctico
- Fase previa con mapa conceptual descargable.
- 5 preguntas tipo test en la fase previa.
- 10 preguntas tipo test en cada una de las fases restantes.
- Dos intentos por test.
- Superación con un 80 % de aciertos.
- Si no se supera el segundo intento, se muestran las respuestas correctas y el test queda registrado como **no superado**.
- El certificado final registra el estado de cada test.
- La validación de fase se realiza con código del docente.
- El progreso se guarda en `localStorage`.

## Código de validación
El proyecto comprueba internamente la fecha del día en formato `ddmmaaaa`.
