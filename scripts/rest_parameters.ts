function somarRenda(...meses: number[]): number {
  return meses.reduce(
    (rendaTotal: number, rendaAtual: number) => rendaTotal + rendaAtual,
    0
  );
}

console.log(somarRenda(1000, 2000, 3000));
