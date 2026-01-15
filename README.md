<<<<<<< HEAD
Necesito que reconstruyas COMPLETAMENTE mi portfolio desde cero con una estética de GRAFFITI y STREET ART auténtica.

INFORMACIÓN:
- Nombre: Franco Echichurre
- Rol: Desarrollador Full Stack Certificado
- Stack: React, Node.js, MongoDB, Express, HTML5, CSS3, JavaScript, Tailwind
- En proceso: Laravel
- Proyectos: 3 (Gym Zone, HolistiCourse, Urban Kicks Store)
- Experiencia: Freelancer

ARQUITECTURA DE ESTILOS - MANTENER ESTRUCTURA 7-1:
Conserva la arquitectura 7-1 de SCSS que ya está implementada:

src/styles/
├── abstracts/ (variables, mixins, functions)
├── base/ (reset, typography, animations)
├── components/ (buttons, cards, forms, badges)
├── layout/ (navbar, hero, sections, footer)
├── pages/ (home)
├── themes/ (dark, light)
└── main.scss

IMPORTANTE: 
- Mantén index.css separado SOLO para Tailwind
- Todo SCSS personalizado en estructura 7-1
- main.tsx importa: './index.css' y './styles/main.scss'

REQUISITO CRÍTICO: PÁGINA COMPACTA
- Máximo 4-5 pantallas de scroll total
- Secciones condensadas
- Sin espacios vacíos gigantes
- Todo lo importante visible rápido

ESTÉTICA GRAFFITI AUTÉNTICA:
- Inspiración: Arte callejero real, muros grafiteados, cultura hip-hop
- Paleta:
  * Fondos: Ladrillo (#8b4513, #a0522d), Concreto (#4a4a4a, #2f2f2f), Negro (#0a0a0a)
  * Colores spray: Rojo (#ff3333), Azul (#3366ff), Verde (#33ff33), Amarillo (#ffcc00), Blanco (#ffffff)
  * Acentos: Naranja (#ff6600), Morado (#9933ff), Rosa (#ff66cc)
- NO usar neón, NO usar cyan/magenta corporativos
- SÍ usar colores de spray paint reales

TEXTURAS Y FONDOS:
- Hero: Pared de ladrillo con textura REAL
- Secciones alternas: Concreto, metal oxidado, asfalto
- Usar imágenes de Unsplash:
  * "brick wall texture"
  * "concrete wall urban"
  * "graffiti background"
- Overlay oscuro sutil para legibilidad

ESTRUCTURA COMPACTA:

1. HERO (100vh) - EL MURO PRINCIPAL:
   - Fondo: Pared de ladrillo grafiteada
   - Mi nombre "FRANCO ECHICHURRE" estilo GRAFFITI BUBBLE LETTERS:
     * Letras gordas y redondeadas
     * Outline grueso blanco/negro
     * Sombra 3D profunda
     * Colores vivos (rojo, azul, amarillo combinados)
     * Efecto de spray con bordes irregulares
   - Subtítulo en STENCIL style: "FULL STACK DEVELOPER"
   - Tagline: "// Código limpio, estilo urbano"
   - Goteos de pintura cayendo desde las letras
   - 2 botones tipo STICKER pegado con cinta adhesiva:
     * "VER OBRAS" (sticker rojo)
     * "CONTACTO" (sticker azul)
   - Efecto de salpicaduras de spray en el fondo

2. ABOUT + SKILLS (60vh):
   - Título: "SOBRE EL ARTISTA" en graffiti wild style
   - Fondo: Concreto con tags pequeños decorativos
   
   Layout 2 columnas:
   
   IZQUIERDA - About:
   - Foto con marco tipo POLAROID + cinta adhesiva amarilla
   - Párrafo corto (4-5 líneas)
   - Badge "FREELANCER" tipo sticker graffiti
   
   DERECHA - Skills como WALL OF STICKERS:
   - Grid de stickers superpuestos con rotaciones aleatorias
   - Cada tech = sticker colorido con sombra
   - React (azul), Node (verde), MongoDB (verde oscuro), etc.
   - Laravel con sticker "EN PROGRESO" tipo "WET PAINT"
   - Efecto despegar al hover

3. PROYECTOS (80vh) - "MIS OBRAS":
   - Título: "PROYECTOS" en letras tipo tag
   - Grid 3 columnas (1 fila)
   - Cada proyecto como POSTER CALLEJERO pegado en muro:
   
   GYM ZONE:
   - Diseño: Poster deportivo urbano
   - Esquinas con cinta adhesiva 3D
   - Borde rasgado/irregular
   - Tag: "WEB SITE"
   
   HOLISTICOURSE:
   - Diseño: Flyer con estética zen pero urbana
   - Colores tierra + spray
   - Tag: "EDUCACIÓN"
   
   URBAN KICKS:
   - Diseño: Estilo sneaker culture
   - Colores vibrantes tipo tienda de zapatillas
   - Tag: "E-COMMERCE"
   
   Características:
   - Screenshot del proyecto
   - Título en tipografía bold
   - Tags de tech como spray tags pequeños
   - Botones "DEMO" y "CODE" tipo lata de spray
   - Hover: Se levanta del muro con sombra 3D

4. EXPERIENCIA (40vh):
   - Fondo: Metal oxidado o pared grafiteada
   - Título: "MI HISTORIA" en stencil
   - Timeline vertical con línea irregular pintada
   - Items como POST-IT o notas con cinta
   - Certificado con marco tipo póster enmarcado

5. CONTACTO (60vh) - "ESCRÍBEME":
   - Título: "HAGAMOS ALGO" en graffiti bold
   - Fondo: Pared oscura con tags
   - Formulario con inputs tipo sticker editable:
     * Bordes irregulares
     * Fondo semi-transparente
     * Sombras profundas
   - Botón enviar: LATA DE SPRAY grande clickeable
   - Icons sociales como LATAS DE SPRAY:
     * GitHub = lata negra
     * LinkedIn = lata azul
     * Email = lata roja
   - Efecto spray al hover

6. FOOTER (20vh):
   - Fondo: Asfalto negro con texture
   - Tags pequeños decorativos
   - "CODED WITH ❤️ BY FRANCO" en tipografía stencil
   - Copyright + links

NAVBAR:
- Fondo: Negro semi-transparente con blur
- Logo: Mis iniciales "FE" en tag style
- Links con efecto spray paint al hover
- Sticky con sombra urbana

TIPOGRAFÍA GRAFFITI:
- Títulos grandes: Bebas Neue, Alfa Slab One (bold, impactante)
- Tags/acentos: Permanent Marker (graffiti handstyle)
- Stencil: Oswald, Russo One (militar/urbano)
- Cuerpo: Inter (legible, contraste)

EFECTOS GRAFFITI:
- Goteos de pintura en títulos (CSS drip effect)
- Salpicaduras decorativas
- Bordes irregulares (no todo perfecto)
- Sombras profundas para 3D
- Rotaciones leves en stickers
- Texturas de papel arrugado
- Efecto de cinta adhesiva 3D

ANIMACIONES:
- Spray reveal al scroll
- Drip animation en títulos
- Sticker peel effect al hover
- Parallax sutil en fondos
- Partículas tipo spray paint

ELEMENTOS DECORATIVOS:
- Códigos QR falsos tipo street art
- Números de sección en spray
- Líneas divisoras irregulares pintadas
- Tags decorativos pequeños
- Manchas de pintura sutiles

RESPONSIVE:
- Mobile: Stack vertical, stickers más grandes
- Tablet: 2 columnas
- Desktop: Full layout

TECNOLOGÍA:
- React + TypeScript
- Tailwind CSS (index.css)
- SCSS 7-1 (estilos graffiti personalizados)
- Framer Motion
- Lucide React

PRIORIDAD:
- Que se VEA y SIENTA como arte callejero REAL
- Colores de spray paint auténticos
- Texturas de pared reales
- Corto y directo (4-5 pantallas)
- Personalidad urbana en cada elemento

NO INCLUIR:
- Colores neón corporativos
- Diseño limpio/minimalista
- Espacios blancos gigantes
- Animaciones lentas
- Estética "tech" genérica
