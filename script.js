var keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
var keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

var row1 = document.querySelector(".row1");
var row2 = document.querySelector(".row2");
//var row3 = document.querySelector(".row3");

for (let i = 0; i < keys1.length; i++) {
  var button = document.createElement("button");
  button.innerHTML = keys1[i].toLowerCase();
  button.className = "key";
  row1.appendChild(button);
}
//for(let i=0; i<keys2.length; i++){
for (const key of keys2) {
  var button = document.createElement("button");
  button.innerHTML = key.toLowerCase();
  button.className = "key";
  row2.appendChild(button);
}

keys3.forEach((key) => {
  var button = document.createElement("button");
  var existing = document.querySelector(".backspace");
  var row3 = existing.parentNode;
  button.innerHTML = key.toLowerCase();
  button.className = "key";
  row3.insertBefore(button, existing);
});

let keys = document.querySelectorAll(".key");
let display = document.querySelector(".display");

for (const key of keys) {
  key.addEventListener("click", function () {
    /*if(display.innerText > 1)
    let text = document.createTextNode(key.innerText);
    let existing = document.querySelector(".cursor");
    existing.parentNode.insertBefore(text, existing);*/
    display.innerText += key.innerText
    key.classList.toggle("click")
  });
}
let backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => {
  if (display.innerText.length > 0)
   display.innerText = display.innerText.slice(
      0,
      display.innerText.length - 1)
    /*String.prototype.replaceAt = function(index, replacement) {
 if (index >= this.length)
        return this.valueOf();
    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}
  display.innerText= display.innerText.replaceAt(display.innerText.length-2, "");*/    
});

let capsLock = document.querySelector(".bx");

capsLock.addEventListener("click", () => {
  capsLock.classList.toggle("upperCase");
  for (const key of keys) {
    if (key.innerText == key.innerText.toLowerCase())
      key.innerText = key.innerText.toUpperCase();
    else key.innerText = key.innerText.toLowerCase();
  }
});

let space = document.querySelector(".space");

space.addEventListener("click", () => {
  let blank = "&nbsp;";
  display.innerHTML += blank;
});

let enter = document.querySelector(".return");

enter.addEventListener("click", () => {
  let Break = "<br>";
  display.innerHTML += Break;
});
