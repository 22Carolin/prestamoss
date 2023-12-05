    
    
    document.getElementById('calcular').addEventListener('click', function (event)
     {
    let capital = parseFloat(document.getElementById('capital').value);
    let interes = parseFloat(document.getElementById('interes').value) / 100 / 12;
    let plazo = parseInt(document.getElementById('plazo').value);

    let cuotaMensual = (capital * interes) / (1 - Math.pow(1 + interes, -plazo));
    let totalIntereses = cuotaMensual * plazo - capital;

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Cuota mensual estimada: <strong>$" + cuotaMensual.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "</strong><br>Total del interés pagado: <strong>$" + totalIntereses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "</strong>";
    resultadoDiv.style.display = 'block'; })

    
    document.getElementById('calcular').addEventListener('click', function (event) {

        let capital = document.getElementById('capital').value;
        let interes = document.getElementById('interes').value; 
        let plazo = document.getElementById('plazo').value;
      
        if(!capital || !interes || !plazo) {
          document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">Todos los campos son requeridos</div>';
          return;
        }
      
        // Resto del código para calcular y mostrar el préstamo
      
      });

