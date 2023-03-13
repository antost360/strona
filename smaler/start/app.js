const menu = document.getElementById("menu")
const main = document.getElementById("main")
const sun = document.getElementById("sun")
const moon = document.getElementById("moon")
function change_theme() {
  const input = document.getElementById("switch")

  if (input.checked === true) {
    main.style.backgroundColor = "var(--light)"
    menu.style.backgroundColor = "var(--light)"
    main.style.transition = ".4s"
    menu.style.transition = ".4s"
    sun.removeAttribute("class")
    moon.removeAttribute("class")
    sun.setAttribute("class", "fa-solid fa-sun icon show")
    moon.setAttribute("class", "fa-solid fa-moon icon hide")
  } else {
    main.style.backgroundColor = "var(--dark)"
    menu.style.backgroundColor = "var(--dark)"
    main.style.transition = ".4s"
    menu.style.transition = ".4s"
    sun.removeAttribute("class")
    moon.removeAttribute("class")
    sun.setAttribute("class", "fa-solid fa-sun icon hide")
    moon.setAttribute("class", "fa-solid fa-moon icon show")
  }
}
