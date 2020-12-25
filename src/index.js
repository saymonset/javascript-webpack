import { todo } from './classes/todo.class.js';
import './styles.css';
import { crearTodoHtml, saludar } from './js/componentes.js';
import { Todo, TodoList} from './classes'
/* import { Todo } from './classes/todo.class'
import { TodoList } from './classes/todo-list.class.js';
 */


export const todoList = new TodoList();

//todoList.todos.forEach(crearTodoHtml);

 

/* 
const tarea = new Todo('Aprender JavaScriptaaaaa');

 todoList.nuevotodo(tarea);

 console.log(todoList);

 crearTodoHtml(tarea);

 localStorage.setItem('mi-key', 'abc');
setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500); */