
//UI logic
window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const fav1Input = parseInt(document.querySelector("#fav1").value);
    const fav2Input = parseInt(document.querySelector("#fav2").value);
    const fav3Input = parseInt(document.querySelector("#fav3").value);
  });
});