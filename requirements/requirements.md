# Requisitos do Sistema DoaMais (Etapa 2)

## 1. Requisitos Funcionais Implementados (MVP)
Abaixo listamos as funcionalidades que foram priorizadas e estão operacionais nesta entrega:

* **[RF01] Autenticação de Usuário:** O sistema permite que novos usuários se cadastrem com e-mail e senha, e realizem login na plataforma.
* **[RF02] Cadastro de Doações:** Usuários autenticados podem publicar novos itens para doação, informando uma descrição do objeto.
* **[RF03] Listagem de Doações (Feed):** O sistema exibe uma lista em tempo real de todos os itens disponíveis para doação, ordenados dos mais recentes para os mais antigos.
* **[RF04] Identificação do Doador:** Cada item listado exibe o e-mail de contato do usuário responsável pela doação.

## 2. Funcionalidades Futuras (Backlog)
Devido ao escopo temporal desta etapa, as seguintes funcionalidades planejadas na Etapa 1 ficam para versões futuras:
* Chat em tempo real entre doador e donatário.
* Upload de fotos dos produtos (atualmente apenas descrição textual).
* Filtros de busca por categoria e geolocalização.
* Sistema de avaliação de reputação.

## 3. Requisitos Não Funcionais
* **[RNF01] Multiplataforma:** O frontend foi desenvolvido em React Native (Expo), compatível com Android e iOS.
* **[RNF02] Persistência:** Utilização do Google Firebase (Firestore) para armazenamento de dados em nuvem.
* **[RNF03] Disponibilidade:** O banco de dados opera em modo online 24/7 via infraestrutura do Google Cloud.