function obtenerListaUsuarios(){
    var ListaUsuarios = JSON.parse(localStorage.getItem('ListaUsuarios'));

    if(ListaUsuarios == null){
        ListaUsuarios =
        [
            ['1','javier@gmail.com','Javier','Espinales','12345','1'],
            ['2','UsuarioNuevo','usuario@gmail.com','usuario','2']
        ]
    }
    return ListaUsuarios;
}

function validarCredenciales(pCorreo, pContraseña){
    var ListaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < ListaUsuarios.length; i++){
        if(pCorreo == ListaUsuarios[i][1] &&   pContraseña == ListaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', ListaUsuarios[i][2] + '' + ListaUsuarios[i][3]);
            sessionStorage.setItem('rolUsuario',ListaUsuarios[i][5]);
        }
    }

    return bAcceso;
}