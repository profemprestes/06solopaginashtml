# 🚴 Envíos DosRuedas — Design System & Catálogo de Páginas HTML (`paginas_separadas`)

Bienvenido al repositorio **06solopaginashtml**. Este proyecto contiene el sistema de diseño, componentes UI y catálogo modular de páginas web para **Envíos DosRuedas**, una empresa de logística urbana y mensajería en Mar del Plata, Argentina.

El repositorio está estructurado para permitir tanto la navegación rápida entre páginas completas como la reutilización modular de secciones HTML independientes.

---

## 📁 Estructura del Proyecto

```text
06solopaginashtml/
├── paginas_separadas/             # Directorio principal con todas las páginas y módulos
│   ├── index.html                 # Hub central / Navegador del Catálogo de Páginas
│   │
│   ├── shared/                    # Recursos compartidos del Design System
│   │   └── css/
│   │       └── design-tokens.css  # Variables CSS, colores de marca, tipografía y utilidades UI
│   │
│   ├── public/                    # Assets estáticos globales (imágenes, iconos, tarjetas, logos)
│   │   ├── assets/
│   │   ├── cards/
│   │   ├── elementos/
│   │   ├── generales/
│   │   ├── heroes/
│   │   └── iconos/
│   │
│   ├── home/                      # 1. Landing Page Principal
│   ├── cotizar/                   # 2. Cotizador / Calculadora de envíos MDP
│   ├── contacto/                  # 3. Formulario de Contacto
│   ├── enviosexpress/             # 4. Servicio de Envíos Express (3 HS)
│   ├── enviosflex/                # 5. Envíos Mercado Envíos Flex
│   ├── enviosemprendedores/       # 6. Planes para Emprendedores
│   ├── enviosfullfilment/         # 7. Servicio de Fulfillment y Depósito
│   ├── envioslowcost/             # 8. Envíos LowCost (24/48 HS)
│   ├── servicios_contrarrembolso/ # 9. Envíos con Cobro Contrarrembolso
│   ├── faq/                       # 10. Preguntas Frecuentes (FAQ)
│   ├── nosotros/                  # 11. Sobre Nosotros y Equipo
│   ├── redes/                     # 12. Hub de Redes Sociales y Publicaciones
│   ├── politica_privacidad/       # 13. Política de Privacidad
│   └── terminos_condiciones/      # 14. Términos y Condiciones
│
├── AGENTS.md                      # Guía y convenciones para Agentes de IA
├── .gitignore                     # Archivos excluidos del control de versiones Git
└── .aiexclude                     # Reglas de exclusión de contexto para asistentes IA
```

---

## 📑 Detalle de Módulos y Páginas (`paginas_separadas/`)

Cada carpeta de módulo dentro de `paginas_separadas/` sigue una estructura modular consistente:
* **Página Consolidada:** Archivo principal con la página completa (ej. `home/home.html`, `cotizar/cotizar.html`).
* **Secciones Modulares:** Archivos HTML independientes por cada sección (ej. `seccion-1.html`, `section-1-*.html`, `carrusel-redes.html`).
* **Estilos y Scripts:** Archivo `styles.css` con estilos específicos de la página y `script.js` con la interacción en JavaScript Vanilla.
* **Índice del Módulo:** Archivo `index.html` para previsualización directa.

### 🌐 Catálogo de las 14 Páginas

| # | Módulo (`Folder`) | Archivo Principal | Descripción del Contenido |
|---|-------------------|-------------------|---------------------------|
| 1 | `home` | `home.html` | Landing page principal con Hero interactivo, resumen de servicios, calculadora preview y testimonios. |
| 2 | `cotizar` | `cotizar.html` | Calculadora de tarifas en tiempo real según barrios de Mar del Plata y peso del paquete. |
| 3 | `contacto` | `contacto.html` | Formulario de consultas, datos de contacto, accesos rápidos a WhatsApp y mapa. |
| 4 | `enviosexpress` | `envios-express.html` | Presentación del servicio de mensajería urgente y cadetería con entrega en menos de 3 horas. |
| 5 | `enviosflex` | `envios-flex.html` | Logística especializada para e-commerce homologada con Mercado Envíos Flex. |
| 6 | `enviosemprendedores` | `envios-emprendedores.html` | Soluciones logísticas y tarifas preferenciales por volumen para tiendas online y emprendedores. |
| 7 | `enviosfullfilment` | `envios-fullfilment.html` | Servicio integral de almacenamiento, picking, packing y despacho desde depósito. |
| 8 | `envioslowcost` | `envios-low-cost.html` | Opción de mensajería económica programada en 24 a 48 horas. |
| 9 | `servicios_contrarrembolso` | `servicios-contrareembolso.html` | Servicio de entrega con cobro en efectivo en el destino y rendición garantizada. |
| 10 | `faq` | `faq.html` | Acordeón interactivo con respuestas a preguntas frecuentes de clientes y comercios. |
| 11 | `nosotros` | `nosotros.html` | Historia de Envíos DosRuedas, misión, visión, flota y equipo de trabajo. |
| 12 | `redes` | `redes.html` | Hub social con enlaces oficiales, feed de publicaciones y carrusel de redes. |
| 13 | `politica_privacidad` | `politica-de-privacidad.html` | Cláusulas de protección de datos personales y privacidad del usuario. |
| 14 | `terminos_condiciones` | `terminos-y-condiciones.html` | Términos legales, responsabilidades y condiciones del servicio de transporte. |

---

## 🎨 Sistema de Diseño (`shared/css/design-tokens.css`)

El archivo `paginas_separadas/shared/css/design-tokens.css` centraliza las variables de diseño del proyecto:
* **Paleta de Colores:** Variables `--color-brand-blue-*` (Azul principal) y `--color-brand-yellow-*` (Amarillo distintivo).
* **Tipografía:** Clases utilitarias como `.font-display`, `.font-subheading`, `.font-body`.
* **Componentes UI Reutilizables:**
  * Botones: `.btn-primary-yellow`, `.btn-secondary-blue`, `.btn-outline-ghost`.
  * Badges y Chips: `.pill-badge`, `.live-badge`, `.alert-badge`, `.whatsapp-pill`.
  * Sombras y Elevaciones: `--shadow-sm`, `--shadow-md`, `--shadow-float`, `--shadow-antigravity-deep`.

---

## 🚀 Cómo Ejecutar y Visualizar

1. **Previsualización Rápida:**
   Abre el archivo `paginas_separadas/index.html` directamente en cualquier navegador web. Utiliza este hub como panel navegable hacia todas las páginas del sistema.

2. **Servidor Local (Recomendado):**
   Para asegurar la carga correcta de todos los recursos y evitar restricciones de origen local (`file://`), puedes iniciar un servidor HTTP liviano:

   * **Con Python:**
     ```bash
     python -m http.server 8000
     ```
     Luego navega a `http://localhost:8000/paginas_separadas/`.

   * **Con VS Code:**
     Utiliza la extensión **Live Server** haciendo clic secundario en `paginas_separadas/index.html` -> *Open with Live Server*.

---

## 🧩 Reutilización Modular

Para reutilizar una sección específica en otro proyecto:
1. Copia el archivo HTML modular deseado (ej. `paginas_separadas/home/seccion-1.html`).
2. Vincula las variables globales agregando `shared/css/design-tokens.css` en el `<head>`.
3. Copia las clases correspondientes en el `styles.css` del módulo o importa la hoja de estilos de esa sección.
