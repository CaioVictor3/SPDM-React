import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import logoImage from '../assets/images/Logo.png'; 
import { useAuth } from '../context/AuthContext.jsx';

function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setError('');

    const success = login(email, password);
    if (!success) {
      setError('Email ou senha inválidos.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>
        <div className={styles.fotoLogo}>
          <img src={logoImage} alt="Logo SPDM" />
        </div>
        {error && (
          <ul className={styles.validacao}>
            <li>{error}</li>
          </ul>
        )}
        <form onSubmit={handleLogin} className={styles.form} noValidate>
          <h1>LOGIN</h1>
          <div className={styles.camposinput}>
            <div className={styles.inputemail}>
              <label htmlFor="email">Digite seu email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputsenha}>
              <label htmlFor="senha">Digite sua senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.botaoEntrar}>
            <button type="submit">Entrar</button>
          </div>
          <div className={styles.opcoes}>
            <button type="button">Esqueceu sua senha</button>
            <button type="button">Criar conta</button>
          </div>
        </form>
      </div>
      <footer className={styles.footer}>
        <p>&copy; SPDM</p>
      </footer>
    </div>
  );
}

export default LoginPage;