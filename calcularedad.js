// Calcula la edad
function calcularEdad() {
  const input = document.getElementById("birthdate").value;
  const resultado = document.getElementById("resultado");

  if (!input) {
    resultado.textContent = "⚠️ Por favor ingresa tu fecha de nacimiento.";
    resultado.className = "error animar";
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
  resultado.className = "exito animar";
}

// Simula envío a una API
function simularAPI() {
  const input = document.getElementById("birthdate").value;
  const resultado = document.getElementById("resultado");

  if (!input) {
    alert("⚠️ Primero Ingresa tu fecha de nacimiento.");
    return;
  }

  const data = {
    fechaNacimiento: input,
    calculadoEn: new Date().toISOString()
  };

  // Simula POST
  console.log("📤 Simulando POST con JSON:");
  console.log(JSON.stringify(data, null, 2)); // Formato bonito
  console.log("💾 Datos almacenados en la memoria simulada.");

  // Muestra mensaje visual
  resultado.textContent = "✅ Datos enviados a API {simulado}";
  resultado.className = "enviado animar";
}
