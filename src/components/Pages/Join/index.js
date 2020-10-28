import React from 'react';
import header from '../../../img/1113.svg';
import backBtn from '../../../img/back_button_gray.svg';
import OnePageTheme from '../../templates/OnePageTheme'
import CustomInput from '../../Modules/CustomInput'
import CustomBtn from '../../Modules/CustomBtn'
import CustomText from '../../Modules/CustomText'
import Axios from 'axios';

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
            color: "gray full"
            
        })
        
    }

    handleSubmit = ()=> {
        /*
        Axios.get('http://localhost:3002/api').then((Response)=>{
            console.clear();
            console.log(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
        */
       console.log("joinInfo: ", this.state.joinInfo)

        if(this.state.joinInfo.email != '' && this.state.joinInfo.pwd != '' && this.state.joinInfo.nick != '' && this.state.joinInfo.phone != '') {
            Axios({
            
                method: 'post',
                url: 'http://localhost:3002/foo',
                data: this.state.joinInfo
            })
    
            alert("가입ok");
        }else {
            alert('정보를 입력하세요.');
        }
    }
    /*
    setColor = ()=> {
        this.setState({
            color: "blue full"
        });
    }
    */

    setJoinInfo = (obj) => this.setState({joinInfo : obj})

    componentDidUpdate = () => {
        //console.log("joinInfo: ", this.state.joinInfo)
    }


    render() {
        const {color} = this.state
        const {history} = this.props;
        const {joinInfo} = this.state

        return (
            <OnePageTheme
                wrapStyle="text-center"
                containerStyle="default"
                welcomeTheme={<div id="index"></div>}
                header={<img src={header} />}
                footer={<div className="footer"></div>}
            >
            
            <ul className="ul1">
                <li className="li1"><img src={backBtn} alt="back-btn" onClick={()=> history.push("/login")}/></li>
                <div class="join-text">회원가입</div>
            </ul>

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
                    type="text"
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
                    style={color}//"gray full"
                    history={this.props.history}
                    handleClick={this.handleSubmit}
                />

            </OnePageTheme>
        )
    }

    

}

export default Join