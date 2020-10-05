import React, { useContext } from "react";
import ActionContext from "../../contexts/ActionContext";

export function Listitem({ children, id, type }) {
  const { onTodoClick,onDoClick, onDoneClick } = useContext(ActionContext);
  return (
    <ul className="list-container">
      <li className="list-item">
        <span className="list-content">{children}</span>
        {type !== "todo" && (
          <button className="btn" onClick={() => onTodoClick(type)(id)}>
            Todo
          </button>
        )}
        {type !== "doing" && (
          <button className="btn" onClick={() => onDoClick(id)}>
            Do
          </button>
        )}
        {type !== "done" && (
          <button className="btn" onClick={() => onDoneClick(type)(id)}>
            Done
          </button>
        )}
      </li>
    </ul>
  );
}
export default Listitem;
