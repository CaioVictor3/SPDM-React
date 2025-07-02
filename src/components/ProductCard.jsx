import React from 'react';
import styles from './ProductCard.module.css';


function ProductCard({ product, onDelete }) {
  return (
    <li className={styles.card}>
      <div>
        <strong>{product.nome}</strong>
        <br />
        {product.descricao}
        <br />
        Qtd: {product.quantidade}
        <br />
        R$ {parseFloat(product.preco).toFixed(2)}
      </div>
      <button className={styles.btnExcluir} onClick={onDelete}>
        <i className="fas fa-trash"></i> Excluir
      </button>
    </li>
  );
}

export default ProductCard;