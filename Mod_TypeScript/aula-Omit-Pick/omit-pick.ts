// Define a interface base 'User' com todas as propriedades do usuário.
// Esta interface representa a estrutura completa de um objeto de usuário,
// incluindo dados sensíveis como 'passwordHash'.
interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string; // Propriedade que armazena a hash da senha.
  createdAt: Date; // Propriedade que armazena a data de criação.
};

// Define a interface 'UserProfile'.
// A propriedade 'dados' é do tipo 'Omit<User, 'passwordHash' | 'createdAt'>'.
//
// Omit<T, K> cria um novo tipo a partir de 'T' (neste caso, 'User'),
// removendo as propriedades cujas chaves estão em 'K' (neste caso,
// 'passwordHash' e 'createdAt').
interface UserProfile {
    dados: Omit<User, 'passwordHash' | 'createdAt'>;
}


//----------------------------------------------------------------------------------

// Define a interface 'UserContactInfo' usando o utilitário 'Pick'.
// A propriedade 'contact' é do tipo 'Pick<User, 'name' | 'email'>'.
//
// Pick<T, K> cria um novo tipo a partir de 'T' (neste caso, 'User'),
// incluindo APENAS as propriedades cujas chaves estão em 'K' (neste caso,
// 'name' e 'email').
interface UserContactInfo {
    contact: Pick<User, 'name' | 'email'>;
}
// Cria um objeto 'usuarioCompleto' que segue a estrutura da interface 'User'.
const usuarioCompleto: User = {
  id: 1,
  name: 'João',
  email: 'joao@example.com',
  passwordHash: 'asdf123',
  createdAt: new Date(),
};
// Cria um objeto 'info' que segue a estrutura da interface 'UserContactInfo'.
// Note que a propriedade 'contact' pode incluir apenas 'name' e 'email'
// porque o tipo 'Pick' as selecionou explicitamente.
const info: UserContactInfo = {
    contact: {
        name: usuarioCompleto.name,
        email: usuarioCompleto.email,
    }
};

console.log(info.contact);
// Saída: { name: 'João', email: 'joao@example.com' }
