import React from 'react'
import '../css/style.css'


const Header =(props)=>{
    return (
        <div className='header'>
      <h2>{props.text} {props.children}</h2>
      <input type='text'></input>

        </div>
    )
}

export default Header