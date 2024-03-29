function ajouterChampInput(value) {
    var nouvelInput = document.createElement("input");
    
    nouvelInput.setAttribute("type", "hidden");
    nouvelInput.setAttribute("id", "valuedit");
    nouvelInput.setAttribute("name", "valuedit");
    nouvelInput.setAttribute("value", value );
    
    var todoItemsField = document.querySelector('.todo-items-field');
    todoItemsField.appendChild(nouvelInput);
}

const urlParams = new URLSearchParams(window.location.search);
const todoparam = urlParams.get('todo');
let todo = localStorage.getItem('todo') ? localStorage.getItem('todo').split(',') : [];
if (todoparam !== null) {
    todo.push(todoparam);
    localStorage.setItem('todo', todo.join(','));
    window.location.href = "index.html"
    }
const todoContainer = document.getElementById('todo-container');
todoContainer.innerHTML = '';
for (let i = 0; i < todo.length; i++) {
const el = document.createElement("div");
const clear  = document.getElementById('clear-items');
el.classList.add("inside");
el.innerHTML = `
    <div class="items_added">
    <p id="item">${todo[i]}</p>
    </div>
                
    <div class="button">
        <a href="?edit=${i}">
            <img src="editer.png" class="edit-item">
        </a>
        <a href="?delete=${i}">
            <img src="poubelle.png" class="delete-item">
        </a>
    </div>
            `;
    clear.style.visibility = 'visible';
    todoContainer.appendChild(el);
}
 

let deleteparm = urlParams.get('delete');
todo = localStorage.getItem('todo') ? localStorage.getItem('todo').split(',') : [];
if (deleteparm !== null) {
    if (deleteparm=="all"){
        localStorage.clear()
        window.location.href = "index.html"
    }
    else{
        todo.splice(deleteparm,1)
        localStorage.setItem('todo', todo.join(','));
        window.location.href = "index.html"
    }
}

let editparm = urlParams.get('edit')
todo = localStorage.getItem('todo') ? localStorage.getItem('todo').split(',') : [];
if (editparm !== null) {
    let edited  = todo[editparm]
    var inputElement = document.getElementById("field-text");
    var buttonElement = document.getElementById("submit-btn");
    buttonElement.textContent = "Edit";
    inputElement.value = edited;
    ajouterChampInput(editparm)
    inputElement.name = "afteredit"

}

let aftereditparm = urlParams.get("afteredit")
let editvalue = urlParams.get("valuedit")
todo = localStorage.getItem('todo') ? localStorage.getItem('todo').split(',') : [];
if(aftereditparm != null){
    todo[editvalue] = aftereditparm;

    localStorage.setItem('todo', todo.join(','));
    window.location.href = "index.html"     
}
