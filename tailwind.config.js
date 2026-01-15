/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'urban-dark': '#1a1a1a',
                'urban-brick': '#3d2f2f',
                'neon-cyan': '#00ff88',
                'neon-yellow': '#ffd700',
                'neon-magenta': '#ff006e',
                'spray-white': '#f0f0f0',
            },
            fontFamily: {
                'display': ['"Rubik Mono One"', '"Bebas Neue"', '"Alfa Slab One"', 'cursive'],
                'body': ['"Inter"', '"Roboto"', 'sans-serif'],
                'graffiti': ['"Permanent Marker"', 'cursive'],
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'drip': 'drip 2s infinite',
            },
            backgroundImage: {
                'brick-wall': "url('https://images.unsplash.com/photo-1533038590317-7f4d37a28348?q=80&w=2699&auto=format&fit=crop')", // Placeholder
                'concrete': "url('https://images.unsplash.com/photo-1518117625-72251a1ca4d6?q=80&w=2574&auto=format&fit=crop')", // Placeholder
            }
        },
    },
    plugins: [],
}
