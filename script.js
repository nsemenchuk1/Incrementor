// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var plus10Btn = document.getElementById("plus10");
var minus1Btn = document.getElementById("minus1");
var plus50Btn = document.getElementById("plus50");
var minus50Btn = document.getElementById("minus50");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
plus10Btn.addEventListener("click", add10);
minus1Btn.addEventListener("click", sub1);
plus50Btn.addEventListener("click", add50);
minus50Btn.addEventListener("click", sub50);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter--;
  displayEl.innerHTML = counter;
}

function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = " "; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4Btn = document.getElementById("rand4");
var rand4OutEl = document.getElementById("rand4-out");

rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand = Math.random() * 100 + 1;
  rand = rand.toFixed(0);
  rand2OutEl.innerHTML = rand;
}

rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand = Math.random() * 10;
  rand -= 5;
  rand = rand.toFixed(0);
  rand3OutEl.innerHTML = rand;
}

rand4Btn.addEventListener("change", showRand4);

function showRand4() {
  var input1 = +document.getElementById("rand-in1").value;
  var input2 = +document.getElementById("rand-in2").value;
  var rand = Math.random() * (input2 - input1);
  rand++;
  rand = rand.toFixed(3);
  rand4OutEl.innerHTML = rand;
}

// Random Size
document.getElementById("random-size").addEventListener("click", changeSize);

function changeSize() {
  var randomSize = Math.random() * 20 + 5;
  document.getElementById("body").style.fontSize = `${randomSize}px`;
}
// Random Color
document.getElementById("random-rgb").addEventListener("click", changeColor);

function changeColor() {
  var red = Math.random() * 255 + 0;
  var green = Math.random() * 255 + 0;
  var blue = Math.random() * 255 + 0;
  var rgbString = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("HTML").style.background = rgbString;
}
// Reset Page
document.getElementById("reset").addEventListener("click", resetPage);

function resetPage() {
  document.getElementById("display").innerHTML = "0";
  document.getElementById("strOut").innerHTML = "Once upon a time,";
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand-in1").value = "";
  document.getElementById("rand-in2").value = "";
  document.getElementById("rand4-out").innerHTML = "----------";
  document.getElementById("h1").style.fontSize = "34px";
  document.getElementById("h2-1").style.fontSize = "30px";
  document.getElementById("h2-2").style.fontSize = "30px";
  document.getElementById("h2-3").style.fontSize = "30px";
  document.getElementById("p1").style.fontSize = "16px";
  document.getElementById("p2").style.fontSize = "16px";
  document.getElementById("HTML").style.background = "#9ae4c8";
}
