function onClick() {
  let saveButton = document.getElementById("save_button")
  saveButton.addEventListener("click", () => {
    let newLegoCreation = {
      "name": document.getElementById("lego__creator").value,
      "creation": document.getElementById("lego__creation").value,
      "color": document.getElementById("lego__color").value,
      "shape": document.getElementById("lego__shape").value
    }
    API.addToDataBase(newLegoCreation)
  })
}

onClick()