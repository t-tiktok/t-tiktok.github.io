const constraints = { video: true };

const stream = navigator.mediaDevices.getUserMedia(constraints);

const videoTracks = stream.getVideoTracks();

const videoTrack = stream.getVideoTracks()[0];

const trackCapabilities = videoTrack.getCapabilities();

const trackSettings = videoTrack.getSettings();

const advancedConstraints = {
    contrast: 75,
    sharpness: 75
};

// Apply advanced constraints
await videoTrack.applyConstraints({ advanced: [advancedConstraints] });

const imageCapture = new ImageCapture(videoTrack);

const photoCapabilities = imageCapture.getPhotoCapabilities();

const photoSettings = imageCapture.getPhotoSettings();

const blob = imageCapture.takePhoto(photoSettings);

// Create a temporary URL for the blob
const url = URL.createObjectURL(blob);

// Display the image in a new window or tab
window.open(url, '_blank');

// Close the stream
stream.getTracks().forEach(track => track.stop());

// Clean up the URL
