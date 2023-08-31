//UI logic
function addInputList(array) {
  const list = document.querySelector("#favList")
  
  array.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.append(item);
    list.append(listItem);
  });
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputs = [document.querySelector("#fav2").value, document.querySelector("#fav1").value, document.querySelector("#fav3").value]

    addInputList(inputs);
  });
});