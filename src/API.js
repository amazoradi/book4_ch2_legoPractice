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