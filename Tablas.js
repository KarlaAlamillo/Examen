const contenedor = document.getElementById("tablas");

for (let i = 1; i <= 20; i++) {
    let tabla = document.createElement("div");
    tabla.className = "tabla";

    let titulo = document.createElement("h3");
    titulo.textContent = "Tabla del " + i;
    tabla.appendChild(titulo);

    for (let j = 1; j <= 10; j++) {
        let linea = document.createElement("p");
        linea.textContent = i + " x " + j + " = " + (i * j);
        tabla.appendChild(linea);
    }

    contenedor.appendChild(tabla);
}
