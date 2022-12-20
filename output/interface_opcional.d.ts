interface IProduto {
    nome: string;
    preco: number;
    descricao?: string;
    dataValidade: Date;
}
declare const produtoDados: IProduto;
declare const produtoNovoDados: IProduto;
