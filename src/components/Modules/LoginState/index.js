import React from 'react';

const LoginState = () => {

    return (
        <div className="loginState">
            <div className="join-info-input-msg">{window.sessionStorage.getItem('nick')}님의 정보입니다 :)</div>
        </div>
    )
}

export default LoginState;