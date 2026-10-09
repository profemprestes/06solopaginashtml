# 🤖 AI Agent Guidelines — Envíos DosRuedas (`06solopaginashtml`)

Este documento establece las pautas, convenciones y arquitectura que todos los agentes de Inteligencia Artificial (y desarrolladores) deben seguir al inspeccionar, modificar o ampliar este repositorio.

---

## 📌 Visión General del Proyecto

* **Nombre del Proyecto:** Envíos DosRuedas — Catalog & Design System
* **Propósito:** Catálogo modular de landing pages y componentes UI para servicio de mensajería y logística urbana en Mar del Plata, Argentina.
* **Stack Tecnológico:** HTML5 Semántico, CSS3 Vanilla (con Design Tokens y CSS Variables), JavaScript Vanilla (ES6+). No se utilicen frameworks pesados (React/Vue/Angular/Tailwind) salvo solicitud expresa del usuario.

---

## 📂 Estructura de Directorios y Organización

```text
06solopaginashtml/
├── paginas_separadas/             # Directorio raíz del catálogo web
│   ├── index.html                 # Catalog Hub e índice navegable principal
│   ├── shared/css/design-tokens.css # Fuente de verdad para estilos globales y variables
│   ├── public/                    # Assets compartidos (imágenes WebP/PNG, SVGs, tarjetas)
│   └── <nombre_modulo>/           # 14 Carpetas de módulo (home, cotizar, contacto, etc.)
│       ├── index.html             # Previsualización / wrapper de sección
│       ├── <nombre-modulo>.html   # Página consolidada completa
│       ├── seccion-1.html ...     # Snippets modulares independientes
│       ├── styles.css             # Estilos específicos del módulo
│       └── script.js              # Lógica interactiva Vanilla JS
```

---

## 🛠️ Reglas y Convenciones de Código para Agentes

### 1. Modularidad y Sincronización Doble
* **Regla de oro:** Cada módulo dentro de `paginas_separadas/<modulo>/` posee tanto archivos de sección individual (`seccion-1.html`, `seccion-2.html`, etc.) como la página consolidada (`<modulo>.html`).
* **Sincronización:** Si un agente modifica la estructura o textos de una sección en `seccion-X.html`, **debe verificar y aplicar** el mismo cambio en la página consolidada correspondiente (ej. `home.html` o `cotizar.html`) para mantener consistencia.

### 2. Estilos y Design Tokens
* **Variables CSS Globales:** Siempre reutilizar las variables declaradas en `paginas_separadas/shared/css/design-tokens.css`:
  * **Colores Marca:** `var(--color-brand-blue-500)`, `var(--color-brand-yellow-400)`, `var(--color-brand-blue-50)`, etc.
  * **Border Radius:** `var(--radius-md)`, `var(--radius-xl)`, `var(--radius-2xl)`.
  * **Sombras:** `var(--shadow-sm)`, `var(--shadow-md)`, `var(--shadow-float)`, `var(--shadow-antigravity-deep)`.
* **Clases de Botones y Badges:** Utilizar las utilidades globales (`.btn-primary-yellow`, `.btn-secondary-blue`, `.pill-badge`, `.live-badge`, `.whatsapp-pill`).
* **Estilos Específicos:** Agregar reglas particulares únicamente en el `styles.css` del módulo respectivo sin sobrescribir destructivamente los tokens globales.

### 3. Rutas Relativas e Imágenes
* **Ruta de Assets:** Toda imagen o recurso en `public/` debe referenciarse con rutas relativas desde el subdirectorio del módulo:
  * Ejemplo correcto desde `paginas_separadas/home/`: `../public/heroes/banner.webp` o `../public/cards/card_mapa.webp`.
  * Ejemplo correcto desde `paginas_separadas/`: `./public/...`.
* **Formato Preferido:** Preferir imágenes en formato `.webp` o `.svg` para optimización de carga y rendimiento.

### 4. JavaScript Vanilla
* Evitar dependencias externas innecesarias. Usar manipulación directa del DOM (`document.querySelector`, `addEventListener`).
* Mantener funciones puras y modularizadas dentro de `script.js` de cada carpeta.

### 5. Idioma y Codificación
* Todo el contenido visible debe estar escrito en **Español (Argentina)** adecuado al contexto local de Mar del Plata (ej. "Cotizá", "Envíos en MDP", "Cadetería").
* Codificación de archivos en **UTF-8** estricto (`<meta charset="UTF-8">`).

---

## 🔍 Verificación y Calidad

Antes de dar por completada una tarea:
1. Verificar que las rutas de los archivos CSS e imágenes sigan siendo válidas.
2. Asegurar que los tags HTML5 estén correctamente cerrados y anidados.
3. No eliminar comentarios ni estructuras existentes sin justificación.
