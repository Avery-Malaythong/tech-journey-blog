/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [
            "luxury",
            {
                 "mytheme": {

                    "primary": "#e7e5e4",
          
                    "secondary": "#152747",
                             
                    "accent": "#513448",
                             
                    "neutral": "#331800",
                             
                    "base-100": "#09090b",
                             
                    "info": "#1d4ed8",
                             
                    "success": "#4d7c0f",
                             
                    "warning": "#e3d664",
                             
                    "error": "#991b1b",
                },
            },],
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                hop: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(3px)' },
                    '100%': { transform: 'translateY(-3px)' },
                },
            },
            animation: {
                hop: 'hop 300ms infinite'
            }
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
