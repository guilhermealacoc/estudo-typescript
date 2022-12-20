interface IModelo {
    id: number;
    created_at: Date;
    deleted_at: Date;
}
interface IPessoa {
    nome: string;
    id?: number;
    idade?: number;
}
interface IUsuario extends IPessoa {
    email: string;
    senha: string;
}
declare const joao: IUsuario;
