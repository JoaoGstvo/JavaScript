document.getElementById('dobroForm').addEventListener('submit', function(event){
    event.preventDefault();

    const numero = parseFloat(document.getElementById('numero').value)

    const dobro = numero * 2;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = dobro

});