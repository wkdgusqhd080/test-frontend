import React from 'react';
import OnePageTheme from '../../templates/OnePageTheme'
import header from '../../../img/1113.svg';
import LoginState from '../../Modules/LoginState';
import MiniNavi from '../../Modules/MiniNavi';
import CustomText from '../../Modules/CustomText'
import CustomInput from '../../Modules/CustomInput'
import MyPageInput from '../../Modules/MyPageInput';
import CustomBtn from '../../Modules/CustomBtn'
import MainPageContainer from '../../Modules/MainPageContainer';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            onLogin: this.onLogin,
            onLogout: this.onLogout
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

    }

    setJoinInfo = (obj) => {
        this.setState({joinInfo : obj})
        console.log(this.state.joinInfo);
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
        const {joinInfo} = this.state

        return (
            <OnePageTheme
                wrapStyle= "text-center"
                containerStyle = "default"
                welcomeTheme={<div id="index"></div>}
                header={<img src={header} /> }
                footer={<div className="footer"></div>}
            >

            <MiniNavi
                menuName='Main'
                history={history}
                backBtnDisplay='N'
            />

            <MainPageContainer />

            </OnePageTheme>
        )
    }
    



}





export default Main;