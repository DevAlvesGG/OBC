//enum de numbers
enum Direcao {
  Cima,  // 0
  Baixo, // 1
  Esquerda, // 2
  Direita, // 3
}

let minhaDirecao: Direcao = Direcao.Cima;
console.log(minhaDirecao); // Saída: 0
console.log(Direcao.Esquerda); // Saída: 2



//enum de strings
enum FuncaoUsuario {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Convidado = "CONVIDADO",
}

let papelDoUsuario: FuncaoUsuario = FuncaoUsuario.Admin;
console.log(papelDoUsuario); // Saída: "ADMIN"