// função para checar idade

function checkAge(age) {
    return new Promise((resolve, rejected) => {
        if(age) {
            resolve(age > 18)
        }else {
            rejected(new Error ('age is required'))
        }
    })
}

// função que pega a idade em base do ano de aniversario

function getAge(birthday) {
    return new Promise((resolve, rejected) => {
        if(birthday) {
            const birthYear = new Date(birthday).getFullYear()//extrai o ano da data do birthday
            const currentYear = new Date().getFullYear() //extrai o ano da data atual
            resolve(currentYear - birthYear)
        }else {
            rejected(new Error ('birthday is required'))
        }
    })
}

getAge('2006-09-02')
.then(age => {
    return checkAge(age)
})
.then(isOver18 => {
    if(isOver18) {
        console.log('Maior de idade')
    }else {
        console.log('Menor de Idade')
    }
}).catch((err) => console.log(err))