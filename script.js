document.getElementById("myButton").addEventListener("click", getNumber);

document.getElementById("addButton").addEventListener("click", addTo)

document.getElementById("subButton").addEventListener("click", subFrom)

let count = 0;

function getNumber() {
  document.getElementById("demo").innerHTML = count;
}

function addTo() {
  document.getElementById("demo").innerHTML = count-=1;
}

function subFrom() {
  document.getElementById("demo").innerHTML = count+=1;
}
