var body = document.getElementById("body")

//temperatura
function przeliczC(value) {
  let valNum = parseFloat(value)
  document.getElementById("C_C").innerHTML = valNum + " C"
  document.getElementById("C_F").innerHTML = valNum * 1.8 + 32 + " F"
  document.getElementById("C_K").innerHTML = valNum + 273.15 + " K"
}
function przeliczF(value) {
  let valNum = parseFloat(value)
  document.getElementById("F_F").innerHTML = valNum + " F"
  document.getElementById("F_C").innerHTML = (valNum - 32) * 0.5555555555555556 + " C"
  document.getElementById("F_K").innerHTML = (valNum + 459.67) * 0.5555555555555556 + " K"
}
function przeliczK(value) {
  let valNum = parseFloat(value)
  document.getElementById("K_K").innerHTML = valNum + " K"
  document.getElementById("K_C").innerHTML = valNum - 273.15 + " C"
  document.getElementById("K_F").innerHTML = 1.8 * (valNum - 273) + 32 + " F"
}
//dlugosc
function przeliczM(value) {
  let valNum = parseFloat(value)
  document.getElementById("M_M").innerHTML = valNum + "m"
  document.getElementById("M_Mi").innerHTML = valNum * 0.0006213712 + " Miles"
  document.getElementById("M_Ft").innerHTML = valNum * 3.280839895 + " Ft"
  document.getElementById("M_Ca").innerHTML = valNum * 39.3700787402 + " inches"
}
function przeliczMi(value) {
  let valNum = parseFloat(value)
  document.getElementById("Mi_Mi").innerHTML = valNum + " Miles"
  document.getElementById("Mi_M").innerHTML = valNum * 1609.344 + " m"
  document.getElementById("Mi_Ft").innerHTML = valNum * 5280 + " Ft"
  document.getElementById("Mi_Ca").innerHTML = valNum * 63360 + " inches"
}
function przeliczFt(value) {
  let valNum = parseFloat(value)
  document.getElementById("Ft_Ft").innerHTML = valNum + " Ft"
  document.getElementById("Ft_M").innerHTML = valNum * 0.3048 + " m"
  document.getElementById("Ft_Mi").innerHTML = valNum * 0.0001893939 + " Miles"
  document.getElementById("Ft_Ca").innerHTML = valNum * 12 + " inches"
}
function przeliczCa(value) {
  let valNum = parseFloat(value)
  document.getElementById("Ca_Ca").innerHTML = valNum + " inches"
  document.getElementById("Ca_M").innerHTML = valNum * 0.0254 + " m"
  document.getElementById("Ca_Mi").innerHTML = valNum * 0.0000157828 + " Miles"
  document.getElementById("Ca_Ft").innerHTML = valNum / 12 + " Ft"
}
