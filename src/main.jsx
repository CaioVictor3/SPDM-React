import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importa o BrowserRouter para habilitar o roteamento
import { BrowserRouter } from 'react-router-dom';

// Importa o nosso provedor de autenticação
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* A ordem correta é BrowserRouter > AuthProvider > App */}
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);