import React, { useEffect } from "react";
import ActionContext from "../../contexts/ActionContext";
import Content from "./Content";
export function Lane({ todos, setTodos }) {

  const handleDoClick = (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex(todo => todo.id === itemId)
    if (todos[itemIndex]) {
      cloneTodos[itemIndex].type = "doing"
    }
    setTodos(cloneTodos)
  };

  const handleDoneClick = (type) => (itemId) => {
      const cloneTodos = [...todos];
      const itemIndex = cloneTodos.findIndex(todo => todo.id === itemId)
      if (todos[itemIndex]) {
        cloneTodos[itemIndex].type = "done"
      }
      setTodos(cloneTodos);
    };
    useEffect(() => {
      setTodos(JSON.parse(window.localStorage.getItem("todos")));
    }, [setTodos]);

      useEffect(() => {
        if (todos.length) 
        window.localStorage.setItem("todos", JSON.stringify(todos))
      }, [setTodos, todos]);
  
  const handleTodoClick = (type) => (itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex(todo => todo.id === itemId)
    if (todos[itemIndex]) {
      cloneTodos[itemIndex].type = "todo"
    }
    setTodos(cloneTodos)
  
};

  return (
    <ActionContext.Provider
      value={{ onTodoClick : handleTodoClick ,onDoClick: handleDoClick, onDoneClick: handleDoneClick }}
    >
      <div className="lane-container">
        <Content title="Todo" list={todos.filter(todo => todo.type === "todo")} />
        <Content title="Doing" list={todos.filter(todo => todo.type === "doing")}/>
        <Content title="Done" list={todos.filter(todo => todo.type === "done")} />
      </div>
    </ActionContext.Provider>
  );
}
export default Lane;
