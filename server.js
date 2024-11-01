const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Маршрут для обработки отправки текста
app.post('/update-text', (req, res) => {
  const text = req.body.text;

  // Запись текста в файл exec.html
  fs.writeFileSync('site/exec.html', `<h1>${text}</h1>`);

  res.send('Текст обновлен');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});

