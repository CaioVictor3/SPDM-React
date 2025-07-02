import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

// Recebe a lista de produtos e a função de deletar
function ProductList({ products, onDeleteProduct }) {
  if (products.length === 0) {
    return (
      <ul className={styles.productList}>
        <li className={styles.emptyMessage}>Nenhum produto cadastrado.</li>
      </ul>
    );
  }

  return (
    <ul className={styles.productList}>
      {products.map((produto) => (
        <ProductCard
          key={produto.id} // Use um ID único se tiver, senão o nome ou índice
          product={produto}
          onDelete={() => onDeleteProduct(produto.id)} // Passa a função para o card
        />
      ))}
    </ul>
  );
}

export default ProductList;