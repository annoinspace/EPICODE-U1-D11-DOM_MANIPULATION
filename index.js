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

onclick = function imageVisability() {
  for (let image of document.querySelectorAll("img")) {
    image.classList.toggle("hidden")
  }
}

function getRandomColour() {
  let letters = "012345689ABDCEF"
  let colour = ""
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)]
  }
  return colour
}

function changePriceColour() {
  let allPrices = document.querySelectorAll(".price")
  for (let i = 0; i < allPrices.length; i++) {
    let randomColour = getRandomColour()
    allPrices[i].style.color = randomColour
  }
}
