import { Todo } from "./todo.class";

export class TodoList {
    constructor(){
        this.cargarLocalStorage();
    }

    

   

    nuevotodo(todo){

        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    eliminarTodo(  id ){
     //   console.log();
        this.todos = this.todos.filter((todo)=> todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){

        for ( const todo of this.todos){

            console.log(id , todo.id);
             

            if ((todo.id * 1) == (id * 1)){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
               
        }
             
    }

    eliminarCompletado(){
        this.todos = this.todos.filter((todo)=> !todo.completado);  
        this.guardarLocalStorage();
    }


    guardarLocalStorage(){
       localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

       /*  if (localStorage.getItem('todo')){
              this.todos = JSON.parse( localStorage.getItem('todo') );
        }else{
            this.todos= [];
        } */
        
        this.todos = (localStorage.getItem('todo')) ? JSON.parse( localStorage.getItem('todo') ) : [];

       // this.todos = this.todos.map(  obj => Todo.fromJson( obj ) );
       this.todos =  this.todos.map(   Todo.fromJson );

    }



}