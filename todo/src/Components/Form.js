import React, { useState, useEffect, useRef } from "react";

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              name="text"
              value={input}
              placeholder="Update"
              className="toDoInput"
              onChange={handleChange}
              ref={inputRef}
            />
            <button type="submit" className="toDoButton">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="text"
              value={input}
              placeholder="Add a todo"
              className="toDoInput"
              onChange={handleChange}
              ref={inputRef}
            />
            <button type="submit" className="toDoButton">
              Add To Do
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Form;
