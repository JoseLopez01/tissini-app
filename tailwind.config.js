module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'login-background': `url('https://mitienda.moda/img/login-desktop.695c98cc.jpg')`,
        'logo-png': `url('https://mitienda.moda/img/logo.e38c8b41.png')`,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
