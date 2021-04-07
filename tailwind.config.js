module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
          a: {
            color: '#A78BFA',
            '&:hover': {
              color: '#A78BFA',
            },
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.gray.300'),
          blockquote: {
            color: theme('colors.gray.300'),
          },
          a: {
            color: '#A78BFA',
            '&:hover': {
              color: '#A78BFA',
            },
          },
          svg: {
            color: theme('colors.gray.100')
          },

          h1: {
            color: theme('colors.gray.300'),
          },
          h2: {
            color: theme('colors.gray.300'),
          },
          h3: {
            color: theme('colors.gray.300'),
          },
          h4: {
            color: theme('colors.gray.300'),
          },
          h5: {
            color: theme('colors.gray.300'),
          },
          h6: {
            color: theme('colors.gray.300'),
          },

          strong: {
            color: theme('colors.gray.300'),
          },

          code: {
            color: theme('colors.gray.300'),
          },

          figcaption: {
            color: theme('colors.gray.500'),
          },
        },
      },
    }),
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require(`@tailwindcss/typography`)
  ]
}