import React from 'react';
import { createRoot } from 'react-dom/client'; // Імпортуємо createRoot
import './index.css';
import App from './App';
import { AppProvider } from './context'; // Провайдер контексту

// Отримуємо кореневий елемент
const container = document.getElementById('root');
const root = createRoot(container); // Створюємо root

// Рендеримо ваш додаток
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);