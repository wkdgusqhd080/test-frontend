import React, {useEffct} from 'react'
import OnePageTheme from '../../templates/OnePageTheme'
import header from '../../../img/1113.svg';

const Home = ({history}) => 
<OnePageTheme
  wrapStyle= "text-center"
  containerStyle = "default"
  welcomeTheme={<div id="index"></div>}
  header={<img src={header} /> }
  footer={<div className="footer">footer</div>}
>
  <div>HOME 내용</div>

</OnePageTheme>

export default Home