
![image](https://github.com/user-attachments/assets/9d313c96-0314-4131-a36c-ac8bcb9e30f4)

# TradeVision
**TradeVision** é um aplicativo de simulação de investimentos e análise de mercado focado em fornecer aos usuários uma plataforma para praticar a compra e venda de ações e visualizar cotações em tempo real. O sistema é projetado para oferecer uma experiência prática e educacional sobre investimentos na bolsa de valores, sem realizar transações reais.

## Objetivo
Permitir que usuários simulem a compra e venda de ações, visualizem cotações de mercado e analisem o desempenho de seus portfólios simulados. O objetivo é fornecer uma ferramenta educacional e prática para investidores iniciantes e experientes.

## Funcionalidades Principais
- **Simulação de Transações**: Os usuários podem praticar a compra e venda de ações com dinheiro fictício.
- **Visualização de Cotações**: Oferece cotações e gráficos históricos de preços de ações.
- **Gestão de Portfólio**: Permite adicionar, remover e atualizar ações em um portfólio simulado, além de visualizar o desempenho geral.
- **Alertas e Notificações**: [Dev] Configuração de alertas para mudanças de preços e notificações sobre variações significativas.
- **Análise e Relatórios**: [Dev] Geração de relatórios sobre o desempenho do portfólio e fornecimento de indicadores financeiros baseados em dados simulados.

## Tecnologias Utilizadas

- **React + TypeScript**
- **Vite**: Para bundling e desenvolvimento rápido.
- **TailwindCSS**: Para estilização.
- **ESLint**: Linting para garantir qualidade de código.
- **ReactQuery**: Para lidar com o cache e requisições na API

## Instalação e Execução

### Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) versão 14.x ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/LuanMiqueias/trade-vision-front.git
   cd trade-vision-front
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

   ou, se preferir usar **yarn**:
   ```bash
   yarn install
   ```

3. Execute o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

   ou, se estiver usando **yarn**:
   ```bash
   yarn dev
   ```

4. Acesse a aplicação no navegador em `http://localhost:3000`.

## Estrutura do Projeto

- `/src`: Código principal do frontend.
- `/public`: Arquivos estáticos.
- `/components`: Componentes React reutilizáveis.
- `/pages`: Paginas do App.

