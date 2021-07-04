window.addEventListener('load', ()=> {

  // Delete button

  const buttonsCollection = document.getElementsByClassName("deleteBtn");
  const buttons = Array.from(buttonsCollection);
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const id = button.value
          axios.delete(`http://localhost:8000/jokes/${id}`);
          button.parentElement.parentElement.parentElement.remove()
      })
  });

  // Create joke
  const createBtn = document.getElementById("createBtn");
  if(createBtn) {
    createBtn.addEventListener("click", () => {
      const title = document.getElementById("title").value;
      const start = document.getElementById("start").value;
      const end = document.getElementById("end").value;
      axios.post(`http://localhost:8000/jokes`, {
        title: title,
        start: start,
        end: end
      })
      .then(() => {
        console.log("relocating")
        window.location.assign("http://localhost:3000/")
      })
    })
  }


  // Edit joke
  const editBtn = document.getElementById("editBtn");
  if(editBtn) {
    editBtn.addEventListener("click", () => {
      const URL = window.location.href
      const id = URL.slice(22,23)
      const title = document.getElementById("title").value;
      const start = document.getElementById("start").value;
      const end = document.getElementById("end").value;
      axios.patch(`http://localhost:8000/jokes/${id}`, {
        title: title,
        start: start,
        end: end
      })
      .then(() => {
        console.log("relocating")
        window.location.assign("http://localhost:3000/")
      })
    })
  }

});