const item1 = document.querySelector(".busca").value;
const search = document.querySelector(".adicionaritem");
const container = document.querySelector(".todobox");

search.addEventListener("click", valor);

function valor(event) {
  event.preventDefault();
  const item1 = document.querySelector(".busca").value;
  console.log(item1);

  const newdiv = document.createElement("div");
  newdiv.classList.add("divlist");

  container.appendChild(newdiv);

  const newlist = document.createElement("li");
  newlist.innerText = item1;
  newlist.classList.add("lidiv");

  newdiv.appendChild(newlist);

  if (item1 == "") {
    return null;
  }
}

function deleteitem() {
    
}
