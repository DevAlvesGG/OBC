const Author = require ('./Author');

const gustavo = new Author('Gustavo');

const post = gustavo.writePost ("Meu primeiro post", "Este é o corpo do meu primeiro post");

post.addComment("gustavoo", "Muito bom post!uma merda");

console.log(gustavo);

console.log(post);