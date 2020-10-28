import React from 'react'
import PropTypes from 'prop-types'
import StringUtils from '../../../utils/StringUtils'

const Wrapper = ({children, ...props}) => 
<div className = {StringUtils.isNull(props.wrapperStyles) ? "default" : props.wrapperStyles}>
</div>


const Common = ({ header, containerStyles, isTitle, title, contentStyles, children, footer, ...props}) => 
{
    return (
        <Wrapper {...props}>
            <header>
                { header }
            </header>
            <div className = { containerStyles }>
                { isTitle && <>{ title }</>}
                <div className = { contentStyles }>
                    { children }
                </div>
            </div>
            { footer }
        </Wrapper>
    );
};

Common.propTypes = {
    containerStyles: PropTypes.string, 
    title: PropTypes.any,
    contentStyles: PropTypes.string
}

export default Common