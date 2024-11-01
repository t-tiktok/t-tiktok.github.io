const form = document.getElementById('textForm');
const inputText = document.getElementById('inputText');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращает перезагрузку страницы

  // Получаем текст из поля ввода
  const text = inputText.value;

  // Отправка данных на сервер с помощью AJAX
  fetch('/update-text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  })
  .then(response => {
    if (response.ok) {
      // Обновление страницы exec.html
      window.location.href = 'site/exec.html';
    } else {
      console.error('Ошибка отправки данных');
    }
  })
  .catch(error => {
    console.error('Ошибка AJAX:', error);
  });
});

