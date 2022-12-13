import { useState, useRef } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'My Todo1',
      done: false,
    },
    {
      id: 2,
      title: 'My Todo2',
      done: false,
    },
    {
      id: 3,
      title: 'My Todo3',
      done: true,
    },
  ]);
  const todoId = useRef(4); //useRef를 로컬변수(랜더링 되어도 값이 유지됨)로 사용 -> db랑 연결된 느낌을줌 -> db연결 하면 지워

// AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems(state)에 접근 불가능
// 상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능
// => App 컴포넌트에 addItem() 함수를 정의하고, 해당 함수를 AddTodo props로 넘겨야 함

  // const addItem = (newItem) => {
  const addItem = (newItem) => {
    //...
    // newItem - {id:todoItems.length + 1 title: 받아오기 done:false} 객체형식 
    // setTodoItems()

    newItem.id = todoId.current++; // 키를 위한 id 설정
    newItem.done = false; // done 초기화
    // 기존 todoItems를 유지하고, 새로운 newItem을 추가
    setTodoItems([...todoItems, newItem]); // setTodoItems(todoItems.concat(newItem))

    // const newItem = todoItems.concat({
    //   id: todoItems.length + 1,
    //   title: newTitle,
    //   done: false,
    // });
    // setTodoItems(newItem)

  };

  return (
    <div className="App">
      {console.log('todoItems', todoItems)}
      {console.log(todoItems[0])}
      
      <AddTodo
        addItem={addItem}
      ></AddTodo>

      {todoItems.map((item) => {
        // console.log(item); // {id: 1, title: 'My Todo1', done: false}
        return <Todo key={item.id} item={item}></Todo>;
      })}
      
    </div>
  );
};

export default App;