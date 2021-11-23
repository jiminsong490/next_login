import React, { useState } from 'react'

const InputHandle = (props) => {
    const [text, setEmail] = useState('')
    const handleChange = (e) => {
        setEmail(e.target.value)
        // console.log(e.target.value)
        // return e.target.value
    }

    return (
        <input
            id={props.id}
            type={props.type}
            name={props.name}
            value={text}
            size={props.size}
            placeholder={props.placeholder}
            autoComplete={props.autocomplete}
            onChange={handleChange}
        />
    )
}
export default InputHandle
