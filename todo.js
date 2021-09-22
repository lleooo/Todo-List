const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const things =document.querySelector(".things");
showTask();

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add("active");
    }
    else {
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}

function showTask() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element}<span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
        console.log(element, index);
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = '';
    console.log('*************');
    things.textContent=listArr.length;
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}