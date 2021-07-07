let inp_size = document.getElementById("a_size");
let arr_size = inp_size.value;
let inp_speed = document.getElementById("a_speed");
let arr_cont = document.getElementById("array_container");
let arr_gen = document.getElementById("a_generate");
let div_sizes = [];
let divs = [];
let baseColor =
  "#41128c linear-gradient(36deg, rgb(72, 23, 231) 4%, rgb(32, 31, 102) 95%)";
let endColor =
  "#1d1c96 linear-gradient(50deg, rgb(30, 149, 239) 21%, rgb(29, 58, 184) 91%)";

let algo_btns = document.querySelectorAll(".algos button");

window.onload = update_array_size();
arr_gen.addEventListener("click", generate_array);
inp_size.addEventListener("input", update_array_size);

function generate_array() {
  arr_cont.innerHTML = "";
  for (var i = 0; i < arr_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.8 * (inp_size.max - inp_size.min)) + 30;
    divs[i] = document.createElement("div");
    arr_cont.appendChild(divs[i]);
    margin_size = 0.08;
    divs[
      i
    ].style = `margin: 0% ${margin_size}%; background:${baseColor}; width: ${
      100 / arr_size - 2 * margin_size
    }%; height: ${div_sizes[i]}%;)`;
  }
}

function update_array_size() {
  arr_size = inp_size.value;
  generate_array();
}

for (let i = 0; i < algo_btns.length; i++) {
  algo_btns[i].addEventListener("click", runAlgo);
}

function disable_buttons() {
  for (var i = 0; i < algo_btns.length; i++) {
    algo_btns[i].classList = [];
    algo_btns[i].classList.add("btn_locked");

    algo_btns[i].disabled = true;
    inp_size.disabled = true;
    arr_gen.disabled = true;
    inp_speed.disabled = true;
  }
}

function runAlgo() {
  disable_buttons();
  this.classList.add("btn_selected");
  switch (this.innerHTML) {
    case "Bubble":
      Bubble();
      break;
    case "Selection":
      Selection_sort();
      break;
    case "Insertion":
      Insertion();
      break;
    case "Merge":
      Merge();
      break;
    case "Quick":
      Quick();
      break;
  }
  enable_buttons();
}
