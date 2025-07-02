import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductFormPage.module.css';
import logoImage from '../assets/images/Logo.png';
import uploadImage from '../assets/images/upload.png';

function ProductFormPage() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    nome: '',
    descricao: '',
    quantidade: '',
    preco: '',
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const newErrors = [];
    if (!product.nome.trim()) newErrors.push("O nome é obrigatório.");
    if (!product.quantidade.trim()) newErrors.push("A quantidade é obrigatória.");
    if (!product.preco.trim()) newErrors.push("O preço é obrigatório.");

    setErrors(newErrors);


    if (newErrors.length === 0) {

      const produtosAtuais = JSON.parse(localStorage.getItem("produtos")) || [];


      const novoProduto = {
        nome: product.nome.trim(),
        descricao: product.descricao.trim(),
        quantidade: parseInt(product.quantidade, 10),
        preco: parseFloat(product.preco),
      };

      produtosAtuais.push(novoProduto);

      localStorage.setItem("produtos", JSON.stringify(produtosAtuais));


      navigate('/');
    }
  };

  return (
    <>
      <header className={styles.header}>
        <img src={logoImage} alt="Logo da empresa" />
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Cadastrar Produtos</h1>
          {errors.length > 0 && (
            <ul className={styles.errors}>
              {errors.map((error, index) => <li key={index}>{error}</li>)}
            </ul>
          )}
          <form onSubmit={handleSubmit} className={styles.form}>
            {}
            <div className={styles.descriptionRow}>
              <span className={styles.uploadIconContainer}>
                <img src={uploadImage} alt="Upload" />
              </span>
              <textarea
                placeholder="Descrição"
                name="descricao"
                value={product.descricao}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={styles.inputsRow}>
              <input
                placeholder="Nome"
                type="text"
                name="nome"
                value={product.nome}
                onChange={handleChange}
              />
              <input
                placeholder="Quantidade"
                type="number"
                name="quantidade"
                min="0"
                value={product.quantidade}
                onChange={handleChange}
              />
              <input
                placeholder="Preço"
                type="number"
                name="preco"
                min="0.01"
                step="0.01"
                value={product.preco}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formButtons}>
              <button type="button" onClick={() => navigate(-1)}>
                Cancelar
              </button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </section>
        <footer className={styles.footer}>
          <p>&copy; SPDM</p>
        </footer>
      </main>
    </>
  );
}

export default ProductFormPage;