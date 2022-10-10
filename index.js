function changeH1Text() {
  let headerChange = (document.querySelector("h1").innerText =
    "Your no.1 stop for Smartphones!")
}

changeH1Text()

function changeBackgroundColour() {
  let BackgroundColour = (document.querySelector("body").style.backgroundColor =
    "lightpink")
}

changeBackgroundColour()

function changeAddress() {
  document.getElementById("footer"[1]).innertext = "new address"
}

changeAddress()

function changeAddressTry2() {
  document
    .querySelector("div")
    .document.getElementById("footer > div:nth-child (2)").innerText =
    "this is the new address"
}

changeAddressTry2()
