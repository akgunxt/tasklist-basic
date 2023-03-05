let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var h3 = document.createElement('h3');
    h3.classList.add('h3-styling');
    h3.innerText = inputField.value;
    toDoContainer.appendChild(h3);
    inputField.value = "";
    h3.addEventListener('click', function(){
        h3.style.textDecoration = "line-through";
    })
    h3.addEventListener('dblclick', function(){
        toDoContainer.removeChild(h3);
    })
})
