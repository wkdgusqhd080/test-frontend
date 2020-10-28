import React from 'react'
import OnePageTheme from '../../templates/OnePageTheme'
import header from '../../..//img/1113.svg';
import useRole from '../../../img/이용약관.png';
import CustomBtn from '../../Modules/CustomBtn';
import LoginFormLogo from '../../Modules/LoginFormLogo';
import CustomInput from '../../Modules/CustomInput';

class Login extends React.Component {
  // componentDidMount = () =>console.log(this.props)
  render() {
    const {history} = this.props
        return(
            <OnePageTheme
                wrapStyle= "text-center"
                containerStyle = "default"
                welcomeTheme={<div id="index"></div>}
                header={<img src={header} /> }
                footer={<div className="footer"></div>}
>
                  <LoginFormLogo/>

                  <div>
                    <ul className="loginForm-ul1">
                      <li className="loginForm-li1">
                        <CustomInput
                            type="text"
                            placeholder="아이디(이메일)"
                            style="email ph"
                        />
                      </li>
                      <li className="loginForm-li2">
                        <CustomInput
                            type="text"
                            placeholder="비밀번호"
                            style="pwd ph"
                        />
                      </li>
                    </ul>
                  </div>

                  <ul className="login-form-ul1">
                    <li className="login-form-li1">
                      <CustomInput
                          type="checkbox"
                          style="logincheck"
                       />
                    </li>
                    
                    <li className="login-form-li1">
                      <span className="keep-state">로그인 상태 유지하기</span>
                    </li>
                  </ul>
                      <CustomBtn 
                        text="로그인"
                        history={this.props.history}
                        style="blue"
                        />
                      <CustomBtn 
                        text="회원가입"
                        history={this.props.history}
                        style="white"
                        handleClick={()=>history.push("/join")}
                      />

                  <div className="use-role">
                      <img src={useRole} alt="이용약관"></img>
                  </div>
            </OnePageTheme>
        )
    }
}

export default Login