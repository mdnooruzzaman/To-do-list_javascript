const container = document.querySelector('.container');
var input_Value = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var item_box = document.createElement('div');
        item_box.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "Edit";
    	edit.addEventListener('click', () => this.edit1(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "Delete";
    	remove.addEventListener('click', () => this.remove1(item_box, name));

        var complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = "Completed";
        complete.addEventListener('click' , () => this.complete(input , name));

    	container.appendChild(item_box);

        item_box.appendChild(input);
        item_box.appendChild(edit);
        item_box.appendChild(remove);
        item_box.appendChild(complete);

    }

    edit1(input, name){
       
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    

    remove1(item_box, name){
        item_box.parentNode.removeChild(item_box);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

    complete(input , name){
        input.disabled = !input.disabled;
        let indexof = todos.indexOf(name);
        todos[indexof] = input.value;
        var style1 = document.querySelector('.item_input').style
        style1.textDecoration = "line-through";
    }
}

add.addEventListener('click', check);


function check(){
	if(input_Value.value != ""){
		new item(input_Value.value);
        todos.push(input_Value.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		input_Value.value = "";
	}
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


new item("sport");