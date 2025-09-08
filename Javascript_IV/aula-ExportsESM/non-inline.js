function group(){
    console.log("Export nomeado group")
}


export default function exportDefault(){ // export default não-inline, 
    console.log(`Export default não-inline`)
}

export { group, exportDefault, exportDefault as defaultInlinE } // export nomeado não-inline