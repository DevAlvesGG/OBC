//função de adicionar contato
function addContact (){
    const contactSection = document.getElementById('contact-list');

    const h3 = document.createElement('h3'); //Criamos um elemento H3
    h3.innerText = "Contato";  //colocamos "Contato" como texto da tag H3
    
    const ul = document.createElement('ul'); //Criamos uma Lista 

    const nameLi = document.createElement('li'); // Criamos uma li para colocar dentro da lista
    nameLi.innerText = "Nome: " //colocamos "Nome :" como texto do elemento 'nameLi'
    ul.appendChild(nameLi); //coloca o elemento nameLi dentro do elemento ul
    ul.appendChild(document.createElement('br'))//criamos um elemento br dentro do appendChild para pular uma linha e dar um espaço entre os elementos

    const nameInput = document.createElement('input'); // Criamos um elemento input
    nameInput.type = 'text'  // Determinamos que o tipo do input é 'texto'
    nameInput.name = 'fullname'  // Determinamos o nome do input é 'fullname'
    nameLi.appendChild(nameInput); //colocando o input dentro da li    

    const phoneLi = document.createElement('li');// cria um novo elemento li
    phoneLi.innerText = "Telefone: " //colocamos "Telefone: " como texto do elemento phoneLi
    const phoneInput = document.createElement('input'); // criamos um elemento input
    phoneInput.type = 'text' //determinamos que o tipo do input será texto
    phoneInput.name = 'phone' //determinamos que o nome da propriedade será phone
    phoneLi.appendChild(phoneInput); //colocamos o input dentro do elemento phoneLi
    ul.appendChild(phoneLi); //colocamos o elemento phoneLi dentro do elemento ul
    ul.appendChild(document.createElement('br'))//criamos um elemento br dentro do appendChild para pular uma linha e dar um espaço entre os elementos


    const addressLi = document.createElement('li');// cria um elemento li
    addressLi.innerText = "Endereço: "//coloca "Endereço: " como texto do elemento li
    const inputAddress = document.createElement('input');// cria um elemento input 
    inputAddress.type = 'text' //determina que o elemento input é do tipo texto
    inputAddress.name = 'address' //determina o nome da propriedade do input 
    addressLi.appendChild(inputAddress);// coloca o input dentro da li
    ul.appendChild(addressLi); // coloca o elemento li dentro da lista
    ul.appendChild(document.createElement('br'))//criamos um elemento br dentro do appendChild para pular uma linha e dar um espaço entre os elementos


    contactSection.append(h3,ul); //coloca os elementos h3 e ul dentro da section
}
//função de remover contato
function removeContact(){
    const contactSection = document.getElementById('contact-list') //acessamos o local onde é criado os contatos

    const titles = document.getElementsByTagName('h3')//acessa o elemento h3 e atribuimos a constante titles (para referenciar ela na hora de remover)
    const contacts = document.getElementsByTagName('ul')//acessa o elemento ul e atribuimos a constante contacts (para referenciar ela na hora de remover)
    
    contactSection.removeChild(titles[titles.length - 1]) //utilizamos o metodo (removeChild) para remover, e dentro dele, acessamos o elemento
                                                          // titles na sua ultima posição, removento sempre o ultimo elemento

    contactSection.removeChild(contacts[contacts.length -1])//mesma explicação do comentario acima
                                                        
}