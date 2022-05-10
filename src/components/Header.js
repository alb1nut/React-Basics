import React, { Component } from 'react'
import '../css/style.css'


const Header = (props) =>{
     
 return(
      <header className='header'>
        <h2 >Logo</h2>
        <input type='text' onChange={ props.keywords}/>
       
    </header>
         )
            
        }
            
        
        


export default Header