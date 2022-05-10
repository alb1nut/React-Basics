import React from 'react'
import '../css/style.css'


const Header = (props) =>{
     
 return(
      <header className='header'>
        <h2 >{props.text}</h2>
        <input type='text' onChange={ props.keywords}/>
       
    </header>
         )
            
        }
            
        
        


export default Header