<h1 align="center">
     <a href="https://be-trybe.herokuapp.com/" alt="link"> Bitcoin Calculator </a>
</h1>

<h4 align="center">
	🚧 Concluído 🚧
</h4>

# Tabela de conteúdos

<!--ts-->

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#%EF%B8%8F-funcionalidades)
- [Demonstração da aplicação](#-demonstração-da-aplicação)
- [Como executar o projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
    - [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
    - [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
- [Tecnologias](#-tecnologias)
  - [Website](#website--react)
  - [Server](#server--nodejs)
- [Autor](#-autor)
- [Licença](#user-content--licença)

<!--te-->

## 💻 Sobre o projeto

É uma aplicação full-stack servindo como um "index" para vermos o preço do BitCoin em diferentes moedas.

---

## ⚙️ Funcionalidades

As seguintes funcionalidades estão disponíveis:

- [x] os usuários autorizados podem:

  - [x] acompanhar o preço do bitcoin em diferentes moedas
  - [x] atualizar a cotação de uma moeda

---

## 🔍 Demonstração da aplicação

A aplicação está hospedada no [Heroku](https://be-trybe.herokuapp.com)

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="be-trybe" title="be-trybe" src="./github/assets/be-trybe.gif" >
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta src)
2. Frontend (pasta client)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/).

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/lucasgbsampaio/bitcoin-calculator.git

# Acesse a pasta do projeto no terminal/cmd para ter acesso a raiz da pasta
$ cd bitcoin-calculator

# Instale as dependências
$ yarn

# Crie um arquivo .env na raiz seguindo as especificações do arquivo .sample-env,
# colocando uma chave secreta para o token

# Execute a aplicação em modo desenvolvimento
$ yarn dev

# O servidor iniciará na porta:8080 - acesse http://localhost:8080

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Acesse a pasta do frontend no seu terminal/cmd
$ cd client

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### Website ([React](https://reactjs.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)**

> Veja o arquivo [package.json](https://github.com/lucasgbsampaio/betrybe-technical-test/blob/master/client/package.json)

#### Server ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[dotenv](https://github.com/motdotla/dotenv#readme)**
- **[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)**
- **[BodyParser](https://www.npmjs.com/package/body-parser)**
- **[Node-Fetch](https://www.npmjs.com/package/node-fetch)**

> Veja o arquivo [package.json](https://github.com/lucasgbsampaio/betrybe-technical-test/blob/master/package.json)

---

## 👨‍💻 Autor

- **Lucas Sampaio (lucasgbsampaio)** - [Twitter](https://twitter.com/lucasgbsampaio) - [LinkedIn](https://www.linkedin.com/in/lucasgbsampaio/)

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---
