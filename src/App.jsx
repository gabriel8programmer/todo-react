
//components
import AdderTodo from "./components/AdderTodo";
import ListTodos from "./components/ListTodos";
import Todo from "./components/Todo";

//styles
import "./assets/sass/App.sass";

function App() {

  return (
    <main id="TodoContainer">
      <h1>Lista de Tarefas</h1>
      <AdderTodo />
      <ListTodos>
        <Todo text="Primeira tarefa"/>
        <Todo text="Segunda tarefa"/>
        <Todo text="Terceira tarefa"/>
      </ListTodos>
    </main>
  );

}

export default App
