# Authentication Server

## Descrição

Esta é uma API de autenticação desenvolvida em TypeScript, utilizando PostgreSQL como banco de dados e Prisma como ORM. O principal objetivo desta API é fornecer uma solução para autenticação de usuários e verificação de autenticidade ao acessar rotas privadas, proporcionando uma camada adicional de segurança em aplicações que requerem proteção de dados e controle de acesso.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Contato](#contato)

## Funcionalidades
- **Registro de Usuário**: Permite que novos usuários se registrem na aplicação.
- **Login de Usuário**: Autentica usuários com credenciais válidas.
- **Proteção de Rotas**: Verifica a autenticidade do usuário ao acessar rotas privadas, garantindo que apenas usuários autenticados possam acessá-las.
- **Atualização de Perfil**: Permite que os usuários atualizem suas informações de perfil.
- **Gerenciamento de Tokens**: Utiliza tokens JWT (JSON Web Tokens) para gerenciar sessões de usuários e verificar a autenticidade das requisições.

## Tecnologias
- **TypeScript**: Linguagem principal utilizada para o desenvolvimento da API, fornecendo tipagem estática e melhores práticas de programação.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar informações dos usuários e outras entidades relacionadas.
- **Prisma**: ORM (Object-Relational Mapping) que facilita a interação com o banco de dados PostgreSQL, permitindo consultas e manipulações eficientes.

## Instalação

Instruções sobre como instalar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/pedrocsh/authentication-server

# Navegue até o diretório do projeto
cd authentication-server

# Instale as dependências
yarn install
```

## Uso

```bash
# Crie um arquivo .env na raiz do projeto e preencha as variáveis
cp .env.example .env

# Faça o build
yarn build

# Atualize as informações do banco de dados
yarn prisma migrate dev

# rode o projeto
yarn dev # em modo de desenvolvimento
# ou
yarn start # em modo de produção
```

## Contribuição

Instruções sobre como contribuir para o projeto:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona a feature x'`)
4. Faça um push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## Contato

Pedro Cardoso - [@pedrocsh](https://www.linkedin.com/in/pedrocsh/) - peedro.shell@gmail.com

Link do Projeto: [https://github.com/pedrocsh/authentication-server](https://github.com/pedrocsh/authentication-server)
