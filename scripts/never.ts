function showError(message: string) {
  throw new Error(message);
}
showError("Deu tudo errado");
