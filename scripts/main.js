const constraints = { video: true };

async function captureAndDisplayImage() { // Wrap in an async function
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    const videoTracks = stream.getVideoTracks();
    const videoTrack = videoTracks[0];

    const trackCapabilities = videoTrack.getCapabilities();
    const trackSettings = videoTrack.getSettings();

    const advancedConstraints = {
      contrast: 75,
      sharpness: 75
    };

    await videoTrack.applyConstraints({ advanced: [advancedConstraints] });

    const imageCapture = new ImageCapture(videoTrack);

    const photoCapabilities = await imageCapture.getPhotoCapabilities();
    const photoSettings = await imageCapture.getPhotoSettings();

    const blob = await imageCapture.takePhoto(photoSettings);

    const url = URL.createObjectURL(blob);
    console.log(1);
    window.open(url, '_blank');

    stream.getTracks().forEach(track => track.stop());
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error capturing image:', error); 
    // Handle the error gracefully, maybe display a message to the user
  }
}

captureAndDisplayImage(); // Call the async function
