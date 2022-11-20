function mostrarMensagem(texto: string | number): boolean {
  console.log(texto);

  return true;
}

console.log(mostrarMensagem("Olá, mundo!"));

//modelo de função arrow function
const show = (codigo: number): number | Date | object => {
  return new Date();
};

show(1);
