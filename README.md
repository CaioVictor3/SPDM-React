![Versão](https://img.shields.io/badge/version-1.0.0-blue)
![Licença](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Este é um projeto de um sistema de gerenciamento de produtos (CRUD - Create, Read, Delete) desenvolvido como parte de um processo de migração de uma aplicação feita em HTML, CSS e JavaScript puros para a biblioteca React. A aplicação permite autenticação de usuários, cadastro, listagem e exclusão de produtos, utilizando o `LocalStorage` do navegador como forma de persistência de dados.

## ✨ Funcionalidades

- [x] **Autenticação de Usuários:** Sistema de login com usuários pré-determinados.
- [x] **Rotas Protegidas:** Apenas usuários autenticados podem acessar as páginas de produtos.
- [x] **Listagem de Produtos:** Tela inicial que exibe todos os produtos cadastrados.
- [x] **Cadastro de Produtos:** Formulário para adicionar novos produtos à lista.
- [x] **Exclusão de Produtos:** Funcionalidade para remover produtos da lista.
- [x] **Persistência de Dados:** Todos os dados de produtos e o estado de login são salvos no `LocalStorage` do navegador, persistindo entre sessões.
- [x] **Interface Responsiva:** Layout adaptado para diferentes tamanhos de tela.

## 🚀 Tecnologias Utilizadas

- **React.js:** Biblioteca principal para a construção da interface de usuário.
- **Vite:** Ferramenta de build e servidor de desenvolvimento rápido.
- **React Router DOM:** Para gerenciamento de rotas e navegação (Single Page Application).
- **React Context API:** Para gerenciamento do estado global de autenticação.
- **CSS Modules:** Para estilização de componentes de forma escopada e organizada.

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- **Node.js:** Versão 18.x ou superior.
- **NPM** ou **Yarn:** Gerenciador de pacotes.

### Passos

1.  **Clone o repositório** (ou certifique-se de estar na pasta do projeto que já possui):
    ```bash
    # Se estivesse no GitHub, seria algo assim:
    # git clone [https://github.com/seu-usuario/react-sdpm.git](https://github.com/seu-usuario/react-sdpm.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd React-SDPM
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse a aplicação:**
    Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) (ou a porta que você configurou).

## 🔑 Credenciais para Login

Para acessar o sistema, utilize um dos seguintes usuários pré-configurados no código:

- **Email:** `julian@gmail.com`
- **Senha:** `12345678`

ou

- **Email:** `caio@gmail.com`
- **Senha:** `12345678`

## 📁 Estrutura do Projeto

A estrutura de pastas principal do projeto está organizada da seguinte forma:

/src
|-- /assets         # Imagens e outros recursos estáticos
|-- /components     # Componentes reutilizáveis (Footer, ProductCard, etc.)
|-- /context        # Contexto de Autenticação (AuthContext)
|-- /pages          # Componentes de página (HomePage, LoginPage, etc.)
|-- App.jsx         # Roteador principal da aplicação
|-- main.jsx        # Ponto de entrada da aplicação React
|-- index.css       # Estilos globais