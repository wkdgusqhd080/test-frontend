import React, {useEffect} from 'react';

const CustomBtn = ({text, style, history, handleClick}) => {

    useEffect(()=> {
        //console.log(text, history);
    }, []) 

    return (
        <button className={"btn "+style}
                onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default CustomBtn;