//@ts-ignore
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
//auth-bg.png
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        auth_bg: 'url(../src/assets/image/auth-bg.png)',
      },
      spacing: {
        hug: '86px',
        '22px': '22px',
      },
      fontSize: {
        md: '16px',
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        'duplicate-san': 'Duplicate Sans',
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      colors: {
        // gray
        primary: '#554BDB',
        'gray-25': '#FCFCFD',
        'gray-30': '#667085',
        'main-surface': '#F8F8F8',

        // success
        'success-25': '#d1fadf',
        'success-50': '#ECFDF3',
        'success-100': '#D1FADF',
        'success-500': '#12B76A',
        'success-600': '#039855',
        'success-700': '#027A48',
        'success-800': '#05603a',

        // primary
        'primary-700': '#00060E',
        'primary-50': '#E7E7E7',
        'primary-600': '#000712',

        // error
        'error-50': '#fef3f2',
        'error-25': '#FFFBFA',
        'error-100': '##FEE4E2',
        'error-300': '#FDA29B',
        'error-600': '#D92D20',
        'error-700': '#B42318',

        // blue-gray
        'blue-gray-50': '#F8F9FC',
        'blue-gray-700': '#363F72',
        'blue-gray-500': '#4E5BA6',
        'blue-gray-600': '#3E4784',

        // warning
        'warning-50': '#FFFCF5',
        'warning-200': '#FEDF89',
        'warning-300': '#FEC84B',
        'warning-500': '#F79009',
        'warning-700': '#B54708',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('tailwindcss-inner-border'),
  ],
};
