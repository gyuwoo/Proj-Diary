import React from "react";

function Item({id, isDone, content, createdDate, onUpdate, onDelete}) {
  function onChangeCheckbox(){
    onUpdate(id);
  }
  function onClickDelete(){
    onDelete(id);
  }
  return (
    <div className="Item">
      <div className="title_col"><strong>{new Date().toLocaleDateString()}</strong>{content}</div>
      <button className="btn_col" onClick={onClickDelete}>삭제</button>
    </div>
  )
};
export default Item;