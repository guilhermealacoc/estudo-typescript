interface ICategoria {
  nome: string;
  id: number;
  categoriaPai?: ICategoria;
}

const frontEnd: ICategoria = {
  nome: "Front-End",
  id: 1,
};

const backEnd: ICategoria = {
  nome: "Front-End",
  id: 1,
};

interface Menu {
  categorias: ICategoria[];
}

let menu: Menu = {
  categorias: [frontEnd, backEnd],
};

interface ITodo {
  [indice: number]: string;
}

let minhasTarefas: ITodo;

minhasTarefas = ["Comprar pão", "Comprar leite"];
console.log(minhasTarefas[0]);
