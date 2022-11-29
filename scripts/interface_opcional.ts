interface IProduto {
  nome: string;
  preco: number;
  descricao?: string;
  dataValidade: Date;
}

const produtoDados: IProduto = {
  nome: "Arroz",
  preco: 10,
  descricao: "Arroz tipo 1",
  dataValidade: new Date(),
};

const produtoNovoDados: IProduto = {
  nome: "Feijão",
  preco: 5,
  dataValidade: new Date(),
};
