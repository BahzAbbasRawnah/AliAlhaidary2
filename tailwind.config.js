/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-rotate-hotel': "url('/src/assets/img/bg.png')",
      },
      colors: {
        'primary-bg': 'var(--primary-bg-color)',
        'primary-text': 'var(--primary-text-color)',
        'primary-border': 'var(--primary-border-color)',
        'secondary-bg': 'var(--secondary-bg-color)',
        'secondary-text': 'var(--secondary-text-color)',
        'text-color': 'var(--text-color)',

        'third-bg': 'var(--third-bg-color)',
        'third-text': 'var(--third-text)',
        'white-bg': 'var(--primary-bg-olor)',
        'yellow-bg': 'var(--yellow-bg-color)',
        'primary-bg-card': 'var(--primary-bg-color)',
        'light-blue': 'var(--light-blue)',
        'input': 'var(--input)',
        'gray-bg': 'var(--gray-bg)',
        'red-10': 'var(--red-10)',
        'green-10': 'var(--green-10)',
        'yello-10': 'var(--yello-10)',
        'pink-10': 'var(--pink-10)',
        'green-bg': 'var(--green-bg)',
      },
      
    },
  },
  plugins: [],
}