import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");

window.addEventListener("message", (event) => {
  optionsWrapper.innerHTML = "";

  switch (event.data.event) {
    case "visible": {
      body.style.visibility = event.data.state ? "visible" : "hidden";
      eye2.style.visibility = event.data.state ? "visible" : "hidden";
      eye1.style.visibility = event.data.state ? "visible" : "hidden";
      return;
    }

    case "leftTarget": {
      eye1.style.visibility = "hidden";
      return (eye2.style.visibility = "visible");
    }

    case "setTarget": {
      eye2.style.visibility = "hidden";
      eye1.style.visibility = "visible";

      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }
    }
  }
});
