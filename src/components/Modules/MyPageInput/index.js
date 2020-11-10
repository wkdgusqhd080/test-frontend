import React, {useEffect, useState} from 'react';

const MyPageInput = ({type, style, placeholder, name, val, setJoinInfo, joinInfo}) => {
    
    const [data, setData] = useState('');

    useEffect(()=> {
    })

    const handleChange = e => {
        //console.log('2:'+e.target.value);
        setData(e.target.value);
        let obj = Object.assign({}, joinInfo)
        obj[e.target.name] = e.target.value
        //alert(JSON.stringify(obj))
        setJoinInfo(obj)
    }
    
    return (
        <input type={type} 
                name={name} 
                placeholder={placeholder} 
                className={"input "+style} 
                value={val} 
                onChange={handleChange} />
    )
}

export default MyPageInput;