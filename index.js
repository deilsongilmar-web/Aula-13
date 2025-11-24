document.addEventListener('DOMContentLoaded', () => {
    
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');
    const btnCalcular = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultado');

    
    function calcularIMC() {
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira valores válidos para peso e altura.</p>';
            return;
        }

    
        const imc = peso / (altura * altura);
        let classificacao = '';

        
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc < 34.9) {
            classificacao = "Obesidade grau I";
        } else if (imc < 39.9) {
            classificacao = "Obesidade grau II";
        } else {
            classificacao = "Obesidade grau III (Mórbida)";
        }

        
        resultadoDiv.innerHTML = `
            <h2>Resultado</h2>
            <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
            <p>Classificação: <strong>${classificacao}</strong></p>
            <p>Tente se manter na faixa de 18.5 a 24.9.</p>
        `;
    }

    
    btnCalcular.addEventListener('click', calcularIMC);
});
