//script file
document.getElementById('integralForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    //
    const func = document.getElementById('function').value.trim();
    const a = parseFloat(document.getElementById('lowerBound').value);
    const b = parseFloat(document.getElementById('upperBound').value);
    
    if (isNaN(a) || isNaN(b) || func === "") {
      alert("Please fill in all fields correctly.");
      return;
    }
  
   
    const result = calculateDefiniteIntegral(func, a, b);
  

    document.getElementById('result').style.display = 'block';
    document.getElementById('resultValue').textContent = `Integral result: ${result.toFixed(6)}`;
  });
  
  
  function calculateDefiniteIntegral(func, a, b) {
    const n = 1000; 
    const h = (b - a) / n;  
    let sum = 0;
  
    
    const f = (x) => {
      try {
        
        return math.evaluate(func.replace(/x/g, x));
      } catch (e) {
        alert("Invalid function format. Please check the syntax.");
        return NaN;
      }
    };
  
    
    sum += f(a) + f(b);  
    for (let i = 1; i < n; i++) {
      sum += 2 * f(a + i * h);  
    }
  
    const result = (h / 2) * sum; 
    console.log("Integral calculation:", result);  
    return result;
  }
  
