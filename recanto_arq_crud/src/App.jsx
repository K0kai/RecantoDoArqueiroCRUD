import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { criarProduto, produtosIniciais } from './obj/produto'

const produtoVazio = {
  nome: '',
  categoria: 'Arco',
  descricao: '',
  preco: '',
  estoque: '',
}

function App() {
  const [paginaAtual, setPaginaAtual] = useState('inicio')
  const [produtos, setProdutos] = useState(() => {
    const produtosSalvos = localStorage.getItem('recanto-produtos')
    return produtosSalvos ? JSON.parse(produtosSalvos) : produtosIniciais
  })
  const [formulario, setFormulario] = useState(produtoVazio)
  const [produtoEditandoId, setProdutoEditandoId] = useState(null)

  useEffect(() => {
    localStorage.setItem('recanto-produtos', JSON.stringify(produtos))
  }, [produtos])

  const produtosDestaque = useMemo(() => produtos.slice(0, 3), [produtos])
  const estaEditando = produtoEditandoId !== null

  const atualizarCampo = (event) => {
    const { name, value } = event.target
    setFormulario((dadosAtuais) => ({ ...dadosAtuais, [name]: value }))
  }

  const limparFormulario = () => {
    setFormulario(produtoVazio)
    setProdutoEditandoId(null)
  }

  const salvarProduto = (event) => {
    event.preventDefault()

    const produto = criarProduto({
      id: produtoEditandoId ?? crypto.randomUUID(),
      nome: formulario.nome,
      categoria: formulario.categoria,
      descricao: formulario.descricao,
      preco: Number(formulario.preco),
      estoque: Number(formulario.estoque),
    })

    if (estaEditando) {
      setProdutos((listaAtual) =>
        listaAtual.map((item) => (item.id === produtoEditandoId ? produto : item)),
      )
    } else {
      setProdutos((listaAtual) => [produto, ...listaAtual])
    }

    limparFormulario()
    setPaginaAtual('produtos')
  }

  const editarProduto = (produto) => {
    setFormulario({
      nome: produto.nome,
      categoria: produto.categoria,
      descricao: produto.descricao,
      preco: String(produto.preco),
      estoque: String(produto.estoque),
    })
    setProdutoEditandoId(produto.id)
    setPaginaAtual('produtos')
  }

  const excluirProduto = (id) => {
    const confirmouExclusao = window.confirm('Deseja excluir este produto?')

    if (confirmouExclusao) {
      setProdutos((listaAtual) => listaAtual.filter((produto) => produto.id !== id))

      if (produtoEditandoId === id) {
        limparFormulario()
      }
    }
  }

  const formatarPreco = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

  return (
    <main className="app">
      <header className="topo">
        <div>
          <span className="marca-selo">E-commerce de arquearia</span>
          <h1>Recanto do Arqueiro</h1>
        </div>
        <nav className="menu" aria-label="Menu principal">
          <button
            className={paginaAtual === 'inicio' ? 'ativo' : ''}
            type="button"
            onClick={() => setPaginaAtual('inicio')}
          >
            Início
          </button>
          <button
            className={paginaAtual === 'produtos' ? 'ativo' : ''}
            type="button"
            onClick={() => setPaginaAtual('produtos')}
          >
            Produtos
          </button>
          <button
            className={paginaAtual === 'contato' ? 'ativo' : ''}
            type="button"
            onClick={() => setPaginaAtual('contato')}
          >
            Contato
          </button>
        </nav>
      </header>

      {paginaAtual === 'inicio' && (
        <section className="pagina inicio">
          <article className="noticia">
            <div className="alvo" aria-hidden="true">
              <span></span>
            </div>
            <div>
              <span className="etiqueta">Notícia</span>
              <h2>Campeonato regional movimenta novos praticantes de arquearia</h2>
              <p>
                O Recanto do Arqueiro acompanha o crescimento do esporte e seleciona
                equipamentos para quem busca precisão, segurança e evolução nos treinos.
              </p>
            </div>
          </article>

          <section className="secao">
            <div className="secao-cabecalho">
              <div>
                <span className="etiqueta">Destaques</span>
                <h2>Produtos em evidência</h2>
              </div>
              <button type="button" className="botao secundario" onClick={() => setPaginaAtual('produtos')}>
                Gerenciar produtos
              </button>
            </div>

            <div className="grade-produtos">
              {produtosDestaque.map((produto) => (
                <article className="produto-card" key={produto.id}>
                  <span>{produto.categoria}</span>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <strong>{formatarPreco(produto.preco)}</strong>
                </article>
              ))}
            </div>
          </section>
        </section>
      )}

      {paginaAtual === 'produtos' && (
        <section className="pagina produtos">
          <section className="painel-formulario">
            <div>
              <span className="etiqueta">Cadastro</span>
              <h2>{estaEditando ? 'Editar produto' : 'Cadastrar novo produto'}</h2>
            </div>

            <form onSubmit={salvarProduto}>
              <label>
                Nome do produto
                <input
                  name="nome"
                  value={formulario.nome}
                  onChange={atualizarCampo}
                  placeholder="Ex.: Arco recurvo iniciante"
                  required
                />
              </label>

              <label>
                Categoria
                <select name="categoria" value={formulario.categoria} onChange={atualizarCampo}>
                  <option>Arco</option>
                  <option>Flecha</option>
                  <option>Proteção</option>
                  <option>Acessório</option>
                  <option>Manutenção</option>
                </select>
              </label>

              <label>
                Descrição
                <textarea
                  name="descricao"
                  value={formulario.descricao}
                  onChange={atualizarCampo}
                  placeholder="Descreva o uso, material e público indicado"
                  rows="4"
                  required
                />
              </label>

              <div className="campos-linha">
                <label>
                  Preço
                  <input
                    name="preco"
                    value={formulario.preco}
                    onChange={atualizarCampo}
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0,00"
                    required
                  />
                </label>
                <label>
                  Estoque
                  <input
                    name="estoque"
                    value={formulario.estoque}
                    onChange={atualizarCampo}
                    type="number"
                    min="0"
                    step="1"
                    placeholder="0"
                    required
                  />
                </label>
              </div>

              <div className="acoes-formulario">
                <button type="submit" className="botao principal">
                  {estaEditando ? 'Salvar edição' : 'Cadastrar produto'}
                </button>
                {estaEditando && (
                  <button type="button" className="botao neutro" onClick={limparFormulario}>
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </section>

          <section className="painel-lista">
            <div className="secao-cabecalho">
              <div>
                <span className="etiqueta">Listagem</span>
                <h2>Produtos cadastrados</h2>
              </div>
              <span className="contador">{produtos.length} itens</span>
            </div>

            <div className="tabela">
              {produtos.map((produto) => (
                <article className="linha-produto" key={produto.id}>
                  <div>
                    <span>{produto.categoria}</span>
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                  </div>
                  <div className="dados-produto">
                    <strong>{formatarPreco(produto.preco)}</strong>
                    <small>{produto.estoque} em estoque</small>
                  </div>
                  <div className="acoes-lista">
                    <button type="button" className="botao secundario" onClick={() => editarProduto(produto)}>
                      Editar
                    </button>
                    <button type="button" className="botao perigo" onClick={() => excluirProduto(produto.id)}>
                      Excluir
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      )}

      {paginaAtual === 'contato' && (
        <section className="pagina contato">
          <span className="etiqueta">Contato do Dev</span>
          <h2>Desenvolvedor do projeto</h2>
          <p>
            Projeto acadêmico em React.JS para o site Recanto do Arqueiro, com CRUD
            de produtos voltados exclusivamente para arquearia.
          </p>
          <div className="contato-grid">
            <article>
              <strong>Nome</strong>
              <span>Luis Felipe Machado Damasceno Maia</span>
            </article>
            <article>
              <strong>E-mail</strong>
              <span>kokailuisfmdm@gmail.com</span>
            </article>
            <article>
              <strong>Curso</strong>
              <span>Análise e Desenvolvimento de Sistemas - Newton Paiva</span>
            </article>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
