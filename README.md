# Meu Projeto Spotify 🎵

Bem-vindo ao **Meu Projeto Spotify**, um site de reprodução de músicas inspirado no Spotify, desenvolvido como parte da minha jornada de aprendizado em desenvolvimento full-stack. Este projeto foi criado para praticar e demonstrar minhas habilidades com tecnologias modernas de desenvolvimento web.

## 📌 Aviso Legal

Este projeto não está associado, afiliado ou endossado pelo Spotify. Todas as marcas registradas, logotipos e direitos autorais pertencem aos seus respectivos proprietários. Este projeto é apenas uma demonstração técnica para fins educacionais e não deve e nem será usado para fins lucrativos.

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - **React**: Biblioteca JavaScript para construção de interfaces de usuário.
  - **Vite**: Ferramenta de build rápida para projetos modernos.
  - **HTML/CSS**: Estruturação e estilização da interface.
  - **JavaScript**: Lógica e interatividade do frontend.

- **Backend:**
  - **Node.js**: Ambiente de execução JavaScript no servidor.
  - **Express.js**: Framework para construção de APIs RESTful.
  - **MongoDB**: Banco de dados NoSQL para armazenamento de dados.

- **Outras Ferramentas:**
  - **Git**: Controle de versão do projeto.
  - **Render**: Plataforma de hospedagem para deploy do projeto.

## 🌐 Sobre o Projeto

O **Meu Projeto Spotify** é um site de reprodução de músicas que permite aos usuários explorar artistas e músicas populares. O frontend foi desenvolvido com React e Vite, proporcionando uma experiência de usuário rápida e responsiva. O backend, construído com Node.js e Express, fornece uma API RESTful para gerenciar os dados de artistas e músicas, armazenados em um banco de dados MongoDB.

### Funcionalidades Principais

- Listagem de artistas e músicas.
- Reprodução de músicas (simulação).
- Interface moderna e responsiva.

## 🚀 Deploy

O projeto foi implantado no **Render** e pode ser acessado através do seguinte link:
<br/> 👉 [https://spotify-calebearcilio.onrender.com](https://spotify-calebearcilio.onrender.com)

## 🛠️ Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/en/download) instalado.
- [MongoDB](https://www.mongodb.com/) configurado (caso queira usar seu banco de dados MongoDB).

### Para executar o ambiente de desenvolvimento

1. Clone esse repositório:
>
>```bash
> git clone https://github.com/calebearcilio/Meu-Projeto-Spotify.git
>```

2. Instale todas as dependências:
>
>```bash
> npm run build
>```

3. Inicie o ambiente de desenvolvimento:
>
>```bash
> npm run dev
>```

### Para executar usando seu banco de dados MongoDB

#### Primeiro você precisa ter as informações dos artistas e das músicas salvas no seu banco de dados

- Você pode adicionar um arquivo .json ou .js com os artistas e músicas de sua preferência para seu bando de dados, através do arquivo [insertMany.js](./backend/api/insertMany.js)

- O nome da sua base de dados tem que se chamar "spotify" ou o nome que você quiser, apenas alterando o seu arquivo .env (siga o exemplo do arquivo .env.example)

- Exemplo de Artista:

```js
[
  {
    image: "https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4",
    name: "Henrique & Juliano",
    banner: "https://i.scdn.co/image/ab67618600001016b37fbcbd078cb239588df5d9",
  }
]
```

- Exemplo de Música:

```js
[
  {
    image: "https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24",
    name: "Última Saudade - Ao Vivo",
    duration: "2:30",
    artist: "Henrique & Juliano",
    audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
  }
]
```

#### Passos

1. Clone esse repositório:
>
>```bash
> git clone https://github.com/calebearcilio/Meu-Projeto-Spotify.git
>```

2. Instale todas as dependências:
>
>```bash
> npm run build
>```

3. Configure suas variáveis de ambiente no arquivo .env com base no arquivo [.env.exemple](./backend/.env.exemple) do backend:
>
>```bash
>    MONGODB_URI=sua_url_de_conexao_do_mongodb
>```

4. Altere o URL da API do frontend no arquivo [api.js](./frontend/api/api.js) para o endereço do seu backend.

5. Inicie o servidor backend:
>
>```bash
>    npm start
>```

5. Acesse o site no navegador: <br>
<http://localhost:1000>

6. Você também pode acessar a api do backend através do seguinte link: <br>
<http://localhost:1000/api>

##

Obrigado por visitar o repositório e conferir o projeto! Espero que tenha gostado e que esse projeto sirva de aprendizado para você também! 😊
