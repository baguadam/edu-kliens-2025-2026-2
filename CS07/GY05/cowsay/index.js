import cowsay from "cowsay";
import THRESHOLD, { add, multiply } from "./utils.js";

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "OXXXXXXX",
    T: "U ",
  }),
);

console.log(add(THRESHOLD, 5));
