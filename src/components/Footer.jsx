import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <nav className={styles.navBottom}>
      <button>
        <i className="fas fa-house"></i>
        <span className={styles.buttonLabel}>Home</span>
      </button>
      <button>
        <i className="fas fa-bars"></i>
        <span className={styles.buttonLabel}>Relatórios</span>
      </button>
      <button>
        <i className="fas fa-cart-shopping"></i>
        <span className={styles.buttonLabel}>Carrinho</span>
      </button>
      <button>
        <i className="fas fa-user"></i>
        <span className={styles.buttonLabel}>Perfil</span>
      </button>
    </nav>
  );
}

export default Footer;