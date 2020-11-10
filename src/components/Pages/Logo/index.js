import React, { Component } from 'react'
import OnePageTheme from '../../templates/OnePageTheme'
import header from '../../..//img/1113.svg';
import logo from '../../../img/73497.svg';
import loading from '../../../img/load.png';
const Login = '../components/Pages/Login';

class Logo extends React.Component {


    componentDidMount = () => {

        const {history} = this.props;

        setTimeout(() => {
            history.push("/login");
        }, 1000);
    }

    render() {

        //const {history} = this.props;

        return(
            <OnePageTheme
                wrapStyle= "text-center"
                containerStyle = "default"
                welcomeTheme={<div id="index"></div>}
                header={<img src={header} /> }
                footer={<div className="footer"></div>}
>
                    <div className='logo'>
                        <img src={loading} alt="logo"></img>
                    </div>
                
            </OnePageTheme>
        )
    }
}

export default Logo