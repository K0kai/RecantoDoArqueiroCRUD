Recanto do Arqueiro CRUD

Objetivo do Sistema

Recanto do Arqueiro CRUD é um projeto acadêmico que implementa operações CRUD (Create, Read, Update, Delete) em uma aplicação web. O sistema gerencia informações de arqueiros e seus dados, utilizando dados fictícios gerados automaticamente para demonstração. O projeto foi desenvolvido como atividade de aprendizado em desenvolvimento web com React.

Tecnologias Utilizadas

- React 19.2.6 - Biblioteca JavaScript para construção da interface
- Vite 8.0.12 - Build tool e dev server de alta performance
- ESLint - Ferramenta de análise estática de código
- Babel - Transpilador JavaScript
- Node.js - Ambiente de execução

Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js (versão 16 ou superior)
- npm ou yarn

Instruções de Execução

1. Clonar o Repositório

git clone https://github.com/K0kai/RecantoDoArqueiroCRUD.git
cd RecantoDoArqueiroCRUD

2. Acessar a Pasta do Projeto

cd recanto_arq_crud

3. Instalar Dependências

npm install

Ou, se estiver usando yarn:

yarn install

4. Iniciar o Servidor de Desenvolvimento

npm run dev

Ou com yarn:

yarn dev

A aplicação estará disponível em http://localhost:5173 (porta padrão do Vite)

5. Build para Produção

Para criar uma build otimizada:

npm run build

Ou com yarn:

yarn build

Os arquivos otimizados estarão na pasta dist/

6. Preview da Build de Produção

npm run preview

Estrutura do Projeto

RecantoDoArqueiroCRUD/
├── recanto_arq_crud/
│   ├── src/                    (Código-fonte React)
│   ├── index.html              (Arquivo HTML principal)
│   ├── package.json            (Dependências do projeto)
│   ├── vite.config.js          (Configuração do Vite)
│   └── ...
├── .vscode/                    (Configurações do editor)
└── README.md                   (Este arquivo)

Scripts Disponíveis

- npm run dev - Inicia o servidor de desenvolvimento com hot reload
- npm run build - Cria uma build otimizada para produção
- npm run lint - Executa o linter para verificar qualidade do código
- npm run preview - Visualiza a build de produção localmente

Funcionalidades Principais

- Criar novos registros de arqueiros
- Visualizar lista de todos os registros
- Atualizar informações existentes
- Deletar registros
- Dados fictícios gerados automaticamente para demonstração

Observações Importantes

Este é um projeto acadêmico desenvolvido exclusivamente no front-end. Os dados são fictícios e gerados automaticamente, sendo armazenados apenas em memória durante a sessão. Nenhuma informação é persistida em banco de dados.

Contribuindo

Para sugestões de melhoria:

1. Faça um fork do repositório
2. Crie uma branch para sua melhoria (git checkout -b feature/MinhaFeature)
3. Commit suas mudanças (git commit -m 'Adiciona MinhaFeature')
4. Push para a branch (git push origin feature/MinhaFeature)
5. Abra um Pull Request

Licença

Este projeto é um trabalho acadêmico e está disponível para fins educacionais.

Autor

K0kai

Suporte

Para dúvidas, abra uma issue no repositório.
