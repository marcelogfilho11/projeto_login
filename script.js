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
        alert("Usuário encontrado. Seja bem-vindo:" + usuarioDigitado);
    } else {
        alert("Usuário não encontrado. Tente novamente");
    }
});