import { useEffect, useState, useRef} from "react";
import '../styles/AddTodo.scss'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddTodo = ({ addItem }) => {
  // const { addItem } = props;  // props로 받는다면 이거 해줘야 함수 사용 가능
  
  // 사용자 입력을 저장할 객체
  // id title done 에 대한 정보를 저장해서 객체로
  
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    //props로 받아온 addItem 함수 실행
    addItem(todoItem); // {title: 'input 입력값'}
    setTodoItem({ title: ''});
    // setTodoItem(this.value)
    // return this.value;
  };

  const onEnterKeyPress = (e) =>{
    if (e.key == 'Enter') {
      onButtonClick();
    }
  };

  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (<div className="AddTodo">

    <input type="text" 
    className="inputTodo"
    value={todoItem.title} 
    placeholder="Add Todo here"
    
    onChange={(e) => {(e.target.value.trim()?setTodoItem({ title: e.target.value}):alert('올바른 값 입력 플리즈'))
  // console.log('보고보보보', e.target.value.trim());
  }}
    onKeyPress={onEnterKeyPress}
    // autoFocus
    ref={inputFocus}
    ></input>


    <button onClick={onButtonClick} 
    className="btn inputBtn">
      <FontAwesomeIcon icon={faPlus} />

    </button>

  </div>
  )
}

export default AddTodo;