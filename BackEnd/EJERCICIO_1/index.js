const parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function(){
    cambiaColorAleatorio();
}

function cambiaColorAleatorio(){
    const colors = [
        "red",
        "blue",
        "black",
        "cyan"
    ]

    parrafoInicial.style.color = colors[Math.floor(Math.random()* colors.length)];
}