function appendToExpression(value) {
     document.getElementById('expression').value += value;
 }

 function clearExpression() {
     document.getElementById('expression').value = '';
 }

 function deleteLastCharacter() {
     var expression = document.getElementById('expression').value;
     document.getElementById('expression').value = expression.slice(0, -1);
 }

 function evaluateExpression() {
     var expression = document.getElementById('expression').value;
     var result;
     try {
         result = eval(expression);
         document.getElementById('expression').value = result;
     } catch (error) {
         document.getElementById('expression').value = 'Invalid expression';
     }
 }
