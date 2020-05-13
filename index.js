import "regenerator-runtime";
import { BrowserBarcodeReader } from "@zxing/library/esm";
function setup() {
  const codeReader = new BrowserBarcodeReader();

  navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
  });
  let selectedDeviceId;
  codeReader
    .getVideoInputDevices()
    .then((videoInputDevices) => {
      selectedDeviceId = videoInputDevices[0].deviceId;

      document.getElementById("startButton").addEventListener("click", () => {
        alert("startbutton");
        codeReader
          .decodeOnceFromVideoDevice(selectedDeviceId, "video")
          .then((result) => {
            console.log(result);
            codeReader.reset();
            document.getElementById("result").textContent = result.text;
          })
          .catch((err) => {
            console.error(err);
            document.getElementById("result").textContent = err;
            codeReader.reset();
          });
        console.log(
          `Started continous decode from camera with id ${selectedDeviceId}`
        );
      });
    })
    .catch((err) => {
      alert(err.message);
      console.error(err);
    });
}

window.addEventListener("load", () => setup());
