import React from 'react'
import OnePageTheme from '../../templates/OnePageTheme'
import header from '../../..//img/1113.svg';
import useRole from '../../../img/이용약관.png';
import CustomBtn from '../../Modules/CustomBtn';
import LoginFormLogo from '../../Modules/LoginFormLogo';
import CustomInput from '../../Modules/CustomInput';
import Axios from 'axios';


class Login extends React.Component {
  // componentDidMount = () =>console.log(this.props)


  constructor(props) {
      super(props);

      this.state = ({
        joinInfo: {
            email: "",
            pwd: "",
        }
      })
  }

  handleSubmit = () => {
        Axios({
          method: 'post',
          url: 'http://localhost:3002/login',
          data: {joinInfo: this.state.joinInfo}
        })
        .then(response => {
            console.log(response.data);

            if(response.data.code == '200') {
              alert("환영합니다 " + response.data.message.loginUser.nick + "님");
              window.sessionStorage.setItem('email', response.data.message.loginUser.email);
              window.sessionStorage.setItem('nick', response.data.message.loginUser.nick);
              window.sessionStorage.setItem('pwd', response.data.message.loginUser.pwd);
              window.sessionStorage.setItem('phone', response.data.message.loginUser.phone);
              
              this.props.history.push('/main');

            }else {
              alert(response.data.message);
            }
            
        })
        .catch(error => {

        })
  }

  setJoinInfo = (obj) => this.setState({joinInfo : obj})

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
                            name="email"
                            style="email ph"
                            joinInfo={this.state.joinInfo}
                            setJoinInfo={this.setJoinInfo}
                        />
                      </li>
                      <li className="loginForm-li2">
                        <CustomInput
                            type="password"
                            name="pwd"
                            placeholder="비밀번호"
                            style="pwd ph"
                            joinInfo={this.state.joinInfo}
                            setJoinInfo={this.setJoinInfo}
                        />
                      </li>
                    </ul>
                  </div>

                  <ul className="login-form-ul1">
                    <li className="login-form-li1">
                      <CustomInput
                          type="checkbox"
                          style="logincheck"
                          setJoinInfo={this.setJoinInfo}
                       />
                    </li>
                    
                    <li className="login-form-li1">
                      <span className="keep-state">로그인 상태 유지하기</span>
                    </li>
                  </ul>
                      <CustomBtn 
                        text="로그인"
                        //history={this.props.history}
                        style="blue"
                        handleClick={this.handleSubmit}
                        />
                      <CustomBtn 
                        text="회원가입"
                        //history={this.props.history}
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