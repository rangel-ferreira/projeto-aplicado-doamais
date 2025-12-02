# Projeto DoaMais - Sistema de Conexão entre Doadores e Donatários

## 1. Título e Descrição do Projeto
**Nome do Sistema:** DoaMais (App Mobile)
**Descrição:** O DoaMais é uma plataforma mobile desenvolvida para conectar pessoas que desejam doar itens sem uso a pessoas que necessitam desses recursos.
**Problema Solucionado:** O descarte incorreto de itens reutilizáveis e a dificuldade logística de encontrar quem precisa de doações específicas em comunidades urbanas, alinhado ao ODS 11 (Cidades e Comunidades Sustentáveis).

## 2. Funcionalidades Implementadas
* **Cadastro e Autenticação:** Usuários podem criar conta e fazer login via e-mail e senha.
* **Publicação de Doações:** Interface para cadastro rápido de itens com descrição.
* **Feed de Doações:** Listagem em tempo real de todos os itens disponíveis na plataforma.
* **Identificação de Doador:** Visualização do e-mail do doador em cada item listado.
* **Status:** Implementação Funcional (MVP).
* *Obs: Funcionalidades de chat e geolocalização estão planejadas para versões futuras.*

## 3. Tecnologias Utilizadas
* **Linguagem:** JavaScript / React Native
* **Framework:** Expo (Managed Workflow)
* **Backend & Banco de Dados:** Firebase (Firestore Database)
* **Autenticação:** Firebase Authentication
* **IDE:** VS Code

## 4. Arquitetura do Sistema
O sistema utiliza uma arquitetura **Serverless** baseada no Firebase.
* **Frontend Mobile:** Desenvolvido em React Native/Expo, responsável pela interface do usuário e lógica de apresentação.
* **Backend as a Service (BaaS):** O Firebase gerencia a autenticação de usuários e o banco de dados NoSQL (Firestore) em tempo real.
* **Integração:** O app conecta-se diretamente ao Firestore via SDK, eliminando a necessidade de um servidor intermediário para este MVP.

## 5. Instruções de Instalação e Execução

### Pré-requisitos
* Node.js instalado.
* Gerenciador de pacotes npm.
* Aplicativo Expo Go no celular (Android/iOS).

### Passo a Passo
1.  Clone este repositório:
    ```bash
    git clone [https://github.com/rangel-ferreira/projeto-aplicado-doamais.git](https://github.com/rangel-ferreira/projeto-aplicado-doamais.git)
    ```
2.  Acesse a pasta do frontend:
    ```bash
    cd frontend/mobile
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Execute o projeto:
    ```bash
    npx expo start
    ```
5.  Escaneie o QR Code gerado no terminal utilizando o aplicativo **Expo Go**.

## 6. Acesso ao Sistema
* **Ambiente:** O sistema roda localmente via Expo Go.
* **Credenciais de Teste:**
    * **Login:** admin@doamais.com
    * **Senha:** 123456
    * *(Ou crie uma nova conta diretamente no botão "Criar Conta" do app).*

## 7. Validação com Público-Alvo
* **Público-Alvo:** Moradores de comunidades residenciais urbanas interessados em economia circular.
* **Resumo:** A validação foi realizada apresentando o protótipo funcional para moradores locais.
* **Feedback:** A interface foi considerada simples e direta. Usuários sugeriram a inclusão futura de fotos dos produtos.
* *(Detalhes completos disponíveis na pasta `validation/` deste repositório).*

## 8. Equipe de Desenvolvimento
* Moacir Cadmiel Silva dos Santos (Gerente e Arquiteto)
* Rangel Amaral Ferreira (Backend)
* João Pedro Pereira Alves (Frontend/UX)
* Paulo Ricardo de Castro Sousa (QA)
