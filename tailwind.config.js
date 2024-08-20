/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-1': '#292F36',
        'bg-2': '#1A1E23',
        'brand-1': '#12F7D6',
        'brand-2': '#98FAEC',
        'grey': '#43454D',
        'white': '#FFFFFF',
        'html': '#E54F26',
        'css': '#0C73B8',
        'js': '#E7A020',
        'react': '#28A9E0',
      },
      boxShadow: {
        'custom': '-4px -4px 2px 0px #12F7D6',
      },
      backgroundImage: {
        'coding': "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D')",
        'black-n-white': "url('https://www.lifewire.com/thmb/FLUx7EC-9Zrv7aMQuH1qmM5o7Ww=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-binary-and-how-does-it-work-4692749-1-1eaec2e636424e71bb35419ef8d5005b.png')",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-U': {
          fontSize: '117px',
          lineHeight: '134px',
          fontWeight: '400',
        },
        '.H1-U': {
          fontSize: '64px',
          lineHeight: '72px',
          fontWeight: '400',
        },
        '.H2-U': {
          fontSize: '32px',
          lineHeight: '36px',
          fontWeight: '400',
        },
        '.Button-U': {
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: '400',
        },
        '.Article-U': {
          fontSize: '16px',
          lineHeight: '32px',
          fontWeight: '300',
        },
        '.Para-U': {
          fontSize: '16px',
          lineHeight: '18px',
          fontWeight: '300',
        },
        '.Label-U-M': {
          fontSize: '14px',
          lineHeight: '16px',
          fontWeight: '500',
        },
        '.Label-U-L': {
          fontSize: '14px',
          lineHeight: '16px',
          fontWeight: '300',
        },
        '.Button': {
          fontSize: '48px',
          lineHeight: '62px',
          fontWeight: '500',
        }, //also for Number-M
        '.H2-M': {
          fontSize: '32px',
          lineHeight: '42px',
          fontWeight: '500',
        },// also for Logo-M 
        '.Menu-M': {
          fontSize: '24px',
          lineHeight: '22px',
          fontWeight: '400',
        },
        '.Media-M': {
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: '400', 
        }, // also for Para-M
        '.Code-M': {
          fontSize: '14px',
          lineHeight: '18px',
          fontWeight: '400',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}

