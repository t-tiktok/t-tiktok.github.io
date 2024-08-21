const constraints = { video: true }

const stream = await navigator.mediaDevices.getUserMedia(constraints)

const videoTracks = stream.getVideoTracks()

const videoTrack = stream.getVideoTracks()[0]

const trackCapabilities = videoTrack.getCapabilities()

const trackSettings = videoTrack.getSettings()

const advancedConstraints = {
    contrast: 75,
    sharpness: 75
   }
   // https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-applyconstraints
await applyConstraints({ advanced: [advancedConstraints] })

const imageCapture = new ImageCapture(videoTrack)

const photoCapabilities = await imageCapture.getPhotoCapabilities()
// https://www.w3.org/TR/image-capture/#dom-imagecapture-getphotosettings
const photoSettings = await imageCapture.getPhotoSettings()

const blob = await imageCapture.takePhoto(photoSettings)
