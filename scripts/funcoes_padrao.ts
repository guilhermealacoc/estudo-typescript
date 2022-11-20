function enviarEmail(
  para: string,
  assunto: string = "Sem assunto",
  arquivo?: string
): void {
  console.log({ para, assunto, arquivo });
}

enviarEmail("guilherme@alacoc.com");
