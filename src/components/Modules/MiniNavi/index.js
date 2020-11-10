import React from 'react';
import backBtn from '../../../img/back_button_gray.svg';

const MiniNavi = ({menuName, history, backBtnDisplay}) =>{

    return (
        <ul className="ul1">
             <li className="li1">
                 {
                    backBtnDisplay === 'Y'
                    ? <img src={backBtn} alt="back-btn" onClick={()=> history.push("/login")}/>
                    : <span></span>
                 }
             </li>
                <div class="join-text">{menuName}</div>
        </ul>
    )
}

export default MiniNavi;