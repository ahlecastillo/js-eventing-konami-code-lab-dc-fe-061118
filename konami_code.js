const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here	  var index = 0;
document.body.addEventListener("keydown", init)
let index = 0
function init(event) {
  let key = event.which;
  if (key === code[index]) {
    index++
    if (index === code.length) {
      window.alert()
    }
  } else {
    index = 0;
  }
 }
}

