function mandar() {
    var Nombres = document.getElementById("nombre").value;
    var Apellidos = document.getElementById("apellido").value;
    var Email = document.getElementById("email").value;
    var Usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("contraseña").value;
    var Contraseña2 = document.getElementById("contraseña2").value;
  
    console.log("Nombres: " + Nombres);
    console.log("Apellidos: " + Apellidos);
    console.log("Email: " + Email);
    console.log("Usuario: " + Usuario);
    console.log("Contraseña: " + Contraseña);
    console.log("Verificacion de contraseña: " + Contraseña2);
  
    if (Contraseña === '') {
      alert("Por favor, ingrese la contraseña");
      return false;
    } else if (Contraseña2 === '') {
      alert("Por favor, ingrese la confirmación de contraseña");
      return false;
    } else if (Contraseña !== Contraseña2) {
      alert("\nLas contraseñas no coinciden: Por favor, digite los caracteres de nuevo...");
      return false;
    } else {
      alert("Las contraseñas coinciden");
      return true;
    }
  }
  