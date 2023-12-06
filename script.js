const inputBox = document.getElementById("input-box"); // Corrected ID
const listContainer = document.getElementById("list-container"); // Corrected ID

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Corrected function name
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Corrected function name
    } else if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
        saveData(); // Corrected function name
    }
}, false);

function saveData() { // Corrected function name
    localStorage.setItem("data", listContainer.innerHTML);
}+

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
