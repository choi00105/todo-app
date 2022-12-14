import { useState, useRef } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';


// import './styles/SassDh.scss';
import './styles/App.scss'


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

    newItem.id = todoId.current++; // 키를 위한 id 설정
    newItem.done = false; // done 초기화
    // 기존 todoItems를 유지하고, 새로운 newItem을 추가
    setTodoItems([...todoItems, newItem]); // setTodoItems(todoItems.concat(newItem))
  };

  // 전체 Todo 리스트(todoItems)는 App 컴포넌트에서 관리하고 있으므로
  // delItem() 함수는 App 컴포넌트에 작성해야함
  const delItem = (targetItem) => {
    console.log(targetItem);
    // filter method 이용
    let newtodoItems = todoItems.filter((item) => targetItem.id !== item.id )
    console.log('newtodo', newtodoItems);
    setTodoItems(newtodoItems);
  };

  return (
    <div className="App">
      {console.log('todoItems', todoItems)}
      {console.log(todoItems[0])}
      
      <header className="header">👍✌️My Todo App</header>

      <div className='section'>
      <AddTodo
        addItem={addItem}
      ></AddTodo>
      <div className="left-todos">🚀 {todoItems.length==1?'1 Todo':todoItems.length>0?todoItems.length+' Todos':'Todo is blank'}</div>

      {todoItems.map((item) => {
        // console.log(item); // {id: 1, title: 'My Todo1', done: false}
        return <Todo key={item.id} item={item} delItem={delItem}></Todo>;
      })}
      </div>
    </div>
  );
};

export default App;