import {
  CUSTOM_PROPERTY,
  COLOR,
  PASSWORD_SELECTOR,
  PERFECT_PASSWORD_LENGTH,
} from "./constants.js";

if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("./field-progress-worklet.js");

  CSS.registerProperty({
    name: CUSTOM_PROPERTY.LENGTH,
    syntax: "<number>",
    inherits: false,
    initialValue: 0,
  });

  CSS.registerProperty({
    name: CUSTOM_PROPERTY.COLOR,
    syntax: "<color>",
    inherits: false,
    initialValue: "blue",
  });

  CSS.registerProperty({
    name: CUSTOM_PROPERTY.HEIGHT,
    syntax: "<length>",
    inherits: false,
    initialValue: "0",
  });
}

const passwordInput = document.querySelector(PASSWORD_SELECTOR);

passwordInput.addEventListener("input", (evt) => {
  const length = evt.target.value.length;
  const percentage = (100 / PERFECT_PASSWORD_LENGTH) * evt.target.value.length;
  const inputElement = evt.target.style;

  if (length === 0) {
    inputElement.removeProperty(CUSTOM_PROPERTY.LENGTH);
    inputElement.removeProperty(CUSTOM_PROPERTY.COLOR);
  }

  if (percentage > 0 && percentage <= 75) {
    inputElement.setProperty(CUSTOM_PROPERTY.LENGTH, percentage);
    inputElement.setProperty(CUSTOM_PROPERTY.COLOR, COLOR.DANGER);
  }

  if (percentage > 75 && percentage < 100) {
    inputElement.setProperty(CUSTOM_PROPERTY.LENGTH, percentage);
    inputElement.setProperty(CUSTOM_PROPERTY.COLOR, COLOR.WARNING);
  }

  if (percentage >= 100) {
    inputElement.setProperty(CUSTOM_PROPERTY.LENGTH, 100);
    inputElement.setProperty(CUSTOM_PROPERTY.COLOR, COLOR.SUCCESS);
  }
});
