import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';


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
          key={produto.id} 
          product={produto}
          onDelete={() => onDeleteProduct(produto.id)} 
        />
      ))}
    </ul>
  );
}

export default ProductList;