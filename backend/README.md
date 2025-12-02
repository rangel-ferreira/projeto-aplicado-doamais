# Arquitetura Backend (Serverless)

Devido ao prazo e à complexidade do projeto, optamos por uma arquitetura **Serverless** utilizando **Google Firebase** (Authentication e Firestore).

A lógica de negócios (regras de segurança, autenticação e persistência de dados) é gerida diretamente pela infraestrutura do Firebase e integrada via SDK no Frontend (`frontend/mobile/firebaseConfig.js`), conforme permitido nas ferramentas sugeridas na documentação do projeto.

Portanto, não há código de servidor Node.js/Express tradicional nesta pasta, pois o backend foi totalmente abstraído para serviços em nuvem.