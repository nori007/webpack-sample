import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./custom.css";

console.log('css', css);
document.querySelector("#root").innerHTML = hello_word + '' + world_word;