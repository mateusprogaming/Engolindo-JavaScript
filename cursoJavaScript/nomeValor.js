const saudacao = "ola" //contexto lexo 1 global

function exec(){
    const saudacao = "fala bebe" //contexto lexo 2
    return saudacao
}

//objeto sao grupos aninhados de pares e valores
const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 96,
    endereco: {
        logradouro: 'rua muito legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco.numero)
