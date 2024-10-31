function saudaçaoaomundo() {
    console.log("Olá, mundo!");
};
saudaçaoaomundo();

function saudaçaoalguem(nome) {
    console.log(`Olá, ${nome}!`);
};
saudaçaoalguem("Puta");

function dobro(numero) {
    return numero * 2;
};
console.log(dobro(650));

function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
};
console.log(media(6, 5, 4));

function maior(numero1M, numero2M) {
    if (numero1M > numero2M) {
        return numero1M;
    } else {
        return numero2M;
    };
};
console.log(maior(3000, 2564));

function quadrado(numeroBase) {
    return numeroBase * numeroBase;
};
console.log(quadrado(7));
