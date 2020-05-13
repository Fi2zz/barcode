import "regenerator-runtime";
import "webrtc-adapter";
import {
  BrowserBarcodeReader,
  BrowserCodeReader,
  //   MultiFormatReader,
  BrowserMultiFormatReader,
} from "@zxing/library/esm";
function setup() {
  const video = document.getElementById("video");

  const { width: sw, height } = window.screen;

  const width = sw * 0.8;

  video.style.width = width + "px";
  video.style.height = width + "px";
  const codeReader = new BrowserMultiFormatReader();
  codeReader.decodeOnceFromConstraints(
    {
      video: { facingMode: "environment", width: width, height: width },
    },
    "video",
    (result, err) => {
      if (result) {
        console.log(result);
        document.getElementById("result").textContent = result.text;
      }
      if (err && !(err instanceof ZXing.NotFoundException)) {
        console.error(err);
        document.getElementById("result").textContent = err;
      }
    }
  );
}

window.addEventListener("load", () => setup());
