import React from 'react'

const Header =(props)=>{
    return (
        <div>
      <h2>{props.text} {props.children}</h2>
      <input type='text'></input>

        </div>
    )
}

export default Header