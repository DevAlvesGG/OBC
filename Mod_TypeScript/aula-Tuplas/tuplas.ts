let pessoa: [string, number];

// Atribuição válida
pessoa = ["João", 30];

// Erro: O primeiro elemento deve ser uma string
pessoa = [30, "João"]; // Erro de tipo!

// Erro: O número de elementos é fixo
pessoa = ["João", 30, true]; // Erro de comprimento!