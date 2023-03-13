var body = document.getElementById("body")

function plus() {
  var input1 = parseInt(document.getElementById("input1").value)
  var input2 = parseInt(document.getElementById("input2").value)
  var wynik = input1 + input2
  document.getElementById("h1").innerHTML = wynik

  var input11 = document.getElementById("input1").style
  var input22 = document.getElementById("input2").style

  if (input1 > input2) {
    input11.backgroundColor = "green"
    input11.transition = "0.7s"

    input22.backgroundColor = "red"
    input22.transition = "0.7s"
  } else if (input1 < input2) {
    input11.backgroundColor = "red"
    input11.transition = "0.7s"

    input22.backgroundColor = "green"
    input22.transition = "0.7s"
  } else {
    input11.backgroundColor = "yellow"
    input11.transition = "0.7s"

    input22.backgroundColor = "yellow"
    input22.transition = "0.7s"

    input11.color = "black"
    input22.color = "black"
  }
}
function minus() {
  var input1 = parseInt(document.getElementById("input1").value)
  var input2 = parseInt(document.getElementById("input2").value)
  var wynik = input1 - input2
  document.getElementById("h1").innerHTML = wynik

  var input11 = document.getElementById("input1").style
  var input22 = document.getElementById("input2").style

  if (input1 > input2) {
    input11.backgroundColor = "green"
    input11.transition = "0.7s"

    input22.backgroundColor = "red"
    input22.transition = "0.7s"
  } else if (input1 < input2) {
    input11.backgroundColor = "red"
    input11.transition = "0.7s"

    input22.backgroundColor = "green"
    input22.transition = "0.7s"
  } else {
    input11.backgroundColor = "yellow"
    input11.transition = "0.7s"

    input22.backgroundColor = "yellow"
    input22.transition = "0.7s"

    input11.color = "black"
    input22.color = "black"
  }
}
function pomnóż() {
  var input1 = parseInt(document.getElementById("input1").value)
  var input2 = parseInt(document.getElementById("input2").value)
  var wynik = input1 * input2
  document.getElementById("h1").innerHTML = wynik

  var input11 = document.getElementById("input1").style
  var input22 = document.getElementById("input2").style

  if (input1 > input2) {
    input11.backgroundColor = "green"
    input11.transition = "0.7s"

    input22.backgroundColor = "red"
    input22.transition = "0.7s"
  } else if (input1 < input2) {
    input11.backgroundColor = "red"
    input11.transition = "0.7s"

    input22.backgroundColor = "green"
    input22.transition = "0.7s"
  } else {
    input11.backgroundColor = "yellow"
    input11.transition = "0.7s"

    input22.backgroundColor = "yellow"
    input22.transition = "0.7s"

    input11.color = "black"
    input22.color = "black"
  }
}
function podziel() {
  var input1 = parseInt(document.getElementById("input1").value)
  var input2 = parseInt(document.getElementById("input2").value)
  var wynik = input1 / input2
  document.getElementById("h1").innerHTML = wynik

  var input11 = document.getElementById("input1").style
  var input22 = document.getElementById("input2").style

  if (input1 > input2) {
    input11.backgroundColor = "green"
    input11.transition = "0.7s"

    input22.backgroundColor = "red"
    input22.transition = "0.7s"
  } else if (input1 < input2) {
    input11.backgroundColor = "red"
    input11.transition = "0.7s"

    input22.backgroundColor = "green"
    input22.transition = "0.7s"
  } else {
    input11.backgroundColor = "yellow"
    input11.transition = "0.7s"

    input22.backgroundColor = "yellow"
    input22.transition = "0.7s"

    input11.color = "black"
    input22.color = "black"
  }
}
