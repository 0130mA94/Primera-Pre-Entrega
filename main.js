function saludar() {
    saludar = alert("!Bienvenidos a la cueva del comic!");
    console.log ("!Bienvenidos a la cueva del comic!");
}
saludar();

let NombreUsuario = prompt("Ingrese el Usuario");
let PasswordIngresado = prompt("Ingrese la contraseña");
for (let i = 0; i < 2; i++ ){
if((NombreUsuario === "Coder") &&( PasswordIngresado === "House")){
    alert("Todo correcto! podés entrar capo");
    

    break;    

} else {
        NombreUsuario = alert("Usuario y contraseña incorrectas, conectá esas neuronas!");
        NombreUsuario = prompt("Ingrese el Usuario");
        PasswordIngresado = prompt("Ingrese la contraseña");
        
}
}


