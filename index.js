function changeH1Text() {
  let headerChange = (document.querySelector("h1").innerText =
    "Your no.1 stop for Smartphones!")
}

// changeH1Text()

function changeBackgroundColour() {
  let BackgroundColour = (document.querySelector("body").style.backgroundColor =
    "lightpink")
}

// changeBackgroundColour()

function changeAddress() {
  document.querySelector("#address").innerHTML = "this is the new address"
}

function changeCSSLinks() {
  for (let node of document.querySelectorAll("a")) {
    node.classList.add("bolder")
  }
}

// changeCSSLinks()

// function imageVisability() {
//   for (let image of document.querySelectorAll("img")) {
//     image.classList.toggle("hidden")
//     }
// }

onclick = function imageVisability() {
  for (let image of document.querySelectorAll("img")) {
    image.classList.toggle("hidden")
  }
}
