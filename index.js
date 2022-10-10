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

// changeAddress()

function changeCSSLinks() {
  for (let i = 0; i < document.querySelector("a").length; i++) {
    document.querySelectorAll("a")[i].classList.add("bolder")
  }
}

changeCSSLinks()

function changeCSSLinks2() {
  for (let node of document.querySelectorAll("a")) {
    node.classList.add("bolder")
  }
}
