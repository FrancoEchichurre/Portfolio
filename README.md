Necesito reorganizar los estilos del proyecto usando la arquitectura 7-1 de Sass/SCSS.

ESTRUCTURA A CREAR:

src/
├── styles/
│   ├── abstracts/
│   │   ├── _variables.scss      # Variables: colores urbanos, fuentes, tamaños
│   │   ├── _mixins.scss          # Mixins: efectos graffiti, sombras, etc.
│   │   ├── _functions.scss       # Funciones útiles
│   │   └── _index.scss           # Export de abstracts
│   │
│   ├── base/
│   │   ├── _reset.scss           # Reset/normalize CSS
│   │   ├── _typography.scss      # Fuentes urbanas (Rubik Mono One, Bebas Neue, etc.)
│   │   ├── _animations.scss      # Keyframes: drip, spray, glitch effects
│   │   └── _index.scss           # Export de base
│   │
│   ├── components/
│   │   ├── _buttons.scss         # Botones estilo sticker/spray
│   │   ├── _cards.scss           # Tarjetas de proyectos tipo poster
│   │   ├── _forms.scss           # Inputs y formularios
│   │   ├── _badges.scss          # Badges de tecnologías
│   │   ├── _stickers.scss        # Efectos tipo sticker/pegatina
│   │   └── _index.scss           # Export de components
│   │
│   ├── layout/
│   │   ├── _navbar.scss          # Navbar urbano sticky
│   │   ├── _hero.scss            # Hero section con graffiti
│   │   ├── _sections.scss        # Secciones generales
│   │   ├── _footer.scss          # Footer estilo urbano
│   │   ├── _grid.scss            # Sistema de grid
│   │   └── _index.scss           # Export de layout
│   │
│   ├── pages/
│   │   ├── _home.scss            # Estilos específicos del home
│   │   └── _index.scss           # Export de pages
│   │
│   ├── themes/
│   │   ├── _dark.scss            # Modo oscuro (noche urbana) - DEFAULT
│   │   ├── _light.scss           # Modo claro (día en la calle)
│   │   └── _index.scss           # Export de themes
│   │
│   ├── vendors/
│   │   └── _index.scss           # Librerías externas si las hay
│   │
│   └── main.scss                 # Archivo principal que importa todo

CONFIGURACIÓN DEL main.scss:
Debe importar en este orden:
1. abstracts
2. vendors
3. base
4. layout
5. components
6. pages
7. themes

VARIABLES URBANAS A INCLUIR EN _variables.scss:
- Colores: urban-dark, urban-brick, neon-cyan, neon-yellow, neon-magenta
- Fuentes: Rubik Mono One, Bebas Neue, Alfa Slab One, Permanent Marker
- Texturas: brick-wall, concrete, asphalt
- Spacing: sistema basado en 8px
- Breakpoints: mobile, tablet, desktop

MIXINS URBANOS A INCLUIR EN _mixins.scss:
- graffiti-text: efecto texto tipo graffiti con sombras
- drip-effect: efecto goteo de pintura
- sticker-card: efecto tarjeta tipo sticker pegado
- spray-shadow: sombra difusa tipo spray
- neon-glow: efecto brillo neón
- brick-texture: textura de ladrillo

ANIMACIONES EN _animations.scss:
- spray-reveal: animación de aparición tipo spray
- drip: animación de goteo
- glitch: efecto glitch sutil
- float: flotación suave
- peel-sticker: efecto despegar sticker en hover

Por favor, migra todos los estilos actuales del proyecto a esta estructura manteniendo la funcionalidad existente. Asegúrate de que todo siga funcionando correctamente después de la reorganización.