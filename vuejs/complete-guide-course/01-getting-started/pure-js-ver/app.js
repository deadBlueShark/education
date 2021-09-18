var submitBtn = document.getElementsByClassName("submit-goal")[0];
var resultList = document.getElementsByTagName("ul")[0];
var inputElm = document.getElementById("goal-input");

submitBtn.addEventListener("click", () => {
  var value = inputElm.value.trim();
  if (!value) return;

  var child = document.createElement("li");
  child.appendChild(document.createTextNode(value));
  resultList.appendChild(child);

  inputElm.value = "";
})
