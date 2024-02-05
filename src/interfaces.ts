type robot = {
    id: number;
    name: string;
}

interface robot2 {
    id: number | string;
    name: string;
}

const bot1: robot = {
    id: 1,
    name: "Jerry"
}

const bot2: robot2 = {
    id: "2",
    name: "Bong-Ho"
}

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
 }

 sayHello(): string{
    return "hello";
 }
}

const p = new Pessoa(1, "Suarez");
console.log(p.sayHello());