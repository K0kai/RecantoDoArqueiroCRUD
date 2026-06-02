# Recanto do Arqueiro CRUD

Projeto acadêmico desenvolvido com React para demonstrar operações CRUD em uma aplicação web. O sistema gerencia registros fictícios de arqueiros, permitindo criar, visualizar, atualizar e excluir informações durante a sessão.

## Objetivo do Sistema

O **Recanto do Arqueiro CRUD** tem como objetivo aplicar conceitos de desenvolvimento web com React por meio de uma interface simples para gerenciamento de dados.

Como se trata de um projeto acadêmico, os dados utilizados são fictícios e gerados automaticamente para fins de demonstração.

## Funcionalidades

- Criar novos registros de arqueiros
- Visualizar a lista de registros cadastrados
- Atualizar informações existentes
- Deletar registros
- Utilizar dados fictícios gerados automaticamente

## Tecnologias Utilizadas

- **React 19.2.6**: biblioteca JavaScript para construção da interface
- **Vite 8.0.12**: ferramenta de build e servidor de desenvolvimento
- **ESLint**: ferramenta de análise estática de código
- **Babel**: transpilador JavaScript
- **Node.js**: ambiente de execução JavaScript

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js 16 ou superior
- npm ou yarn

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/K0kai/RecantoDoArqueiroCRUD.git
cd RecantoDoArqueiroCRUD
```

### 2. Acessar a pasta do projeto

```bash
cd recanto_arq_crud
```

### 3. Instalar as dependências

Com npm:

```bash
npm install
```

Ou com yarn:

```bash
yarn install
```

### 4. Iniciar o servidor de desenvolvimento

Com npm:

```bash
npm run dev
```

Ou com yarn:

```bash
yarn dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

## Build para Produção

Para gerar uma versão otimizada da aplicação:

Com npm:

```bash
npm run build
```

Ou com yarn:

```bash
yarn build
```

Os arquivos finais serão gerados na pasta `dist/`.

## Preview da Build

Para visualizar localmente a build de produção:

```bash
npm run preview
```

## Scripts Disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Cria uma build otimizada para produção |
| `npm run lint` | Executa o linter para verificar a qualidade do código |
| `npm run preview` | Visualiza a build de produção localmente |

## Estrutura do Projeto

```text
RecantoDoArqueiroCRUD/
├── recanto_arq_crud/
│   ├── src/              # Código-fonte React
│   ├── index.html        # Arquivo HTML principal
│   ├── package.json      # Dependências e scripts do projeto
│   ├── vite.config.js    # Configuração do Vite
│   └── ...
├── .vscode/              # Configurações do editor
└── README.md             # Documentação do projeto
```

## Observações Importantes

Este projeto foi desenvolvido exclusivamente no front-end. Os dados são armazenados apenas em memória durante a sessão, ou seja, não há persistência em banco de dados.

## Contribuindo

Sugestões de melhoria são bem-vindas. Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua melhoria:

```bash
git checkout -b feature/MinhaFeature
```

3. Faça o commit das alterações:

```bash
git commit -m "Adiciona MinhaFeature"
```

4. Envie a branch para o repositório remoto:

```bash
git push origin feature/MinhaFeature
```

5. Abra um Pull Request

## Licença

Este projeto é um trabalho acadêmico e está disponível para fins educacionais.

## Autor

K0kai

## Suporte

Em caso de dúvidas, abra uma issue no repositório.
