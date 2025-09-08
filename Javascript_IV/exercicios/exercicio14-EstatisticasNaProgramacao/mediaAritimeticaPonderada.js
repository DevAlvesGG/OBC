// - Média Aritimética Ponderada: Pode ser calculada multiplicando cada valor pelo seu peso, somando os resultados e dividindo pela soma dos pesos.

const mediaAritimeticaPonderada = (...entries) => {
    const sum = entries.reduce((acc, {number, weight}) => acc + (number * weight), 0);
    const waightSum = entries.reduce((acc, entry) => acc + entry.weight, 0);
    return sum / waightSum
}

console.log(`Aritimetica Ponderada: ${mediaAritimeticaPonderada(
    { number: 10, weight:5},
    { number: 4, weight: 3}, 
    { number: 6, weight: 2})
}`);
    