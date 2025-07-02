import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import styles from './HomePage.module.css';
import { useAuth } from '../context/AuthContext'; 

function HomePage() {
  const navigate = useNavigate();
  const { logout } = useAuth(); 


  const [products, setProducts] = useState([]);

  
  useEffect(() => {
   
    const storedProducts = (JSON.parse(localStorage.getItem('produtos')) || []).map(
      (p, index) => ({ ...p, id: index }) 
    );
    setProducts(storedProducts);
  }, []); 

 
  const handleDeleteProduct = (productId) => {
    
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);

   
    const productsToStore = updatedProducts.map(({ id, ...rest }) => rest);
    localStorage.setItem('produtos', JSON.stringify(productsToStore));
  };

  return (
    <>
      <main className={styles.main}>
        {}
        <nav className={styles.navProdutos}>
          <div className={styles.headerContainer}>
            <h2>Produtos</h2>
            <button onClick={logout} className={styles.logoutButton}>Logout</button>
          </div>
          <div className={styles.navProdutosTop}>
            <button onClick={() => navigate('/cadastro-produtos')}>
              <i className="fas fa-add"></i>
            </button>
            <button><i className="fas fa-edit"></i></button>
            <button><i className="fas fa-trash"></i></button>
          </div>
          
          <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
        </nav>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;