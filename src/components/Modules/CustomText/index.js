import React from 'react'

const CustomText = ({text, style})=> {

    return (
        <div className={"joinFormText "+style}>
            {text}
        </div>
    )
}

export default CustomText