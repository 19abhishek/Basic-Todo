import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <div>
      <form className={classes.input}>
        <input type="text" />
        <button type="submit" className={classes.btn}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
