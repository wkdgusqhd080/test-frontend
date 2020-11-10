import React, {useEffect} from 'react';
import BannerImg from '../../../img/community_banner_img.png';

import bottomNavi from '../../../img/그룹 73443.png';
import WhiteBackground from '../../Modules/WhiteBackground';

const MainPageContainer = ({}) => {

    useEffect(()=> {
        //console.log(text, history);
    }, []) 

    return (
        <div className='mainPageContainer'>
            <div>
                <img src={BannerImg} alt='배너' className="bannerImg"/>
            </div>

            <WhiteBackground/>

            <WhiteBackground/>

            <div>
                <img src={bottomNavi} alt='하단네비' className/>
            </div>

        </div>
    )
}

export default MainPageContainer;