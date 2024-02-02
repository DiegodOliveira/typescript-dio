let ligado: boolean = true;
let nome: string = "Diego";
let idade: number = 20;
let altura: number = 170;

let nulo: null = null;
let indefinid0: undefined = undefined;

let retorno: void;
let retornoView: any = false;

let product: object = {
    name: "Diego",
    cidade: "jp",
    idade: 20
}

type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let sapato: produtoLoja = {
    nome: "Air Jordan",
    preco: 500.00,
    unidades: 10
}

let dados: string[] = ["Leonaro","Arthur","William"];
let dados2: string[] = ["Filipe","Eli","Maykon"];

let infos: (string | number)[] = [322, "Lizanka"];

let boleto: [string, number, number] = ["Água",399,89];

let ultimoNome = dados2.pop()

console.log(ultimoNome);

let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());