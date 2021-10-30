console.log("Praticando listas, loops e condicionais")

//Declarando um array para armazenar os convidados da festa
const listaDeConvidados = new Array(`Astolfo`, `José`, `Kleiton`, `Natan`);

//Declarando um array para armazenar pessoas que estão tentando entrar na festa
const pessoasParaEntrar = new Array(`José`, `Astolfo`, `Agostinho`, `Kleiton`, `Natan`, `Clark`);

//Variavel para contar os convidados que já estão na festa
let convidadosPresente = 0;


while(convidadosPresente < pessoasParaEntrar.length){
    if(listaDeConvidados.includes(pessoasParaEntrar[convidadosPresente])){
        console.log("Seja bem vindo, ",pessoasParaEntrar[convidadosPresente]);
        pessoasParaEntrar.splice(convidadosPresente.toString,1);  
    }else{
        console.log("O,", pessoasParaEntrar[convidadosPresente],", não é um convidado!");
        pessoasParaEntrar.splice(convidadosPresente.toString,1);
    }
}