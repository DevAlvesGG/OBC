function execute() {
    return new Promise ((resolve,rejected) => {
        console.log('a promise pode está sendo executada    ')
        setTimeout(()=>{
            if(true) {
                rejected("a promise foi rejeitada")
            }else{
                console.log("resolvendo a promise")
            }
        }, 1000)
    })
}

execute().then((result) => {
    console.log(`A promisse foi resolvida . O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A primise foi rejeitada. O erro foi: ${err}`)
}).finally(() => {
    console.log("A promise foi finalizada")
})