import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

function List() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    if (!toDo.text || /^\s*$/.test(toDo.text)) {
      return;
    }

    const newToDos = [toDo, ...toDos];

    setToDos(newToDos);
    //console.log(...toDos);
  };

  const updateToDo = (toDoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setToDos((prev) =>
      prev.map((item) => (item.id === toDoId ? newValue : item))
    );
  };

  const removeToDo = (id) => {
    const removeArray = [...toDos].filter((todo) => todo.id !== id);

    setToDos(removeArray);
  };

  const completeToDo = (id) => {
    let updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.isComplete = !toDo.isComplete;
      }
      return toDo;
    });
    setToDos(updatedToDos);
  };

  return (
    <div>
      <h1>To Do Today</h1>
      <Form onSubmit={addToDo} />
      <Card
        toDos={toDos}
        completeToDo={completeToDo}
        removeToDo={removeToDo}
        updateToDo={updateToDo}
      />
    </div>
  );
}

export default List;
