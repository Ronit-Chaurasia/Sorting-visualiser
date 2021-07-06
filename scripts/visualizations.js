
var speed = 1000;
inp_speed.addEventListener("input", vis_speed);
window.onload = vis_speed();
function vis_speed() {
  var arr_speed = inp_speed.value;
  
  switch (parseInt(arr_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delay_time = 10000 / (Math.floor(arr_size / 2) * speed);
}
var delay_time = 10000 / (Math.floor(arr_size / 2) * speed);

let c_delay = 0;

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style = `margin: 0% ${margin_size}%; background:${color}; width: ${(100 / arr_size - 2 * margin_size)}%; height: ${height}%;)`;
  }, (c_delay += delay_time));
}

function enable_buttons() {
  window.setTimeout(function () {
    for (let i = 0; i < algo_btns.length; i++) {
      algo_btns[i].classList = [];
      algo_btns[i].classList.add("butt_unselected");

      algo_btns[i].disabled = false;
      inp_size.disabled = false;
      arr_gen.disabled = false;
      inp_speed.disabled = false;
    }
  }, (c_delay += delay_time));
}