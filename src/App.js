import "./styles.css";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  const addListItem = (text) => {
    text = text.trim();
    if (text.length > 0) {
      const currItem = {
        value: text,
        id: Math.random().toString()
      };
      setList(() => {
        return [currItem, ...list];
      });
    } else {
      alert("Please enter a valid text");
    }
  };

  const removeItem = (id) => {
    //console.log(id);
    setList((list) => {
      console.log("27", list);
      const newList = list.filter((cItem) => cItem.id !== id);
      console.log(newList);
      return newList;
    });
  };

  //console.log(list);

  return (
    <div className="App">
      <Input onSubmit={addListItem} />
      <List item={list} remove={removeItem} />
    </div>
  );
}
