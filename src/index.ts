import * as utils from "./utils";
import "./style.css";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let input = document.querySelector("input").value;
  let displayResult = document.querySelector("h3");
  if (input.length !== 13) {
    return (displayResult.textContent =
      "A valid EAN-13 number should be 13 digits");
  }
  let prep = utils.prep(input);
  let last = prep[prep.length - 1];
  prep.pop();
  let sum = utils.EAN(prep);
  let result = sum === last ? "correct" : "wrong";
  displayResult.className = result;
  displayResult.textContent = result;
});
