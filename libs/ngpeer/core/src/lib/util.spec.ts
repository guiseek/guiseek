
describe('ngpeerCore', () => {
  it('should work', () => {
    expect(true).toBe(true)
  });
});



// navigator.mediaDevices.enumerateDevices = function() {
//   return origEnumerateDevices()
//       .then((devices) => {
//           if (sessionStorage.__filterVideoDevices) {
//               devices = devices.filter((device) => device.kind !== 'videoinput');
//           }
//           if (sessionStorage.__filterAudioDevices) {
//               devices = devices.filter((device) => device.kind !== 'audioinput');
//           }
//           if (sessionStorage.__filterDeviceLabels
//               || sessionStorage.__getUserMediaAudioError === "NotAllowedError"
//               || sessionStorage.__getUserMediaVideoError === "NotAllowedError") {
//               devices = devices.map((device) => {
//                   var deviceWithoutLabel = {
//                       deviceId: device.deviceId,
//                       kind: device.kind,
//                       label: '',
//                       groupId: device.groupId,
//                   }
//                   return deviceWithoutLabel;
//               });
//           }
//           return devices;
//       });
// };
