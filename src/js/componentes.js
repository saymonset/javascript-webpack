import { Todo, TodoList } from '../classes';
import '../css/componentes.css';
import {  todoList } from '../index.js';



export const saludar = ( nombre ) => {

    console.log('Creando etiqueta h1, en el HTML!');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );

}

//Referencia al html

const divTodoList = document.querySelector('.todo-list'); 
const txtinput = document.querySelector(".new-todo");
const btnBorrar = document.querySelector(".clear-completed");
const ulfilters = document.querySelector(".filters");
const anchorFiltros = document.querySelectorAll(".filtro");



export const crearTodoHtml = (todo)=> {
    const htmlTodo = `<li class="${ (todo.completado) ? 'completed':''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);

    return div;

}


//Eventos
txtinput.addEventListener("keyup",(evento)=>{

     if (evento.keyCode === 13 && txtinput.value.length > 0){
         const newTodo  = new Todo(txtinput.value);
         todoList.nuevotodo( newTodo );
         crearTodoHtml(newTodo);
         txtinput.value = '';
     }
    console.log(todoList);
});

divTodoList.addEventListener("click",(evento)=>{
 //   console.log('Click');
  //  console.log(evento.target.localName);
    const nombreElemento = evento.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    if (nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if (nombreElemento.includes('button')){

        tdooList.eliminarTodo(todoId);
     divTodoList.removeChild(todoElemento);
        


    }
    console.log(todoElemento);
    //console.log(todoId);
});

btnBorrar.addEventListener("click", evento => {
    todoList.eliminarCompletado();
    for (let i = divTodoList.children.length -1; i >=0; i--){
        const elemento = divTodoList.children[i];
        if (elemento.classList.contains("completed")){
            divTodoList.removeChild(elemento);
        }
    }
});

ulfilters.addEventListener("click", (evento)=> {
    const filtro = evento.target.text;
  
    console.log(evento.target.text);


    if (!filtro){
        return;
    }

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));

    evento.target.classList.add('selected');

    for (const elemento of divTodoList.children ){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        console.log(elemento);

        switch ( filtro ) {
                  case 'Pendientes':
                    if ( completado){
                        elemento.classList.add('hidden');
                    }
                    break;
               
               
                    case 'Completados':
                    if ( !completado){
                        elemento.classList.add('hidden');
                    }
                    break;
                         
        
            default:
                break;
        }

    }

});