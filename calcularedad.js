// Calcula la edad
function calcularEdad() {
  const input = document.getElementById("birthdate").value;
  const resultado = document.getElementById("resultado");

  if (!input) {
    resultado.textContent = "Por favor ingresa tu fecha de nacimiento.";
    resultado.classList.add("error");
    return;
  }

  const nacimiento = new Date(input);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  resultado.textContent = `🎉 Tienes ${edad} años 🎉`;
  resultado.classList.add("animar");
}

// Simula envío a una API
function simularAPI() {
  const input = document.getElementById("birthdate").value;
  const resultado = document.getElementById("resultado");

  if (!input) {
    alert("Primero ingresa tu fecha de nacimiento.");
    return;
  }

  const data = {
    fechaNacimiento: input,
    calculadoEn: new Date().toISOString()
  };

  console.log("Simulando POST con JSON:");
  console.log(JSON.stringify(data));

  // Simulación de respuesta de API
  resultado.textContent = "✅ Datos enviados a API (simulado)";
  resultado.classList.add("enviado");
}
