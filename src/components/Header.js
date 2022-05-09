import React, { Component } from 'react'
import '../css/style.css'


class Header extends Component{

    inputChangeHandler(event){
        console.log(event.target.value);
        // console.log('hi');
    }
    render(){
 return(
      <header className='header'>
        <h2  >Logo</h2>
        <input type='text' onChange={ (e) =>this.inputChangeHandler(e)}/>
    </header>
         )
            
        }
            
        
        }


export default Header