//Desestruturando Objetos
const person = {
    name: 'Lucas',
    job: 'Developer',
    parents: ['Anaquin', 'Maria']
}
const { name, job, parents } = person
console.log(name, job, parents)

//Desestruturando Arrays
const fruits = ['banana', 'apple', 'orange']
const[fruit1, fruit2, fruit3] = fruits
console.log(fruit1, fruit2, fruit3)


//Desestruturando Objetos ( objeto person do inicio do arquivo )
function createUser ({ name, job, parents}){
    return {
        name,
        job,
        parents
    }
}
const user = createUser(person)
console.log(user)