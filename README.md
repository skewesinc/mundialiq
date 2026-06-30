# MundialIQ

Sitio de análisis de probabilidades para el Mundial 2026.

## 🚀 Cómo subirlo a internet (GitHub Pages — gratis)

1. Crea una cuenta en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo, público, llamado por ejemplo `mundialiq`.
3. Sube estos archivos tal cual (botón "Add file" → "Upload files" en GitHub, arrastras toda la carpeta).
4. En el repositorio: Settings → Pages → en "Branch" selecciona `main` → Save.
5. En unos minutos tu sitio estará en: `https://tu-usuario.github.io/mundialiq`

## 🌐 Conectar tu dominio propio

1. Compra el dominio (ej. `mundialiq.com`) en Namecheap, GoDaddy o Cloudflare (~$10-15 USD/año).
2. En GitHub: Settings → Pages → "Custom domain" → escribe tu dominio → Save.
3. En el panel de tu proveedor de dominio, agrega estos registros DNS:
   - Tipo `A` apuntando a: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Tipo `CNAME` con nombre `www` apuntando a `tu-usuario.github.io`
4. Espera 10-30 minutos a que propague. Listo, tu dominio ya sirve el sitio gratis.

## ⚠️ Importante: cómo previsualizar ANTES de subir a GitHub

Si abres `index.html` con doble clic, el navegador bloqueará la carga de `data/matches.js` por seguridad (política CORS de archivos locales) y verás todo vacío.

**Para probarlo en tu computadora antes de subir:**
- Si usas VS Code: instala la extensión "Live Server" → clic derecho en `index.html` → "Open with Live Server".
- Si tienes Python instalado: abre la terminal en la carpeta del proyecto y corre `python3 -m http.server 8000`, luego entra a `http://localhost:8000` en tu navegador.
- Una vez subido a GitHub Pages, esto deja de ser un problema — el sitio funciona normal porque ya no es un archivo local.

## 📄 Estructura del sitio

- `index.html` — Página principal: buscador, lista de partidos, contador de aciertos.
- `partido.html` — Página de detalle de un partido específico (a donde te lleva el buscador o al hacer clic en cualquier tarjeta). Muestra el marcador grande, banderas, y las Apuestas A y B con sus probabilidades.
- `data/matches.js` — Toda la base de datos de partidos. Edita solo este archivo para agregar contenido nuevo.

Abre el archivo `data/matches.js` y copia/pega un bloque nuevo dentro del array `MATCHES`, así:

```js
{
  id: "mex-ecu-2026-06-30",          // único, sin espacios
  status: "upcoming",                 // "upcoming" | "live" | "finished"
  round: "Octavos de Final",
  date: "2026-06-30",
  time: "16:00",
  venue: "Estadio Azteca",
  teamA: { name: "México", code: "MEX", flag: "🇲🇽" },
  teamB: { name: "Ecuador", code: "ECU", flag: "🇪🇨" },
  result: null,                       // null si no ha jugado, o { scoreA: X, scoreB: Y }
  analysis: {
    confidence: "alta",
    summary: "Pega aquí el resumen del análisis que te da Claude.",
    picks: [
      {
        label: "Apuesta A",
        tag: "Segura",
        selections: ["México gana o empata"],
        probability: 78,
        outcome: "pending"            // "win" | "loss" | "pending"
      },
      {
        label: "Apuesta B",
        tag: "Arriesgada",
        selections: ["México gana o empata", "Over corners 7.5", "Over goles totales 1.5"],
        probability: 55,
        outcome: "pending"
      }
    ]
  }
}
```

Pega el análisis que Claude te da en el chat directamente en `summary`, `probability` y `selections`. No necesitas tocar nada más — el sitio se actualiza solo al recargar.

## 📊 Actualizar el contador general

En el mismo archivo, arriba está el objeto `STATS` — actualízalo cuando quieras refrescar el contador de aciertos:

```js
const STATS = {
  totalMatches: 12,
  correctPicks: 11,
  accuracy: 91.6,
  lastUpdated: "2026-06-29"
};
```

## 🔮 Mejoras futuras (cuando quieras automatizar)

- Conectar una API de Claude con tu propia API key para generar el análisis automáticamente en vez de copiar/pegar.
- Conectar una API de datos deportivos en vivo (ej. API-Football) para resultados automáticos.
- Sistema de cuenta/login para que cada usuario guarde sus apuestas modificadas.

Por ahora todo es manual y 100% gratis de alojar.
