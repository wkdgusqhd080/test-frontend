import React from 'react';
import header from '../../../img/1113.svg';
import backBtn from '../../../img/back_button_gray.svg';
import OnePageTheme from '../../templates/OnePageTheme'
import CustomInput from '../../Modules/CustomInput'
import CustomBtn from '../../Modules/CustomBtn'
import CustomText from '../../Modules/CustomText'
import axios from 'axios';
import MiniNavi from '../../Modules/MiniNavi'

class Join extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = ({
            joinInfo: {
                email: "",
                pwd: "",
                nick: "",
                phone: "",
            },
            complete: false
        })
    }


    handleSubmit = async ()=> {

        let flag = false;
        
        let email = this.state.joinInfo.email;
        let pwd = this.state.joinInfo.pwd;
        let nick = this.state.joinInfo.nick;
        let phone = this.state.joinInfo.phone;

        if(email != '' || pwd != '' || nick != '' || phone != '') {
            await axios({
                method: 'post',
                url: 'http://localhost:3002/join',
                data: { joinInfo: this.state.joinInfo } 
                }) 
                .then(response => {
                        if(response.data.code == '200') {
                            alert(response.data.message);
                            flag = true;
                        }else {
                            alert(response.data.message);
                            return false;
                        }
                })
                .catch(error => {
    
                });
            if(flag) {
                this.props.history.push("/login");
            }
        }else {
           alert("정보를 입력해주세요.");
        }
        
    }

    /*
    setColor = ()=> {
        this.setState({
            color: "bluefull"
        });
    }
    */

    setJoinInfo = (obj) => {
        this.setState({joinInfo : obj})

        let email = this.state.joinInfo.email;
        let pwd = this.state.joinInfo.pwd;
        let nick = this.state.joinInfo.nick;
        let phone = this.state.joinInfo.phone;
            if(email != '' && pwd != '' && nick != '' && phone != '') {
                this.setState({complete : true});
            }else {
                this.setState({complete : false});
            }
    }

    /*
    componentDidUpdate = () => {
 
    }
    */

    render() {
        const {color} = this.state
        const {history} = this.props;
        const {joinInfo} = this.state
        const {complete} = this.state;

        return (
            <OnePageTheme
                wrapStyle="text-center"
                containerStyle="default"
                welcomeTheme={<div id="index"></div>}
                header={<img src={header} />}
                footer={<div className="footer"></div>}
            >
            
            {/* <ul className="ul1">
                <li className="li1"><img src={backBtn} alt="back-btn" onClick={()=> history.push("/login")}/></li>
                <div class="join-text">회원가입</div>
            </ul> */}
            <MiniNavi
                menuName='회원가입'
                history={history}
                backBtnDisplay='Y'
            />

            <div className="join-info-input-msg">가입정보를 입력해주세요 :)</div>

            <div className="inputForm">
                <CustomText
                    text="이메일"
                    style="email"
                />
                <CustomInput
                    type="text"
                    placeholder="이메일을 입력해주세요"
                    style="email ph joinInput"
                    name="email"
                    joinInfo={joinInfo}
                    setJoinInfo={this.setJoinInfo}
                />
                <CustomText
                    text="비밀번호"
                    style="pwd"
                />
                <CustomInput
                    type="password"
                    placeholder="숫자,영문,특수문자 포함 12자"
                    style="pwd ph joinInput"
                    name="pwd"
                    joinInfo={joinInfo}
                    setJoinInfo={this.setJoinInfo}
                />

                <CustomText
                    text="닉네임"
                    style="nick"
                />
                <CustomInput
                    type="text"
                    placeholder="사용할 닉네임을 입력해주세요"
                    style="nick ph joinInput"
                    name="nick"
                    joinInfo={joinInfo}
                    setJoinInfo={this.setJoinInfo}
                />

                <CustomText
                    text="연락처"
                    style="phone"
                />
                <CustomInput
                    type="text"
                    placeholder='"-"제외, 숫자만 입력해주세요'
                    style="phone ph joinInput"
                    name="phone"
                    joinInfo={joinInfo}
                    setJoinInfo={this.setJoinInfo}
                />
            </div>
            
                <CustomBtn
                    text="가입완료"
                    style={complete ? 'full blue': 'full gray'}
                    history={this.props.history}
                    handleClick={this.handleSubmit}
                />
            </OnePageTheme>
        )
    }
    
}

export default Join