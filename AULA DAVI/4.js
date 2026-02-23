//Criar um programa que exiba as seguintes mensagens: SE menor que 16 anos "não pode votar". SE tiver entre 16 e 18, e maior que 70 anos "Voto facultativo". Se tiver entre 18 e 70 anos "Voto obrigatório".
let idade = 71;
    
if (idade < 16) {
        console.log('não pode votar');
    } else if (idade >= 16 && idade < 18 || idade > 70) {
        console.log('Voto facutativo')
    }else{
        console.log('Voto Obrigatório')
        }