const filmesCategorias: (string | number)[] = [
  "Comedy",
  "Drama",
  "Romance",
  "Adventure",
  10,
];

//filmesCategorias.push("Terror");

const filmesAnos: Array<number | string> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
  filmesAnos.push(ano);
}

console.log(filmesAnos);
