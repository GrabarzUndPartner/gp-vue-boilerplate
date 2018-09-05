export function getVideoDevices() {
  return navigator.mediaDevices
    .enumerateDevices()
    .then(devices => devices.filter(device => device.kind === 'videoinput'));
}

export function getNextVideoDevice(currentDevice) {
  return getVideoDevices().then(devices => {
    const pos = devices.findIndex(device => {
      return device.deviceId === currentDevice.deviceId;
    });
    const posNext = (pos + 1) % devices.length;
    return devices[posNext];
  });
}

export function getStream(config) {
  return navigator.mediaDevices.getUserMedia({ video: config }).catch(error => {
    console.log(error);
  });
}

export function getVideoStreamSettings(stream) {
  return stream
    .getVideoTracks()
    .find(track => track.enabled)
    .getSettings();
}
