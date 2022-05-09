import React, { Component } from 'react'
import '../css/style.css'


class Header extends Component{

    state ={
       
        keywords: ''
    }

    inputChangeHandler = (event) =>{
      
        this.setState({
            keywords : event.target.value
        });
      
    }
    render(){
     
 return(
      <header className='header'>
        <h2 >Logo</h2>
        <input type='text' onChange={ this.inputChangeHandler}/>
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
    </header>
         )
            
        }
            
        
        }


export default Header