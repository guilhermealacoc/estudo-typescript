interface ICategoria {
    nome: string;
    id: number;
    categoriaPai?: ICategoria;
}
declare const frontEnd: ICategoria;
declare const backEnd: ICategoria;
interface Menu {
    categorias: ICategoria[];
}
declare let menu: Menu;
interface ITodo {
    [indice: number]: string;
}
declare let minhasTarefas: ITodo;
