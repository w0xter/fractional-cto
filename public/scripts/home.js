const form = document.querySelector('#fit-form');
const result = document.querySelector('#message-result');
const prepared = document.querySelector('#prepared');
const copyStatus = document.querySelector('#copy-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  prepared.value = `Hola Luis,\n\nNuestra situación: ${document.querySelector('#stage').value}.\n\nEl reto que nos gustaría abordar:\n${document.querySelector('#challenge').value.trim()}\n\nMe gustaría conversar sobre cómo podríamos trabajar juntos.`;
  result.hidden = false;
  prepared.focus();
});
document.querySelector('#copy-message').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(prepared.value);
    copyStatus.textContent = 'Mensaje copiado.';
  } catch {
    prepared.focus();
    prepared.select();
    copyStatus.textContent = 'Selecciona y copia el mensaje manualmente.';
  }
});
