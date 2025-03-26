//função de adicionar contato
function addContact (){
    const contactSection = document.getElementById('contact-list');

    const h3 = document.createElement('h3'); //Criamos um elemento H3
    h3.innerText = "Contato";  //colocamos "Contato" como texto da tag H3
    contactSection.appendChild(h3); //colocamos o elemento H3 dentro da contactSection

    const ul = document.createElement('ul'); //Criamos uma Lista 
    contactSection.appendChild(ul);

    const nameLi = document.createElement('li'); // Criamos uma li para colocar dentro da lista
    nameLi.innerText = "Nome: " //colocamos "Nome :" como texto do elemento 'nameLi'
    ul.appendChild(nameLi);

    const nameInput = document.createElement('input'); // Criamos um elemento input
    nameInput.type = 'text'  // Determinamos que o tipo do input é 'texto'
    nameInput.name = 'fullname'  // Determinamos o nome do input é 'fullname'
    nameLi.appendChild(nameInput); //colocando o input dentro da li    
    d
}

sdsds


//função de remover contato
function removeContatct(){

}