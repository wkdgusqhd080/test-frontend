import React from 'react';
import OnePageTheme from '../../templates/OnePageTheme'
import header from '../../../img/1113.svg';
import LoginState from '../../Modules/LoginState';
import MiniNavi from '../../Modules/MiniNavi';
import CustomText from '../../Modules/CustomText'
import CustomInput from '../../Modules/CustomInput'
import MyPageInput from '../../Modules/MyPageInput';
import CustomBtn from '../../Modules/CustomBtn'

class Mypage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            onLogin: this.onLogin,
            onLogout: this.onLogout,
            joinInfo: {
                email: window.sessionStorage.getItem('email'),
                pwd: "",
                nick: window.sessionStorage.getItem('nick'),
                phone: window.sessionStorage.getItem('phone'),
            }
        }
    }

    onLogin = ()=> {
        this.setState({
            logged: true
        })
    }

    onLogout = ()=> {
        this.setState({
            logged: false
        })
    }

    handleSubmit = () => {
        console.log(this.state.joinInfo);
    }

    setJoinInfo = (obj) => {
        this.setState({joinInfo : obj})
        //console.log(this.state.joinInfo);
    }

    componentDidMount() {
        const email = window.sessionStorage.getItem('email');
        
        if(email) {
            this.onLogin();
        }else {
            this.onLogout();
            this.props.history.push('/login');
        }
       
    }

    render() {

        const {history} = this.props;
        const {joinInfo} = this.state;
        
        return (
            <OnePageTheme
                wrapStyle= "text-center"
                containerStyle = "default"
                welcomeTheme={<div id="index"></div>}
                header={<img src={header} /> }
                footer={<div className="footer"></div>}
            >

            <MiniNavi
                menuName='Mypage'
                history={history}
            />

                <LoginState/>

                <CustomText
                    text="이메일"
                    style="email"
                />
                <MyPageInput
                    type="text"
                    placeholder="이메일을 입력해주세요"
                    style="mypage"
                    name="email"
                    val={this.state.joinInfo.email}
                    joinInfo={joinInfo}
                    setJoinInfo={this.setJoinInfo}
                />

                <CustomText
                    text="닉네임"
                    style="nick"
                />
                <MyPageInput
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    style="mypage"
                    name="nick"
                    val={this.state.joinInfo.nick}
                    joinInfo={joinInfo}
                    setJoinInfo={this.setJoinInfo}
                />

                <CustomText
                    text="비밀번호"
                    style="pwd"
                />
                <MyPageInput
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    style="mypage"
                    name="pwd"
                    val={this.state.joinInfo.pwd}
                    joinInfo={joinInfo}
                    setJoinInfo={this.setJoinInfo}
                />

                <CustomText
                    text="연락처"
                    style="phone"
                />
                <MyPageInput
                    type="text"
                    placeholder='"-"제외, 숫자만 입력해주세요'
                    style="mypage"
                    name="phone"
                    val={this.state.joinInfo.phone}
                    joinInfo={joinInfo}
                    setJoinInfo={this.setJoinInfo}
                />

                <CustomBtn
                    text="변경하기"
                    style='full blue'
                    history={this.props.history}
                    handleClick={this.handleSubmit}
                />


            </OnePageTheme>
        )
    }
    



}





export default Mypage;