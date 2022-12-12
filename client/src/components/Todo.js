
// 1. 함수형 컴포넌트
// 2. input(checkbox)와 label을 랜더링하는 컴포넌트
// 3. App (부모 컴포넌트)에서 Todo(자식 컴포넌트) 1개 랜더링
const Todo = ({ item }) => {
  const { id, title, done } = item;

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