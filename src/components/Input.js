import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className={classes.input} onSubmit={submitHandler}>
        <input type="text" value={text} onChange={changeHandler} />
        <button type="submit" className={classes.btn}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
