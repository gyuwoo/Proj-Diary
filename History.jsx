import React,{useState} from "react";
import Item from "./Item";


function History({todo, onUpdate, onDelete}) {
  const [search, setSearch] = useState("");
  function onChangeSearch(e){
    setSearch(e.target.value);
  }
  function getSearchResult(){
    return (search === ""
    ? todo
    : todo.filter((item)=>item.content.includes(search)))
  }
  return (
    <div className="History">
      <h1>History</h1>
      <div>
        {getSearchResult().map((item)=>(
          <Item
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          >
          </Item>)
        )}
      </div>
    </div>
  )
};
export default History;