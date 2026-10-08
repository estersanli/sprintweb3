console.log(ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}


try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro:", erro.message);
}

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

console.log(ehMaiorDeIdadeExpressao(20));


function dobro(numero) {
    return numero * 2;
}

console.log(dobro(5));


const dobroExpressao = function(numero) {
    return numero * 2;
};

console.log(dobroExpressao(5));


const dobroArrow = numero => numero * 2;

console.log(dobroArrow(5));


function dobroPadrao(numero = 1) {
    return numero * 2;
}

console.log(dobroPadrao());
console.log(dobroPadrao(5));