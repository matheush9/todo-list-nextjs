import styles from "./todo.module.scss";
import React, { useState } from "react";

export default function Todo() {
  const [novoTodo, setNovoTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [edita, setEdita] = useState(-1);
  const [textoModificado, setTextoModificado] = useState("");

  function addTodo() {
    if (!novoTodo) {
      alert("O campo não pode estar vazio!");
      return;
    }
    console.log(todos.length + 1);
    const todo = {
      id: Math.floor(Math.random() * 1000),
      value: novoTodo,
    };

    setTodos((list) => [...list, todo]);
    setNovoTodo("");
  }

  function deleteTodo(id) {
    const array = todos.filter((todo) => todo.id !== id);
    setTodos(array);
  }
  function editTodo(id, novoTexto) {
    const todoAtual = todos.filter((todo) => todo.id === id);
    if (!novoTexto) {
      alert("O campo não pode estar vazio!");
      return;
    }
    const novoTodo = {
      id: todoAtual.id,
      value: novoTexto,
    };

    deleteTodo(id);
    setTodos((list) => [...list, novoTodo]);
    setTextoModificado("");
    setEdita(-1);
  }

  return (
    <div className={styles.app}>
      <div>
        <h1 className={styles.h1}>Lista de Tarefas</h1>
        <input
          onChange={(event) => setNovoTodo(event.target.value)}
          placeholder="Adicione uma tarefa..."
          className={styles.pesquisa}
          value={novoTodo}
        ></input>
        <button onClick={() => addTodo()}>Adicionar</button>
      </div>

      <ul className={styles.listaTarefas}>
        <p className={styles.totalTarefas}>Total de {todos.length} tarefas</p>
        {todos.map((todo) => {
          return (
            <div className={styles.tarefa}>
              <li key={todo.id}>
                <input type="checkbox"
                 className={styles.checkbox} 
                 onChange={() => checkboxVerif(todo.id)}
                 id="" 
                 />
                {todo.value}
              </li>
              <div>
                <button onClick={() => setEdita(todo.id)}>Editar</button>
                <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
              </div>

              {edita == todo.id ? (
                <div className={styles.updateTarefa}>
                  <input
                    placeholder="Edite aqui..."
                    value={textoModificado}
                    onChange={(event) => setTextoModificado(event.target.value)}
                  />
                  <button onClick={() => editTodo(todo.id, textoModificado)}>
                    Update
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
