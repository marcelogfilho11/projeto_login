if (!localStorage.getItem('usuarios')) {
    const bancoinicial = [
        { usuario: 'admin', senha:'123'},
        { usuario: 'leticia', senha: '2902'}
    ];
    localStorage.setItem('usuario', JSON.stringify(bancoInicial));
}

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const usuarioDigitado = document.getElementById('usuario').value;
    const senhaDigitada = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuario'));
    
    const usuarioEncontrado = usuarios.find(function(user){
        return user.usuario === usuarioDigitado && user.senha === senhaDigitada;
    });

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', usuarioDigitado);
        window.location.href = 'home.html';
    } else {
        alert("Usuário não encontrado. Tente novamente");
    }
});

const btnTreinoA = document.getElementById('btntreinoa');
if(btnTreinoA){
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if(!usuarioLogado){
        window.location.href = 'index.html'
    }
}

const treinos = {
    A: {
        titulo: 'Treino A: Peito, triceps',
        exercicios: [
            'Supino',
            'voador',
            'crucifixo',
            'triceps' 
        ]
    },
    B: {
            título: 'Treino B: Costas e biceps',
            exercicios: [
                'puxada',
                'remada',
                ''
            ]
    }
}