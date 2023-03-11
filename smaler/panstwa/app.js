const body = document.getElementById("body")
const main = document.getElementById("main_in")
const menu = document.getElementById("menu_in")
var json = []

async function getData() {
  var data = await fetch("https://restcountries.com/v2/all")
  json = await data.json()

  for (var i = 0; i <= json.length - 1; i++) {
    const div = document.createElement("div")
    div.classList.add("div")

    const divFlaga = document.createElement("div")
    divFlaga.classList.add("divFlaga")
    div.appendChild(divFlaga)

    const divText = document.createElement("div")
    divText.classList.add("divText")
    div.appendChild(divText)

    const h1 = document.createElement("h1")
    h1.innerHTML = json[i].name
    h1.classList.add("h1")
    divText.appendChild(h1)

    const p = document.createElement("p")
    p.innerHTML = "Capital: " + json[i].capital
    p.classList.add("p")
    divText.appendChild(p)

    const pp = document.createElement("p")
    pp.innerHTML = "Population: " + json[i].population
    pp.classList.add("p")
    divText.appendChild(pp)

    const img = document.createElement("img")
    img.src = json[i].flags.png
    img.classList.add("img")
    divFlaga.appendChild(img)

    if (json[i].name.length > 13) {
      h1.style.fontSize = "1.2em"
    }

    main.appendChild(div)
  }
}
getData()
var szukaj
//fitruje panstwa
function search() {
  var newData = document.getElementById("input").value

  main.innerHTML = ""

  menu.innerHTML = ""

  const gra_link = document.createElement("a")
  gra_link.setAttribute("href", "../gra_losuj/index.html")
  menu.appendChild(gra_link)

  const gra_kraje = document.createElement("button")
  gra_kraje.classList.add("guzik")
  gra_kraje.innerHTML = "GRA KRAJE"
  gra_kraje.setAttribute("href", "../gra_losuj/index.html")
  gra_link.appendChild(gra_kraje)

  const lista = document.createElement("a")
  lista.setAttribute("href", "../panstwa/index.html")
  menu.appendChild(lista)

  const linsta_btn = document.createElement("button")
  linsta_btn.classList.add("guzik")
  linsta_btn.innerHTML = "LISTA"
  lista.appendChild(linsta_btn)

  szukaj = document.createElement("input")
  szukaj.setAttribute("id", "input")
  szukaj.setAttribute("onchange", "search()")
  szukaj.setAttribute("placeholder", "NAZWA KRAJU")
  menu.appendChild(szukaj)

  for (var i = 0; i <= json.length - 1; i++) {
    if (json[i].name.includes(newData)) {
      const div = document.createElement("div")
      div.classList.add("div")

      const divFlaga = document.createElement("div")
      divFlaga.classList.add("divFlaga")
      div.appendChild(divFlaga)

      const divText = document.createElement("div")
      divText.classList.add("divText")
      div.appendChild(divText)

      const h1 = document.createElement("h1")
      h1.innerHTML = json[i].name
      h1.classList.add("h1")
      divText.appendChild(h1)

      const p = document.createElement("p")
      p.innerHTML = "Capital: " + json[i].capital
      p.classList.add("p")
      divText.appendChild(p)

      const pp = document.createElement("p")
      pp.innerHTML = "Population: " + json[i].population
      pp.classList.add("p")
      divText.appendChild(pp)

      const img = document.createElement("img")
      img.src = json[i].flags.png
      img.classList.add("img")
      divFlaga.appendChild(img)

      if (json[i].name.length > 13) {
        h1.style.fontSize = "1.2em"
      }

      main.appendChild(div)
    }
  }
}
