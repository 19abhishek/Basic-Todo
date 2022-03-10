import React from "react";
import classes from "./List.module.css";

const List = ({ item, remove }) => {
  const hasItem = item ? true : false;

  const clickHandler = (id) => {
    //console.log(id);
    remove(id);
  };
  return (
    <div>
      {hasItem &&
        item.map((cItem) => {
          return (
            <div key={cItem.id} className={classes.item} onClick={clickHandler}>
              {cItem.value}
            </div>
          );
        })}
    </div>
  );
};

export default List;
