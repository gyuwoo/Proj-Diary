import React, {useState, useRef, useEffect} from "react";
import './Read.css'
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import History from "./History";
import Write from "./Write";



function Read (){
  useEffect(()=>{
    const rawData = localStorage.getItem('todo');
    if (!rawData) {
      return ;
    }
    const localData = JSON.parse(rawData);
    if(localData.lenght === 0){
      return;
    }
    localData.sort((a,b) => Number(b.id)-Number(a.id));
    idRef.current = localData[0].id + 1;
    setTodo(localData);
  },[])
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);
  const idRef = useRef(0);

  function onCreate(content){
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    const newTodo = [newItem, ...todo]
    setTodo(newTodo);
    localStorage.setItem('todo', JSON.stringify(newTodo))
    idRef.current += 1;
  }

  function onUpdate(targetId){
    const newTodo = todo.map((item)=>
      item.id === targetId
      ? {...item, isDone: !item.isDone}
      : item
    )
    setTodo(newTodo)
    localStorage.setItem('todo', JSON.stringify(newTodo))
  }

  function onDelete(targetId){
    setTodo(todo.filter((item)=>item.id !== targetId))
  }

  return (
    <div className="Read">
      <h1 className="MyDiary">나만의 Diary</h1>
      <br />
      <Write onCreate={onCreate} ></Write>
      <History todo={todo} onUpdate={onUpdate} onDelete={onDelete}></History>
      <Item></Item>
      <button onClick={() => navigate(-1)}>홈으로 돌아가기</button>
    </div>
    
  );
};

export default Read;