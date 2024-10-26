const inputBox = document.getElementById('input-box');

const listContainer = document.getElementById('list-container');

function addTask(){
  if (inputBox.value == ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    /* Add cross icon for the list */
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
} ,false);


function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

/* need to display the data whenever we open the web page */
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

/* 
The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.

*/