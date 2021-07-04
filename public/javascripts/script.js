window.addEventListener('load', ()=> {

  // Delete joke

  const buttonsCollection = document.getElementsByTagName("button");
  const buttons = Array.from(buttonsCollection);
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const id = button.value
          axios.delete(`http://localhost:8000/jokes/${id}`)
          .then (() => {
            button.parentElement.parentElement.parentElement.remove()
          })
      })
  });

  


});