function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(8));
console.log(classificarNota(5));


let corSemaforo = "verde";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;

    default:
        console.log("Cor inválida");
}


console.log("Tabuada do 5");

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + 5 * i);
}


console.log("Contagem regressiva");

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}


console.log("Números pares e ímpares com FOR");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}


console.log("Números pares e ímpares com WHILE");

let numero = 1;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }

    numero++;
}


function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            return "Número inválido";
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(4));
console.log(diaDaSemana(7));
console.log(diaDaSemana(10));