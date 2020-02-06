const usuarios = [
    { 
        nome: 'Carlos', 
        tecnologias: ['HTML', 'CSS']
    },
    { 
        nome: 'Jasmine',
        tecnologias: ['JavaScript', "CSS"]
    },
    { 
        nome: 'Tuane',
        tecnologias: ['HTML', "Node.js"]
    }
]

function enviaMensagem(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(`${lista[i].nome} trabalha com ${lista[i].tecnologias}`);
    }
    
}

enviaMensagem(usuarios)
