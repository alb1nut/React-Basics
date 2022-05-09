import React, { Component } from 'react';
import ReactDom from 'react-dom';

import JSON from './12.1 db.json.json'

//Components
import Header from './components/Header'
import NewsList from './components/News_List';




class App extends Component{
  state={
    news:JSON

  }
  render(){
    return(
      <div>
        <Header text ='Logo'/>
        <NewsList  news={this.state.news}/>
      </div>
    )

  }
}


ReactDom.render(<App/> ,document.getElementById('root'))