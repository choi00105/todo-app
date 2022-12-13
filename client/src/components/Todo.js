import { useState } from "react";

const Todo = ({ item , delItem }) => {
  const { id, title, done } = item;
  // console.log(item.id);
  const [todoItem, setTodoItem]= useState(item);

  const onDeleteBtnClick = () => {
    delItem(todoItem);
  }
  // console.log(delItem(item));
  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
};

export default Todo;

/*
const Todo = ({ item }) => {
  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
      />
      <label htmlFor={`todo${item.id}`}>{item.title}</label>
    </div>
  );
};

export default Todo;
*/