import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home (){
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>나만의 Diary</h1>
      <p>일기의 효과가 궁금하시면 <strong>'Effects Of Diary'</strong>  버튼을, 일기를 쓰려면 <strong>'Go to Read'</strong> 버튼을 눌러주세요.</p>
      <hr />
      <div className="move">
        <p>
          <button className="Effects" onClick={() => navigate("/effects")}>Effects Of Diary</button>
        </p>
        <p>
          <button className="Read2" onClick={() => navigate("/read")}>Go To Write!</button>
        </p>
      </div>
    </div>
  );
};

export default Home;