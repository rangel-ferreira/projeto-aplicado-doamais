# Arquitetura do Sistema DoaMais (Implementação Final)

## 1. Visão Geral
A arquitetura implementada na Etapa 2 evoluiu para um modelo **Serverless** (Sem Servidor) baseada em eventos e microsserviços geridos pelo Google Firebase. Esta decisão foi tomada para priorizar a entrega de um MVP (Mínimo Produto Viável) funcional, seguro e escalável dentro do prazo estabelecido, focando na experiência do usuário mobile.

## 2. Diagrama da Arquitetura Atual

```mermaid
graph TD
    User[Usuário Mobile] -->|Interage| App[Frontend React Native/Expo]
    App -->|Autenticação SDK| FirebaseAuth[Firebase Auth]
    App -->|Leitura/Escrita SDK| Firestore[Cloud Firestore NoSQL]
    Firestore -->|Sync em Tempo Real| App