import "regenerator-runtime";
import "webrtc-adapter";
import { BrowserBarcodeReader } from "@zxing/library/esm";
function setup() {
  const codeReader = new BrowserBarcodeReader();
  document.getElementById("startButton").addEventListener("click", () => {
    codeReader
      .decodeOnceFromConstraints(
        {
          video: { facingMode: "environment", width: 320, height: 160 },
        },
        "video"
      )
      .then((result) => {
        console.log(result);
        document.getElementById("result").textContent = result.text;
      })
      .catch((err) => {
        console.error(err);
        document.getElementById("result").textContent = err;
      });
  });
}

window.addEventListener("load", () => setup());
