/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  prefix: '',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  safelist: [
    'text-brand-primary',
    'text-accent-primary',
    'bg-accent-primary',
    'border-brand-border',
    'prose-lg',
    'prose-xl'
  ],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        brand: {
          primary: 'rgb(var(--color-brand-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-brand-secondary) / <alpha-value>)',
          border: 'rgb(var(--color-brand-border) / <alpha-value>)'
        },
        accent: {
          primary: 'rgb(var(--color-accent-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-accent-secondary) / <alpha-value>)'
        },
        state: {
          success: 'rgb(var(--color-state-success) / <alpha-value>)',
          error: 'rgb(var(--color-state-error) / <alpha-value>)'
        },
        background: {
          light: 'rgb(var(--color-background-light) / <alpha-value>)',
          dark: 'rgb(var(--color-background-dark) / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      maxWidth: {
        content: '72rem',
        prose: '65ch'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      boxShadow: {
         'brand': '0 4px 14px 0 rgba(38, 35, 39, 0.1)',
         'accent': '0 4px 14px 0 rgba(253, 184, 19, 0.2)'
       },
       ringColor: {
         'brand': 'rgb(var(--color-brand-primary) / 0.5)',
         'accent': 'rgb(var(--color-accent-primary) / 0.5)'
       },
       outlineColor: {
         'brand': 'rgb(var(--color-brand-primary))',
         'accent': 'rgb(var(--color-accent-primary))'
       },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.brand.secondary'),
            a: { 
              color: theme('colors.accent.primary'), 
              fontWeight: '600',
              '&:hover': {
                color: theme('colors.accent.secondary')
              }
            },
            h1: { color: theme('colors.brand.primary') },
            h2: { color: theme('colors.brand.primary') },
            h3: { color: theme('colors.brand.primary') },
            strong: { color: theme('colors.brand.primary') },
            blockquote: {
              color: theme('colors.brand.secondary'),
              borderLeftColor: theme('colors.accent.primary')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: { 
              color: theme('colors.accent.primary'),
              '&:hover': {
                color: theme('colors.accent.secondary')
              }
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.accent.primary')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-brand-primary': '38 35 39',
          '--color-brand-secondary': '125 120 119',
          '--color-brand-border': '193 185 188',
          '--color-accent-primary': '253 184 19',
          '--color-accent-secondary': '196 164 100',
          '--color-state-success': '59 110 68',
          '--color-state-error': '185 46 46',
          '--color-background-light': '248 249 250',
          '--color-background-dark': '38 35 39'
        },
        '*:focus-visible': {
          outline: `2px solid ${theme('colors.accent.primary')}`,
          outlineOffset: '2px'
        },
        '.focus-ring': {
          '@apply ring-2 ring-accent-primary ring-offset-2': {}
        }
      })
    }
  ],
  variants: {
    extend: {
      typography: ['dark']
    }
  }
}