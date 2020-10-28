import React, {useEffect, useState} from 'react';

const CustomInput = ({type, style, placeholder, name, setJoinInfo, joinInfo}) => {
    
    const [val, setVal] = useState("")

    useEffect(()=> {
    }, [val])

    const handleChange = e => {

        setVal(e.value)
        //console.log("useEffect")
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

export default CustomInput;