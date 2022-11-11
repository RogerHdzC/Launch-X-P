function moverPosicionRandom(elem){
    elem.style.position = 'absolute';
    elem.style.top = Math.random() * (window.innerHeight - elem.offsetHeight) + 'px';
    elem.style.left = Math.random() * (window.innerHeight - elem.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)});

btnSi.addEventListener('click',function(e) {
    alert('Sabía que dirías que sí. Casemonos ya y tengamos hijos. TE AMO!!!! ')
    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\audio1506636149.m4a');
    cancion.play();
});