function onClick () {
  let saveButton = document.getElementById("save_button")
  saveButton.addEventListener("click", ()=> {
    // console.log("click me agian i dare you")
    let newLegoCreation = {
      "name": document.getElementById("lego__creator").value,
      "creation": document.getElementById("lego__creation").value,
      "color": document.getElementById("lego__color").value,
      "shape": document.getElementById("lego__shape").value
    }
    console.log(newLegoCreation)
    API.addToDataBase(newLegoCreation)
  })
}

onClick()

const API = {
  addToDataBase(legoToSave) {
    fetch("http://localhost:8088/lego_creations", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(legoToSave)
    })
  }
}