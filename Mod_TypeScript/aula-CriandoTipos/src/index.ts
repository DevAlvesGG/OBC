let options : "yes" | "no" | "maybe" //pode ser dp tipo literal 'yes' ou 'no' ou 'maybe'
                                     // estes são os tipos literais 

//options = 1 //(erro) O tipo '1' não pode ser atribuído ao tipo '"yes" | "no" | "maybe"
options = "yes" 
options = "no"
options = "maybe"



//criando o proprio tipo

type Options = "yes" | "no" | "maybe" //criando meus tipos

let option : Options //armazenando meus tipos em option

if(option === "yes") { // e utilizando os tipos
    console.log("Do tipo 'yes'")
}else if(option === "no"){
    console.log("Do tipo 'no'")
}else{
    console.log("Do tipo 'maybe'")
}