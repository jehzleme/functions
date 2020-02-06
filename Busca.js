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

function checaSeUsaCSS(usuario) {
    for (let i=0; i < usuario.tecnologias.length; i++){
        if(usuario.tecnologias[i] == 'CSS'){
            return true
        }
    }
}

for (let i=0; i<usuarios.length; i++){
    const usuarioTrabalhaComCSS =checaSeUsaCSS(usuarios[i]);
    if (usuarioTrabalhaComCSS){
        console.log (`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}