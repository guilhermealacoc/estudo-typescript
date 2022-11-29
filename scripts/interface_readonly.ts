interface ICurso {
  titulo?: string;
  preco: number;
  cargaHoraria: number;
  classificacao: number;
}

const curso: ICurso = {
  titulo: "TypeScript",
  preco: 10,
  cargaHoraria: 20,
  classificacao: 5,
};

console.log(curso);
