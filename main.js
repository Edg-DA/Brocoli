// main.js - lógica básica para la tasa de cambio
document.getElementById('update-rate-btn').onclick = function() {
  const input = document.getElementById('exchange-rate-input');
  const rate = parseFloat(input.value);
  if (isNaN(rate) || rate <= 0) {
    alert('Ingrese una tasa válida mayor a 0');
    return;
  }
  localStorage.setItem('exchangeRate', rate);
  document.getElementById('last-rate-update').textContent = 'Última actualización: ' + new Date().toLocaleString();
  alert('Tasa actualizada a Bs/' + rate);
};

// Al cargar, intenta recuperar la tasa guardada
window.onload = function() {
  const rate = localStorage.getItem('exchangeRate');
  if (rate) {
    document.getElementById('exchange-rate-input').value = rate;
    document.getElementById('last-rate-update').textContent = 'Última actualización: ' + new Date().toLocaleString();
  }
};