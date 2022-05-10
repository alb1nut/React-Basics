import React, { Component } from 'react';
import ReactDom from 'react-dom';

import JSON from './12.1 db.json.json'

//Components
import Header from './components/Header'
import NewsList from './components/News_List';




class App extends Component{
  state={
    news:JSON,


  }
 getkeywords =(event)=>{
  // console.log(event.target.value);
  
}

  render(){
    return(
      <div>
        <Header keywords={this.getkeywords}  text ='Logo'/>
        <NewsList  news={this.state.news}>
          <h1>
            The news are: 
          </h1>
        </NewsList>
      </div>
    )
  }
}


ReactDom.render(<App/> ,document.getElementById('root'))