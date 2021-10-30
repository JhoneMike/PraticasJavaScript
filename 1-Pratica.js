console.log("Praticando listas e condicionais")

const listaDeConvidados = new Array(`José`, `Astolfo`, `Kleiton`, `Natan`);
const idadeConvidado = 17;
const acompanhadoPorUmMaior = true;

let nomeConvidado = "José";
let nomeConvidado2 = `Astolfo`;
let nomeConvidado3 = `Kleiton`;
let nomeConvidado4 = `Natan`;


//Praticando operador AND
if(idadeConvidado >= 18 && listaDeConvidados.includes(nomeConvidado)){
    console.log(`Seja bem vindo ${nomeConvidado}, aproveite a festa`);
}else if(listaDeConvidados.includes(nomeConvidado) && acompanhadoPorUmMaior){
    console.log(`Seja bem vindo ${nomeConvidado}, porém não será permitido o consumo de bebidas alcoolicas`);
}else{
    console.log("Entrada não permitida!");
}

listaDeConvidados.push(`Andrei`);
listaDeConvidados.push(`Sidnei`);

console.log(listaDeConvidados);

if(listaDeConvidados.includes(nomeConvidado)){
    listaDeConvidados.splice(nomeConvidado, 1);
}
if(listaDeConvidados.includes(nomeConvidado2)){
    listaDeConvidados.splice(nomeConvidado2, 1);
}

console.log(listaDeConvidados);