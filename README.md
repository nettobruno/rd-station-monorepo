# Teste Técnico - Recomendador de Produtos RD Station

Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web existente.

<img width="1920" height="1366" alt="screencapture-rd-station-monorepo-vercel-app-2025-11-01-21_43_22" src="https://github.com/user-attachments/assets/f9afc07e-1a08-4346-827f-c2989a8d7c3b" />


## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- **React.js**: construção do frontend da aplicação  
- **Express.js**: criação de uma API REST para fornecer os dados de produtos  
- **Tailwind CSS**: estilização e layout responsivo  
- **Axios**: consumo da API  
- **Vercel**: hospedagem do frontend  
- **Render**: hospedagem do backend

## Links em Produção

- [Frontend (Vercel)](https://rd-station-monorepo.vercel.app/)
- [Backend (Render)](https://rd-station-monorepo.onrender.com/api/products)

> ⚠️ **Observação sobre o Render:**  
> A API está hospedada no plano gratuito do [Render.com](https://render.com/).  
> Nesse plano, o servidor entra em modo de hibernação após alguns minutos de inatividade, podendo levar **30 a 60 segundos para "acordar"** na primeira requisição.  
> Caso o link da API demore a responder ou retorne erro temporário, basta aguardar alguns segundos e tentar novamente.

## Como Executar

Clone o repositório
```bash
   git clone https://github.com/nettobruno/rd-station-monorepo.git
   cd rd-station-monorepo
 ```

Verifique a versão do Node.js

O projeto utiliza a versão `v24.11.0`, definida no arquivo `.nvmrc`.

Se você utiliza nvm, basta rodar:

```bash
   nvm use
 ```

Caso ainda não tenha essa versão instalada, execute:

```bash
   nvm install 24.11.0
 ```

Instale as dependências

```bash
   yarn install
 ```

Execute o script de configuração inicial
```bash
  ./install.sh
```

Inicie a aplicação
```bash
  yarn start
```

## Decisões Técnicas

- O json-server foi substituído por uma API Express para permitir deploy no Render e maior controle sobre os endpoints.
- O frontend foi redesenhado para refletir o máximo possível ao Tangram Design System da RD Station (cores, tipografia e espaçamento).
- O consumo da API agora utiliza variáveis de ambiente (process.env.REACT_APP_API_URL), funcionando tanto local quanto em produção.

## Autor
- Nome: Bruno Netto
- E-mail: brunonettomac@gmail.com
- Linkedin: https://www.linkedin.com/in/nettobruno/

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
