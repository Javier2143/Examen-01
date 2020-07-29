document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    
    var aCorreo = '';
    var aContraseña = '';
    var bAcesso = false;
    
    aCorreo = document.querySelector('#texto').value;
    aContraseña = document.querySelector('#contra').value;
    
    bAcesso = validarCredenciales(aCorreo,aContraseña);
   
    if(bAcesso == true){
        ingresar();
    }
   
}
function ingresar(){
    var rol = sessionStorage.getItem('rolUsuario');
    switch(rol){

        case'1' :
        window.location.href = 'administrador.html';
        break
        case'2' :
        window.location.href = 'usuario.html';
        break;

    
    }
}