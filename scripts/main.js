const constraints = { video: true };

const stream = await navigator.mediaDevices.getUserMedia(constraints);

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

const photoCapabilities = await imageCapture.getPhotoCapabilities();

const photoSettings = await imageCapture.getPhotoSettings();

const blob = await imageCapture.takePhoto(photoSettings);

// Create a temporary URL for the blob
const url = URL.createObjectURL(blob);

// Display the image in a new window or tab
window.open(url, '_blank');

// Close the stream
stream.getTracks().forEach(track => track.stop());

// Clean up the URL
URL.revokeObjectURL(url);
