const body = document.getElementById("body")
const main = document.getElementById("main")
const menu = document.getElementById("menu")
var json = []
//pobiera dane z api rest countries
async function getData() {
  var data = await fetch("https://restcountries.com/v2/all")
  json = await data.json()
}
getData()

//globalne zmienne pozwalają kazdej grze korzystac z tych samych zmiennych(divów, licznikow...)
var punkty
var licznik_punktow = 0
var div_kraj1
var div_kraj2
var h1
var div_wynik
var kraj1 = 0
var kraj2 = 0
var div_game = "1"
var input_data = ""
var podpowiedz = 0
var div_podpowiedz = ""
var div_guziki
var hintsid = document.getElementById("hintsid")
var licznik_serc

//funckja pozwala wylosować randomowe panstwo z api
function losuj() {
  //losuje liczbe zakres to liczba elemetów z tym przypadku tyle ile jest kraji w api
  var max = json.length - 1
  return Math.floor(Math.random() * max)
}

//pokazuje tylko ekran startowy dla każdej gry
function show_populacja() {
  guziki_od_gier()
  main.innerHTML = ""
  licznik_punktow = 0

  //miesjce na guzik do losowania, podpowiedzi, punktów
  div_guziki = document.createElement("div")
  div_guziki.classList.add("div_guziki")
  main.appendChild(div_guziki)

  //tytul
  const h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "CHOOSE COUNTRY WITH BIGGER POPULATION"
  div_guziki.appendChild(h1)

  //rozpoczęcie gry
  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "kraje()")
  button_guees.innerHTML = "Guees"
  div_guziki.appendChild(button_guees)

  // tu bedą pokazywać sie kraje ktore sie zgaduje
  div_game = document.createElement("div")
  div_game.setAttribute("id", "div_game")
  main.appendChild(div_game)
}
function show_nazwy() {
  guziki_od_gier()
  main.innerHTML = ""
  licznik_punktow = 0

  //miesjce na guzik do losowania, podpowiedzi, punktów
  div_guziki = document.createElement("div")
  div_guziki.classList.add("div_guziki")
  main.appendChild(div_guziki)

  //tytul
  const h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "GUEES NAME OF THE COUNTRY"
  div_guziki.appendChild(h1)

  //rozpoczęcie gry
  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "nazwy()")
  button_guees.innerHTML = "Guees"
  div_guziki.appendChild(button_guees)

  // tu bedą pokazywać sie kraje ktore sie zgaduje
  div_game = document.createElement("div")
  div_game.setAttribute("id", "div_game")
  main.appendChild(div_game)
}
function show_stolice() {
  guziki_od_gier()
  main.innerHTML = ""
  licznik_punktow = 0
  licznik_serc = 11

  //miesjce na guzik do losowania, podpowiedzi, punktów
  div_guziki = document.createElement("div")
  div_guziki.classList.add("div_guziki")
  main.appendChild(div_guziki)

  //tytul
  const h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "GUEES CAPITAL OF THE COUNTRY"
  div_guziki.appendChild(h1)

  //rozpoczęcie gry
  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "stolice()")
  button_guees.innerHTML = "Guees"
  div_guziki.appendChild(button_guees)

  // tu bedą pokazywać sie kraje ktore sie zgaduje
  div_game = document.createElement("div")
  div_game.setAttribute("id", "div_game")
  main.appendChild(div_game)
}

//uzywa wylosowane panstwo aby zgadywać jego populacje nazwe stolice, pokazuje wylosowane panstwo, podpowiedzi i input
function kraje() {
  div_game.innerHTML = ""
  div_guziki.innerHTML = ""

  kraj1 = json[losuj()]
  kraj2 = json[losuj()]

  //tworzenie wszysktiego naraz
  div_kraj1 = document.createElement("div")
  div_kraj2 = document.createElement("div")
  div_wynik = document.createElement("div")
  const h1_kraj1 = document.createElement("h1")
  const h1_kraj2 = document.createElement("h1")
  const flaga_kraj1 = document.createElement("img")
  const flaga_kraj2 = document.createElement("img")

  const h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "GUEES COUNTRY WITH BIGGER POPULATION"
  div_guziki.appendChild(h1)

  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "kraje()")
  button_guees.innerHTML = "Guees"
  div_guziki.appendChild(button_guees)

  //nadawanie wartosci z api kazdemu elementowi
  div_kraj1.style.backgroundColor = "lightBlue"
  div_kraj2.style.backgroundColor = "lightBlue"
  h1_kraj1.innerHTML = kraj1.name
  h1_kraj2.innerHTML = kraj2.name
  flaga_kraj1.src = kraj1.flags.png
  flaga_kraj2.src = kraj2.flags.png

  //upiększanie elemtow dzieki klasom
  div_kraj1.classList.add("div_test")
  div_kraj2.classList.add("div_test")
  div_kraj1.classList.add("pointer")
  div_kraj2.classList.add("pointer")
  div_wynik.classList.add("wynik")
  h1_kraj1.classList.add("nazwa")
  h1_kraj2.classList.add("nazwa")
  flaga_kraj1.classList.add("flaga")
  flaga_kraj2.classList.add("flaga")

  //nadanie fukcji sprawdzającej
  div_kraj1.setAttribute("onclick", `sprawdz_populacje(${kraj1.population},${kraj2.population}, '1')`)
  div_kraj2.setAttribute("onclick", `sprawdz_populacje(${kraj1.population},${kraj2.population}, '2')`)

  //upiekszanie dluzszych nazw krajów
  var kraj1_name = kraj1.name.length
  var kraj2_name = kraj2.name.length
  var mini_nazwa = "22px"
  if (kraj1_name > 11 && kraj2_name > 11) {
    h1_kraj1.style.fontSize = mini_nazwa
    h1_kraj2.style.fontSize = mini_nazwa
  } else if (kraj1_name > 11 || kraj2_name > 11) {
    if (kraj1_name > kraj2_name) {
      h1_kraj1.style.fontSize = mini_nazwa
    } else {
      h1_kraj2.style.fontSize = mini_nazwa
    }
  }

  //dodanie kazdego elementu na stronie naraz
  punkty = document.createElement("h1")
  punkty.classList.add("h1")
  punkty.innerHTML = "POINTS: " + licznik_punktow
  div_guziki.appendChild(punkty)

  div_kraj1.appendChild(flaga_kraj1)
  div_kraj1.appendChild(h1_kraj1)
  div_kraj2.appendChild(flaga_kraj2)
  div_kraj2.appendChild(h1_kraj2)
  div_game.appendChild(div_kraj1)
  div_game.appendChild(div_wynik)
  div_game.appendChild(div_kraj2)
}
function stolice() {
  if (licznik_serc == 1) {
    give_up_stolice()
  }
  licznik_serc--
  //wylosowanie kraju
  kraj1 = json[losuj()]
  //czysczenie
  div_game.innerHTML = ""
  div_guziki.innerHTML = ""
  //tytuł
  const h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "GUEES CAPITAL OF THE COUNTRY"
  div_guziki.appendChild(h1)

  //guzik od losowanie dalej
  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "stolice()")
  button_guees.innerHTML = "Guees"
  div_guziki.appendChild(button_guees)

  //div na podpowiedzi
  div_podpowiedz = document.createElement("div")
  div_podpowiedz.classList.add("div_hint")
  div_podpowiedz.innerHTML = "COUNTRY: " + kraj1.name
  div_guziki.appendChild(div_podpowiedz)

  //upiększenie miejsca na kraj
  div_kraj1 = document.createElement("div")
  div_kraj1.classList.add("div_test")

  //tworzenie flagi
  const img = document.createElement("img")
  img.classList.add("flaga")
  img.src = kraj1.flags.png
  div_kraj1.appendChild(img)

  //tworzenie inputa z funkcją sprawdzania odp.
  const input = document.createElement("input")
  input.setAttribute("id", "input")
  input.setAttribute("onchange", "sprawdz_stolice(input_data)")
  input.setAttribute("placeholder", "CAPITAL")
  input.classList.add("guzik")
  div_kraj1.appendChild(input)

  //tworzenie wyniku
  div_wynik = document.createElement("div")
  div_wynik.classList.add("wynik")
  div_game.appendChild(div_wynik)
  div_game.appendChild(div_kraj1)

  //tworzenie guziki poddania sie
  const button_give_up = document.createElement("button")
  button_give_up.classList.add("guzik")
  button_give_up.setAttribute("onclick", "give_up_stolice()")
  button_give_up.innerHTML = "Give up"
  div_game.appendChild(button_give_up)

  //zliczanie punktow
  punkty = document.createElement("h1")
  punkty.classList.add("h1")
  punkty.innerHTML = "SERCA: " + licznik_serc
  div_guziki.appendChild(punkty)
}
function stolice_serce_tosamo() {
  if (licznik_serc == 1) {
    give_up_stolice()
  }

  //wylosowanie kraju
  kraj1 = json[losuj()]
  //czysczenie
  div_game.innerHTML = ""
  div_guziki.innerHTML = ""
  //tytuł
  const h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "GUEES CAPITAL OF THE COUNTRY"
  div_guziki.appendChild(h1)

  //guzik od losowanie dalej
  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "stolice()")
  button_guees.innerHTML = "Guees"
  div_guziki.appendChild(button_guees)

  //div na podpowiedzi
  div_podpowiedz = document.createElement("div")
  div_podpowiedz.classList.add("div_hint")
  div_podpowiedz.innerHTML = "COUNTRY: " + kraj1.name
  div_guziki.appendChild(div_podpowiedz)

  //upiększenie miejsca na kraj
  div_kraj1 = document.createElement("div")
  div_kraj1.classList.add("div_test")

  //tworzenie flagi
  const img = document.createElement("img")
  img.classList.add("flaga")
  img.src = kraj1.flags.png
  div_kraj1.appendChild(img)

  //tworzenie inputa z funkcją sprawdzania odp.
  const input = document.createElement("input")
  input.setAttribute("id", "input")
  input.setAttribute("onchange", "sprawdz_stolice(input_data)")
  input.setAttribute("placeholder", "CAPITAL")
  input.classList.add("guzik")
  div_kraj1.appendChild(input)

  //tworzenie wyniku
  div_wynik = document.createElement("div")
  div_wynik.classList.add("wynik")
  div_game.appendChild(div_wynik)
  div_game.appendChild(div_kraj1)

  //tworzenie guziki poddania sie
  const button_give_up = document.createElement("button")
  button_give_up.classList.add("guzik")
  button_give_up.setAttribute("onclick", "give_up_stolice()")
  button_give_up.innerHTML = "Give up"
  div_game.appendChild(button_give_up)

  //zliczanie punktow
  punkty = document.createElement("h1")
  punkty.classList.add("h1")
  punkty.innerHTML = "SERCA: " + licznik_serc
  div_guziki.appendChild(punkty)
}
function nazwy() {
  //losowanie
  kraj1 = json[losuj()]
  //czysczenie
  div_game.innerHTML = ""
  div_guziki.innerHTML = ""

  //tytuł
  const h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "GUEES NAME OF THE COUNTRY"
  div_guziki.appendChild(h1)

  //guzik od losowania dalej
  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "nazwy()")
  button_guees.innerHTML = "Guees"
  div_guziki.appendChild(button_guees)

  //miesjce na podpowiedzi
  div_podpowiedz = document.createElement("div")
  div_podpowiedz.classList.add("div_hint")
  div_podpowiedz.innerHTML = "Capital:  " + kraj1.capital + "<br>" + "Population:  " + kraj1.population
  div_guziki.appendChild(div_podpowiedz)

  //upieszkanie div z krajem
  div_kraj1 = document.createElement("div")
  div_kraj1.classList.add("div_test")

  //tworzenie flagi
  const img = document.createElement("img")
  img.classList.add("flaga")
  img.src = kraj1.flags.png
  div_kraj1.appendChild(img)

  //tworzenie inputa z funkcją sprawdzania odp.
  const input = document.createElement("input")
  input.setAttribute("id", "input")
  input.setAttribute("oninput", "sprawdz_nazwy(input_data)")
  input.setAttribute("placeholder", "NAME")
  input.classList.add("guzik")
  div_kraj1.appendChild(input)

  //div na wynik (emotki)
  div_wynik = document.createElement("div")
  div_wynik.classList.add("wynik")
  div_wynik.setAttribute("onclick", "nazwy()")
  div_game.appendChild(div_wynik)
  div_game.appendChild(div_kraj1)

  //guzik od poddania sie
  const button_give_up = document.createElement("button")
  button_give_up.classList.add("guzik")
  button_give_up.setAttribute("onclick", "give_up()")
  button_give_up.innerHTML = "Give up"
  div_game.appendChild(button_give_up)

  //zliczanie punktów
  punkty = document.createElement("h1")
  punkty.classList.add("h1")
  punkty.innerHTML = "POINTS: " + licznik_punktow
  div_guziki.appendChild(punkty)
}

//sprawdza czy podana odpowiedz jest prawidłowa
function sprawdz_populacje(kraj1_population, kraj2_population, wybrany) {
  if ((kraj1_population > kraj2_population && wybrany == 1) || (kraj1_population < kraj2_population && wybrany == 2)) {
    licznik_punktow++
    console.log("Licznik: " + licznik_punktow)
    punkty.innerHTML = "POINTS: " + licznik_punktow
    div_guziki.appendChild(punkty)
    kraje()
    div_wynik.style.backgroundColor = "lightGreen"
    div_wynik.innerHTML = "❤"
  } else {
    licznik_punktow--

    if (licznik_punktow <= 0) {
      licznik_punktow = 0
    }

    console.log("Licznik: " + licznik_punktow)
    punkty.innerHTML = "POINTS: " + licznik_punktow
    div_guziki.appendChild(punkty)
    kraje()
    div_wynik.style.backgroundColor = "tomato"
    div_wynik.innerHTML = "🤢"
  }
}
function sprawdz_nazwy(data) {
  input_data = document.getElementById("input").value
  data = input_data

  if (data.toUpperCase() == kraj1.name.toUpperCase()) {
    licznik_punktow++
    punkty.innerHTML = "POINTS: " + licznik_punktow
    console.log(licznik_punktow)
    nazwy()
    div_wynik.style.backgroundColor = "lightGreen"
    div_wynik.innerHTML = "❤"
  } else {
    div_wynik.style.backgroundColor = "tomato"
    div_wynik.innerHTML = "🤢"
  }
}
function sprawdz_stolice(data) {
  input_data = document.getElementById("input").value
  data = input_data

  if (licznik_serc != 1) {
    if (data.toUpperCase() == kraj1.capital.toUpperCase()) {
      licznik_punktow++
      punkty.innerHTML = "ŻYCIA: " + licznik_serc
      stolice_serce_tosamo()
      div_wynik.style.backgroundColor = "lightGreen"
      div_wynik.innerHTML = "❤"
    } else {
      if (licznik_punktow == 0) {
        licznik_punktow = 0
      } else {
        licznik_punktow--
      }
      stolice()
      div_wynik.style.backgroundColor = "tomato"
      div_wynik.innerHTML = "🤢"
    }
  } else {
    give_up_stolice()
  }
}

//guzik do poddania, pokazuje prawidłową odpowiedz oraz zdobyte punkty
function give_up_stolice() {
  div_game.innerHTML = ""
  div_guziki.innerHTML = ""
  main.innerHTML = ""
  punkty.remove()

  //tworzenie diva koncowego z odp. i punktami
  div_kraj1 = document.createElement("div")
  div_kraj1.classList.add("div_test_end")

  //odpowiedz
  h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "THE COUNTRY: " + kraj1.name + "<br>" + "CAPITAL: " + kraj1.capital
  div_kraj1.appendChild(h1)

  //flaga
  const img = document.createElement("img")
  img.classList.add("flaga_position_end")
  img.src = kraj1.flags.png
  div_kraj1.appendChild(img)

  //fnal score
  punkty = document.createElement("h1")
  punkty.classList.add("h1")
  punkty.innerHTML = "FINAL SCORE: " + licznik_punktow
  div_kraj1.appendChild(punkty)

  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "show_stolice()")
  button_guees.innerHTML = "Guees"
  div_kraj1.appendChild(button_guees)

  main.appendChild(div_kraj1)
}
function give_up() {
  div_game.innerHTML = ""
  div_guziki.innerHTML = ""
  main.innerHTML = ""
  punkty.remove()

  //tworzenie koncowego diva z odp i punktami
  div_kraj1 = document.createElement("div")
  div_kraj1.classList.add("div_test_end")

  //odpowiedz
  h1 = document.createElement("h1")
  h1.classList.add("h1")
  h1.innerHTML = "THE COUNTRY YOU LOST ON WAS: <br><br>" + kraj1.name
  div_kraj1.appendChild(h1)

  //flaga
  const img = document.createElement("img")
  img.classList.add("flaga_position_end")
  img.src = kraj1.flags.png
  div_kraj1.appendChild(img)

  //final score
  punkty = document.createElement("h1")
  punkty.classList.add("h1")
  punkty.innerHTML = "FINAL SCORE: " + licznik_punktow
  div_kraj1.appendChild(punkty)

  const button_guees = document.createElement("button")
  button_guees.classList.add("guzik")
  button_guees.setAttribute("onclick", "show_nazwy()")
  button_guees.innerHTML = "Guees"
  div_kraj1.appendChild(button_guees)

  main.appendChild(div_kraj1)
}
//tworzy guziki do kazdej gry w menu
function guziki_od_gier() {
  menu.innerHTML = ""

  //guzik na powrót do listy kraji i filtrów
  const anchor = document.createElement("a")
  anchor.setAttribute("href", "/panstwa/index.html")
  menu.appendChild(anchor)

  const button_anchor = document.createElement("button")
  button_anchor.classList.add("guzik")
  button_anchor.innerHTML = "COUNTRY LIST"
  anchor.appendChild(button_anchor)

  //miejsce na guzikik od gier
  const div_guziki_od_gier = document.createElement("div")
  div_guziki_od_gier.classList.add("div_guziki_od_gier")
  menu.appendChild(div_guziki_od_gier)

  //guzik od pokazania ekranu startowego gry w nazwy
  const nazwy = document.createElement("button")
  nazwy.classList.add("guzik")
  nazwy.setAttribute("onclick", "show_nazwy()")
  nazwy.innerHTML = "NAME GAME"
  div_guziki_od_gier.appendChild(nazwy)

  //guzik od pokaznia ekranu startowego gry w stolice
  const stolice = document.createElement("button")
  stolice.classList.add("guzik")
  stolice.setAttribute("onclick", "show_stolice()")
  stolice.innerHTML = "CAPITAL GAME"
  div_guziki_od_gier.appendChild(stolice)

  //guzik od pokazania ekranu startowego gry w populacje
  const populacja = document.createElement("button")
  populacja.classList.add("guzik")
  populacja.setAttribute("onclick", "show_populacja()")
  populacja.innerHTML = "POPULATION GAME"
  div_guziki_od_gier.appendChild(populacja)
}
