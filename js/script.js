
/*pedir un dato al usario 1 vez mediante prompt, y mostrar alerta con mensaje "Gracias*/

let nombre;
for(let i = 0;i<1;i++){
    nombre = prompt ('Ingresá tu código de cliente, por favor');
    alert('Gracias, '+ nombre);
}

/*pedir passGuardado, si passGuardado es correcto mostrar alerta con mensaje "Bienvenido/a a Ozali"*/

let passGuardado = "123456789";
let continuar = true;
let passUsuario = prompt("Ingresá tu contraseña");


while (continuar) {
  
  if (passGuardado === passUsuario) {
    alert("Bienvenido/a a Ozali");
    continuar = false;
    break;
  }

  alert('Contraseña incorrecta');
    passUsuario = prompt("Ingresá tu contraseña");
} 
