import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Cria o Contexto
const AuthContext = createContext(null);

// Dados dos usuários permitidos
const usuariosPermitidos = [
  { email: "julian@gmail.com", senha: "12345678" },
  { email: "caio@gmail.com", senha: "12345678" },
  { email: "windson@gmail.com", senha: "12345678" },
];

// Cria o Provedor do Contexto
export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Efeito que roda uma vez quando o app carrega
  useEffect(() => {
    const loggedInUser = localStorage.getItem('isAuthenticated');
    if (loggedInUser === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false); // Finaliza o carregamento após verificar
  }, []);

  const login = (email, password) => {
    const usuarioValido = usuariosPermitidos.some(
      (user) => user.email === email && user.senha === password
    );

    if (usuarioValido) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      navigate('/');
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Não renderiza nada enquanto verifica o localStorage para evitar a tela em branco
  if (loading) {
    return null; 
  }

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook customizado para facilitar o uso do contexto
export function useAuth() {
  return useContext(AuthContext);
}