# Documentação da API e Dados

## Arquitetura Serverless
Este projeto não utiliza uma API REST tradicional (Middleware). Adotamos uma arquitetura **Serverless** utilizando o **Google Firebase SDK**. A comunicação entre o Frontend (Mobile) e o Banco de Dados (Firestore) é direta e segura.

## Estrutura de Dados (Collections)

O banco de dados NoSQL (Firestore) está estruturado na seguinte coleção principal:

### Coleção: `doacoes`
Armazena todos os itens disponíveis na plataforma.

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | String (UUID) | Identificador único do documento (gerado automaticamente pelo Firebase). |
| `nome` | String | Título/Descrição do item a ser doado (Ex: "Cadeira de Escritório"). |
| `doador` | String | E-mail do usuário que cadastrou o item (Chave estrangeira lógica). |
| `data` | Timestamp | Data e hora da publicação (Formato ISO 8601). |

## Métodos de Acesso (SDK)

A aplicação utiliza os seguintes métodos do `firebase/firestore` para manipulação de dados:

1.  **Ler Itens (`onSnapshot`)**:
    * Mantém uma conexão via WebSocket aberta para receber atualizações em tempo real sempre que uma nova doação é cadastrada.
    * Query: `collection(db, "doacoes")` ordenado por `data desc`.

2.  **Criar Item (`addDoc`)**:
    * Envia um novo documento JSON para a coleção `doacoes`.
    * Autenticação requerida: Sim.