function execute() {
    return new Promise ((resolve,rejected) => {
        console.log('a promise pode está sendo executada    ')
        setTimeout(()=>{
            console.log('resolvenod a promisse...')
            resolve('Resultado')
        }, 1000)
    })
}

const p = console.log(p)

setTimeout(() => {
    console.log('p')
},5 * 1000)