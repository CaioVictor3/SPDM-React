import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import styles from './HomePage.module.css';
import { useAuth } from '../context/AuthContext'; // Importa o hook de autenticação

function HomePage() {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Pega a função de logout do contexto

  // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState([]);

  // useEffect para carregar os dados do localStorage QUANDO a página monta
  useEffect(() => {
    // Adicionamos IDs únicos aos produtos para o React gerenciar melhor a lista
    const storedProducts = (JSON.parse(localStorage.getItem('produtos')) || []).map(
      (p, index) => ({ ...p, id: index }) // O ID é o próprio índice no array
    );
    setProducts(storedProducts);
  }, []); // O array vazio `[]` garante que isso rode apenas uma vez

  // Função para deletar um produto
  const handleDeleteProduct = (productId) => {
    // Filtra o produto a ser removido do estado local
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);

    // Remove o ID antes de salvar de volta no localStorage para manter o formato original
    const productsToStore = updatedProducts.map(({ id, ...rest }) => rest);
    localStorage.setItem('produtos', JSON.stringify(productsToStore));
  };

  return (
    <>
      <main className={styles.main}>
        {/* Você pode adicionar um header com a barra de pesquisa aqui se desejar */}
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