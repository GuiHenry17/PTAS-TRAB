# 📚 Gerenciador de Livros

Este projeto é uma API REST simples para o gerenciamento de livros. Permite listar, buscar, cadastrar, atualizar e remover livros de um catálogo.

## 🚀 Como executar a aplicação

### Pré-requisitos
Antes de iniciar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação e execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-repositorio.git
   cd seu-repositorio
   ```
2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```
3. Inicie o servidor:
   ```sh
   npm start
   # ou
   yarn start
   ```
4. O servidor estará rodando na porta `3000`. A API pode ser acessada via `http://localhost:3000`.

---

## 📌 Rotas disponíveis

### 1️⃣ Listar todos os livros
- **Rota:** `GET /livros`
- **Resposta de sucesso (200):**
  ```json
  [
    {
      "id": 1,
      "titulo": "O Enigma do Tempo",
      "autor": "Carlos Andrade",
      "anoLancamento": 2015,
      "notaAvaliacao": 4.7,
      "genero": "Ficção Científica"
    }
  ]
  ```

---

### 2️⃣ Buscar um livro por ID
- **Rota:** `GET /livros/:id`
- **Exemplo:** `GET /livros/1`
- **Resposta de sucesso (200):**
  ```json
  {
    "id": 1,
    "titulo": "O Enigma do Tempo",
    "autor": "Carlos Andrade",
    "anoLancamento": 2015,
    "notaAvaliacao": 4.7,
    "genero": "Ficção Científica"
  }
  ```
- **Resposta de erro (404):**
  ```json
  {
    "error": true,
    "message": "Nenhum livro encontrado com o ID 99."
  }
  ```

---

### 3️⃣ Cadastrar um novo livro
- **Rota:** `POST /livros`
- **Corpo da requisição (JSON):**
  ```json
  {
    "id": 7,
    "titulo": "Nova História",
    "autor": "João Silva",
    "anoLancamento": 2022,
    "notaAvaliacao": 4.5,
    "genero": "Drama"
  }
  ```
- **Resposta de sucesso (200):**
  ```json
  {
    "error": false,
    "message": "Livro cadastrado com sucesso.",
    "data": {
      "id": 7,
      "titulo": "Nova História",
      "autor": "João Silva",
      "anoLancamento": 2022,
      "notaAvaliacao": 4.5,
      "genero": "Drama"
    }
  }
  ```

---

### 4️⃣ Atualizar um livro
- **Rota:** `PUT /livros/:id`
- **Exemplo:** `PUT /livros/1`
- **Corpo da requisição (JSON):**
  ```json
  {
    "titulo": "O Enigma do Tempo - Edição Revisada",
    "autor": "Carlos Andrade",
    "anoLancamento": 2016,
    "notaAvaliacao": 4.8,
    "genero": "Ficção Científica"
  }
  ```
- **Resposta de sucesso (200):**
  ```json
  {
    "error": false,
    "message": "Livro de ID 1 atualizado com sucesso.",
    "data": {
      "id": 1,
      "titulo": "O Enigma do Tempo - Edição Revisada",
      "autor": "Carlos Andrade",
      "anoLancamento": 2016,
      "notaAvaliacao": 4.8,
      "genero": "Ficção Científica"
    }
  }
  ```

---

### 5️⃣ Remover um livro
- **Rota:** `DELETE /livros/:id`
- **Exemplo:** `DELETE /livros/1`
- **Resposta de sucesso (200):**
  ```json
  {
    "error": false,
    "message": "Livro removido com sucesso."
  }
  ```

---

## 🛠 Tecnologias utilizadas
- **Node.js**
- **Express.js**