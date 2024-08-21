if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      // Получен доступ к камере
      // Отобразить камеру на странице
      var video = document.createElement('video');
      video.srcObject = stream;
      video.play();
      // ... остальной код 
    })
    .catch(function(err) {
      console.error('Ошибка доступа к камере:', err);
    });
} else {
  console.error('Ваш браузер не поддерживает MediaDevices API.');
}
