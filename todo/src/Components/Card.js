import React, { useState } from "react";
import Form from "./Form";
import { RiCloseCircleLine, TiEdit } from "react-icons/all";

function Card({ toDos, completeToDo, removeToDo, updateToDo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateToDo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }
  return toDos.map((toDo, index) => (
    <div
      key={index}
      className={toDo.isCompleted ? "todo-row completed" : "todo-row"}
    >
      <div key={toDo.id} onClick={() => completeToDo(toDo.id)}>
        {toDo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeToDo(toDo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: toDo.id, value: toDo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Card;
