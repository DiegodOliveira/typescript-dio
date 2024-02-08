function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);

const stgArray = concatArray<string[]>(["Diego", "Vegeta"], ["Goku"]);

// Neste caso numArray foi definido acima para receber apenas números
// com a especificação de forma dinâmica.
// numArray.push("Saitama");
console.log(numArray);
console.log(stgArray);

