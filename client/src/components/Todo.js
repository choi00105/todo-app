
import { useState } from "react";
import '../styles/Todo.scss'

const Todo = ({ item , delItem }) => {
  const { id, title, done } = item;
  // console.log(item.id);
  const [todoItem, setTodoItem]= useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteBtnClick = () => {
    delItem(todoItem);
  };
  // const todoItem = { id: 7, title: 'hello', done: false }
  // const { title, ...rest } = todoItem;
  // console.log(title) // hello
  // console.log(rest) // { id: 7, done: false }

  // title input 커서가 깜빡인다고 수정이 가능한 것은 아님
  // 사용자가 키보드 입력할 때마다 todoItem의 title을 새 값으로 변경
  const editEventHandler = (e) => {
    //rest 에는 id, done 정보가 들어있다
    const { title, done, ...rest} = todoItem
    console.log(e.target.value);
    setTodoItem({
      title: e.target.value,
      ...rest
    });
  };
  const toggleReadOnly = () => {
    if(readOnly){
    setReadOnly(false);
    } else setReadOnly(true);

  }
  const onEnterPress = (e) => {
    if(e.key=='Enter') {
      toggleReadOnly();
    };
  };

  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    setTodoItem({
      done: e.target.checked,
      ...rest,

    });
  };
  // console.log(delItem(item));
  return (
    <div className="Todo">
      <input
        type="checkbox"
        
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input type="text" 
      className="showTodo"
      defaultValue={todoItem.title} 
      onChange={editEventHandler}
      readOnly={readOnly}
      onClick={toggleReadOnly}
      onKeyPress={onEnterPress}></input>
      <button onClick={onDeleteBtnClick}
      className="btn">🗑️</button>
    </div>
  );
};

export default Todo;