function verificarSituacao() {
    const media = parseFloat(document.getElementById("media").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(media)) {
        resultado.textContent = "Por favor, digite um número válido.";
        resultado.style.color = "red";
        return;        
    }

    if (media < 5) {
        resultado.textContent = "REP";
        resultado.style.color = "red";
    } else if (media >= 5 && media < 7) {
        resultado.textContent = "REC";
        resultado.style.color = "orange";
    } else if (media >= 7) {
        resultado.textContent = "APR";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Valor inválido.";
        resultado.style.color = "red";
    }    
}