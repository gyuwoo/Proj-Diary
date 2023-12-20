import React, {useState} from "react";
import './Write.css'
import { useNavigate } from "react-router-dom";


function Write ({onCreate}){
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  function onChangeContent(e) {
    setContent(e.target.value);
  }
  function onSubmit() {
    onCreate(content);
  }
  

  return (
    <div className="Write">
      <div className="Write_top">
        <h1 >{new Date().toLocaleDateString()} 일기쓰기</h1>
      </div>
      <br />
      <div className="Write_Editor">
        <div className="Write_form">
          <textarea 
            value = {content}
            onChange = {onChangeContent}
            placeholder="일기를 작성해주세요"
          />
          <button onClick={onSubmit}>작성완료</button>
        </div>
      </div>
    </div>
  );
};

export default Write;