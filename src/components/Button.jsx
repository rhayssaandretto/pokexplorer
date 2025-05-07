import React from 'react'

const Button = ({ label, onclick }) => {
    return (
        <button onClick={onclick} className='bttn'>{label}</button>
    )
}

export default Button