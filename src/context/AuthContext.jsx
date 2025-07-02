import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);


const usuariosPermitidos = [
  { email: "julian@gmail.com", senha: "12345678" },
  { email: "caio@gmail.com", senha: "12345678" },
  { email: "windson@gmail.com", senha: "12345678" },
];


export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carregamento

 
  useEffect(() => {
    const loggedInUser = localStorage.getItem('isAuthenticated');
    if (loggedInUser === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false); 
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

  
  if (loading) {
    return null; 
  }

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth() {
  return useContext(AuthContext);
}