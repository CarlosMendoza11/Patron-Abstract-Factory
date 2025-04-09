function procesarPago() {
    const tipo = document.getElementById("paymentType").value;
    const monto = document.getElementById("amount").value;
    const canal = document.getElementById("channel").value;
    const tema = document.getElementById("themeSelector").value;
  
    ThemeFactory.applyTheme(tema); // Aplicar tema con Abstract Factory
  
    fetch(`http://localhost:8080/api/pagos?tipo=${tipo}&monto=${monto}&canal=${canal}`, {
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById("resultado").innerText = `✅ Pago procesado: $${data}`;
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("resultado").innerText = "❌ Error al procesar el pago.";
      });
  }
  