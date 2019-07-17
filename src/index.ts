import * as utils from "./utils";
import "./style.css";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let input = document.querySelector("input").value;
  let result = document.querySelector("h3");
  if (input.length !== 13) {
    return (result.textContent = "A valid EAN-13 number should be 13 digits");
  }
  let prep = utils.prep(input);
  let last = prep[prep.length - 1];
  prep.pop();
  let sum = utils.EAN(prep);
  let style = sum === last ? "✓ correct" : "𐄂 wrong";
  result.textContent = style;
  result.style.color = style === "✓ correct" ? "#80c780" : "#f9f9f9";
  result.style.backgroundColor = "rgba(0,0,0,0.2)";
  result.style.padding = "2em";
  result.style.borderRadius = "0.2em";
  result.style.textTransform = "Capitalize";
});
