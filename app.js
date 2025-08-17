let movimientos = [];


function registrarMovimiento() {
  let nombre = prompt("Nombre del movimiento:");
  if (!nombre || nombre.trim() === "") {
    console.log("❌ Error: el nombre no puede estar vacío.");
    return;
  }

  let tipo = prompt("Tipo (Ingreso/Egreso):");
  if (tipo !== "Ingreso" && tipo !== "Egreso") {
    console.log("❌ Error: el tipo debe ser 'Ingreso' o 'Egreso'.");
    return;
  }

  let monto = parseFloat(prompt("Monto:"));
  if (isNaN(monto) || monto <= 0) {
    console.log("❌ Error: el monto debe ser mayor a 0.");
    return;
  }

  movimientos.push({ nombre, tipo, monto });
  console.log("✅ Movimiento registrado:", nombre, tipo, monto);
}

function calcularTotalSaldo() {
  let saldo = 0;
  for (let i = 0; i < movimientos.length; i++) {
    if (movimientos[i].tipo === "Ingreso") {
      saldo += movimientos[i].monto;
    } else if (movimientos[i].tipo === "Egreso") {
      saldo -= movimientos[i].monto;
    }
  }
  return saldo;
}

function mostrarResumen() {
  console.log("\nResumen Final");
  console.log("-----------------------");
  console.log("Total de movimientos registrados:", movimientos.length);
  console.log("Saldo total: $" + calcularTotalSaldo().toFixed(2));


  let totalIngresos = 0;
  let totalEgresos = 0;

  for (let i = 0; i < movimientos.length; i++) {
    if (movimientos[i].tipo === "Ingreso") {
      totalIngresos += movimientos[i].monto;
    } else {
      totalEgresos += movimientos[i].monto;
    }
  }

  console.log("\nDesglose por tipo:");
  if (totalIngresos > 0) console.log("- Ingresos: $" + totalIngresos.toFixed(2));
  if (totalEgresos > 0) console.log("- Egresos: $" + totalEgresos.toFixed(2));
}

console.log("Registro de Gastos");
console.log("-----------------------");

let continuar = "si";

while (continuar.toLowerCase() === "si") {
  registrarMovimiento();
  continuar = prompt("¿Registrar otro movimiento? (si/no):");
}

mostrarResumen();
