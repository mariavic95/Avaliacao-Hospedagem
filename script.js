function validar(){
    var senha1 = forcadastro.senha1.value;
    var senha2 = forcadastro.senha2.value;

    if (senha1 != senha2) {
        alert('Suas senhas devem ser iguais!');
        return false;
    }
}
