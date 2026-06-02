export const criarProduto = ({ id, nome, categoria, descricao, preco, estoque }) => ({
  id,
  nome: nome.trim(),
  categoria,
  descricao: descricao.trim(),
  preco,
  estoque,
})

export const produtosIniciais = [
  criarProduto({
    id: 'arco-recurvo-01',
    nome: 'Arco recurvo Orion 28 lb',
    categoria: 'Arco',
    descricao: 'Modelo indicado para iniciantes que buscam estabilidade nos primeiros treinos.',
    preco: 649.9,
    estoque: 8,
  }),
  criarProduto({
    id: 'flechas-carbono-02',
    nome: 'Kit 6 flechas de carbono',
    categoria: 'Flecha',
    descricao: 'Flechas leves com ponta de treino e boa resistência para uso frequente.',
    preco: 189.9,
    estoque: 15,
  }),
  criarProduto({
    id: 'bracadeira-couro-03',
    nome: 'Braçadeira de proteção em couro',
    categoria: 'Proteção',
    descricao: 'Protege o antebraço durante o disparo e melhora a segurança do arqueiro.',
    preco: 79.9,
    estoque: 20,
  }),
]
