var json = []
const zbiornik = document.getElementById("zbiornik")
//funckja tylko od tworzenia elementow i pokazywania ich clientowi,
async function getToDos() {
  //pobranie danych
  var data = await fetch(base_url + "/getToDos")
  json = await data.json()
  zbiornik.innerHTML = ""

  const app = document.createElement("div")
  app.setAttribute("id", "app_divs")
  zbiornik.appendChild(app)

  //tworzenie elementow HTML i pokazywanie ich
  for (var i = 0; i <= json.length - 1; i++) {
    const div = document.createElement("div")
    div.classList.add("div")

    const importance = document.createElement("h1")
    importance.classList.add("importance")

    if (json[i].important == "true") {
      importance.innerHTML = "IMPORTANT"
    } else {
      importance.innerHTML = ""
    }
    div.appendChild(importance)

    const name = document.createElement("h2")
    name.innerHTML = json[i].name
    name.setAttribute("id", json[i].name)
    name.classList.add("h2")
    name.classList.add("font")
    div.appendChild(name)

    const daysLeft = document.createElement("h2")
    daysLeft.innerHTML = "left:  " + json[i].daysLeft + " days"
    daysLeft.setAttribute("id", json[i].daysLeft)
    daysLeft.classList.add("h2")
    daysLeft.classList.add("font")
    div.appendChild(daysLeft)

    const done = document.createElement("h3")
    done.classList.add("font")
    done.innerHTML = json[i].done

    if (json[i].done == "zrobione :D") {
      div.classList.add("done_true")
      done.innerHTML = json[i].done
    } else {
      div.classList.add("done_false")
      done.innerHTML = json[i].done
    }

    const button_true = document.createElement("button")
    button_true.classList.add("button")
    button_true.classList.add("font")
    button_true.innerHTML = "✅😎✅"
    button_true.setAttribute("onclick", `done_true(${json[i].name}, ${json[i].daysLeft}, ${json[i].important})`)

    const button_false = document.createElement("button")
    button_false.classList.add("button")
    button_false.classList.add("font")
    button_false.innerHTML = "❓😐❓"
    button_false.setAttribute("onclick", `done_false(${json[i].name}, ${json[i].daysLeft}, ${json[i].important})`)

    const button_remove = document.createElement("button")
    button_remove.classList.add("button")
    button_remove.classList.add("font")
    button_remove.innerHTML = "❌⛔❌"
    button_remove.setAttribute("onclick", `single_remover(${json[i].name})`)

    const div_guzik = document.createElement("div")
    div_guzik.style.display = "flex"
    div_guzik.style.gap = "15px"

    div.appendChild(done)

    div_guzik.appendChild(button_true)
    div_guzik.appendChild(button_false)
    div_guzik.appendChild(button_remove)

    div.appendChild(div_guzik)
    app.appendChild(div)
  }
}
//zmienia stan ukonczenia zadania z niewykonanego na zrobione, parametry to id, "adresy" do odpowiednich nazw i liczby dni
async function done_true(id_nazwa, id_dni, important_value) {
  const nazwa = id_nazwa.innerHTML
  const dni = id_dni
  const status = "zrobione :D"
  const important = important_value

  //wyslanie zapytania do serwera, ktory z linku pobierze potrzebne dane

  const url = `${base_url}/addTrue/${nazwa}/${dni}/${status}/${important}`
  await fetch(url)
  getToDos()
}
//zmienia stan ukonczenia zadanie z wykonanego na niezrobione, parametry to id, "adresy" do odpowiednich nazw i liczby dni
async function done_false(id_nazwa, id_dni, important_value) {
  const nazwa = id_nazwa.innerHTML
  const dni = id_dni
  const status = "do zrobienia :("
  const important = important_value

  //wyslanie zapytania do serwera, ktory z linku pobierze potrzebne dane

  const url = `${base_url}/addFalse/${nazwa}/${dni}/${status}/${important}`
  await fetch(url)
  getToDos()
}

//pobriera dane z inputow i wysyla je do talbicy todos, odrazu pokazuje sie zadanie niewykonane
async function sendData() {
  const nazwa = document.getElementById("nazwa").value
  const dni = document.getElementById("dni").value
  const wazne = document.getElementsByName("wazne")
  var selectedValue

  wazne.forEach((wazne) => {
    if (wazne.checked) {
      selectedValue = wazne.value
    }
  })
  //wyslanie zapytania do serwera, ktory z linku pobierze potrzebne dane
  const url = `${base_url}/addToDo/${nazwa}/${dni}/${selectedValue}`

  await fetch(url)

  getToDos()
  document.getElementById("nazwa").value = ""
  document.getElementById("dni").value = ""
  alert("YOU JUST ADDED TASK!")
}
//funkcja polazuje maker zadania
function create_maker() {
  document.getElementById("zbiornik").innerHTML = ""
  const div = document.createElement("div")
  div.setAttribute("id", "interfejs")

  const input_name = document.createElement("input")
  input_name.classList.add("button")
  input_name.setAttribute("name", "nazwa")
  input_name.setAttribute("type", "text")
  input_name.setAttribute("id", "nazwa")
  input_name.setAttribute("placeholder", "name")

  const input_days = document.createElement("input")
  input_days.classList.add("button")
  input_days.setAttribute("name", "dni")
  input_days.setAttribute("type", "text")
  input_days.setAttribute("id", "dni")
  input_days.setAttribute("placeholder", "days")

  //wazne
  const div_important = document.createElement("div")
  div_important.classList.add("button")

  const label_wazne = document.createElement("label")
  label_wazne.setAttribute("for", "wazne")
  label_wazne.innerHTML = "important"

  const input_wazne = document.createElement("input")
  input_wazne.setAttribute("type", "radio")
  input_wazne.setAttribute("name", "wazne")
  input_wazne.setAttribute("id", "wazne")
  input_wazne.setAttribute("value", "true")

  div_important.appendChild(label_wazne)
  div_important.appendChild(input_wazne)

  //nie wazne
  const div_notImportant = document.createElement("div")
  div_notImportant.classList.add("button")

  const label_nieWazne = document.createElement("label")
  label_nieWazne.setAttribute("for", "nieWazne")
  label_nieWazne.innerHTML = "not very important"

  const input_nieWazne = document.createElement("input")
  input_nieWazne.setAttribute("type", "radio")
  input_nieWazne.setAttribute("name", "wazne")
  input_nieWazne.setAttribute("id", "nieWazne")
  input_nieWazne.setAttribute("value", "false")

  div_notImportant.appendChild(label_nieWazne)
  div_notImportant.appendChild(input_nieWazne)

  //guzik wysylania
  const btn_send = document.createElement("button")
  btn_send.innerHTML = "ADD TASK ➕"
  btn_send.setAttribute("onclick", "sendData()")
  btn_send.classList.add("button")

  //div pomocny do radio btn
  const div_radio = document.createElement("div")
  div_radio.classList.add("div_radio")
  div_radio.appendChild(div_important)
  div_radio.appendChild(div_notImportant)

  //dodanie wszystkiego
  div.appendChild(input_name)
  div.appendChild(input_days)
  div.appendChild(div_radio)
  div.appendChild(btn_send)
  document.getElementById("zbiornik").appendChild(div)
}

async function single_remover(name) {
  const nazwa = name.innerHTML

  const url = `${base_url}/single_remover/${nazwa}`
  await fetch(url)
  getToDos()
}
