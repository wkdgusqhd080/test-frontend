import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

const Logo = React.lazy(()=> import('../components/Pages/Logo'));
const Login = React.lazy(()=>import('../components/Pages/Login'));
const Join = React.lazy(()=>import('../components/Pages/Join'));

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <React.Suspense fallback={<div>로딩중</div>} >
        <Route exact path={process.env.PUBLIC_URL+"/"} component={Logo} />
        <Route exact path={process.env.PUBLIC_URL+"/login"} component={Login} />
        <Route exact path={process.env.PUBLIC_URL+"/join"} component={Join} />
        {/* */}
      </React.Suspense>
    )
  }
}

export default App