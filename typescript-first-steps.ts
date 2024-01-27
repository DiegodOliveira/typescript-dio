type Carro = {
    name: String;
    maker: String;
    year: number;
}

let Civic: Carro = {
    name : "Civic",
    maker : "Honda",
    year : 2015
}

//console.log(Civic)

let infos: (string|number)[] = ["Diegão",20];

let boleto: [number,number,string] = [20,30,"energia"];

//console.log(infos)

function addNumber(x: number,y: number) : number{
    return x + y;
}

let soma: number = addNumber(4, 11);


// Neste caso o :string após a declaração do addToHello deixa a declaração explícita
function addToHello(name: string): string{
    return `Hello ${name}`
}

async function getDatabase(id: number): Promise <string> {
    return "Diego";
}

//console.log(addToHello("Diego"))

type robot = {
    id: number | string;
    name: string;
};

const bot: robot = {
    id: "1",
    name: "Megaman"
};

const bot1: robot = {
    id: 2,
    name: "Doomsday"
}

console.log((bot1.id = 3));



