type heroi = {
    name: string;
    vulgo: string;
}

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
}

printaObjeto({
    name: "Vandiscleison",
    vulgo: "Superman",
})

function addNumber(x: number, y: number): number{
    return x + y;
}

let soma: number = addNumber(4,7);

function CallToPhone(phone: string | number): number| string{
    return phone;
}


