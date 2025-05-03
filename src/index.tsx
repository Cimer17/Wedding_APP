import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Подключаем Tailwind CSS через CDN
const tailwindCSS = document.createElement("script");
tailwindCSS.src = "https://cdn.tailwindcss.com";
tailwindCSS.defer = true;
document.head.appendChild(tailwindCSS);

// Добавляем конфигурацию Tailwind
const tailwindJSLOCAL = document.createElement("script");
tailwindJSLOCAL.textContent = `
  window.addEventListener("load", () => {
    tailwind.config = {
      content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx,html}",
      ],
      theme: {
        extend: {
          fontFamily: {
            foglihten: ['FoglihtenNo06', 'sans-serif'],
            zen: ['"Zen Antique Soft"', 'sans-serif'],
            sans: ['Arial', 'sans-serif'],
          },
          colors: {
            'custom-green': {
              100: '#B9C49C',
              300: '#A5B183',
              500: '#829159',
              700: '#7C8C52',
              900: '#D6A26E',
            },
            'custom-black-green': '#75804E'
          },
          boxShadow: {
            'custom-shadow': '15px 15px 6px rgba(0, 0, 0, 0.25)',
          },
          keyframes: {
            fadeInScale: {
              '0%': { opacity: '0', transform: 'scale(0.95)' },
              '100%': { opacity: '1', transform: 'scale(1)' },
            }
          },
          animation: {
            fadeInScale: 'fadeInScale 0.3s ease-out forwards',
          }
        }
      },
      plugins: [],
    };
  });
`;
tailwindJSLOCAL.defer = true;
document.head.appendChild(tailwindJSLOCAL);

// Подключаем Flowbite CSS для дополнительных стилей
const flowbiteCSS = document.createElement("link");
flowbiteCSS.rel = "stylesheet";
flowbiteCSS.href = "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css";
document.head.appendChild(flowbiteCSS);

// Подключаем Flowbite JS для функционала (например, dropdowns, modals)
const flowbiteScript = document.createElement("script");
flowbiteScript.src = "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js";
flowbiteScript.defer = true;
document.body.appendChild(flowbiteScript);

// Рендерим React-приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
