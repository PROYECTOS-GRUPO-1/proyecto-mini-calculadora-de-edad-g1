document.getElementById("ageForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  let edad = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) edad--;

  document.getElementById("resultado").textContent = `Tienes ${edad} años.`;

  const data = {
    fechaNacimiento: dob.toISOString().split("T")[0],
    edadCalculada: edad,
    fechaCalculo: today.toISOString()
  };

  try {
    const res = await fetch("http://localhost:3000/calculos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Error al guardar");

    const saved = await res.json();
    document.getElementById("apiStatus").textContent =
      `✅ Guardado con ID ${saved.id.toString().toUpperCase()}`
    console.log("Guardado en la API:", saved);
  } catch (err) {
    document.getElementById("apiStatus").textContent =
      "⚠️ No se pudo guardar en la API";
    console.error(err);
  }
});
