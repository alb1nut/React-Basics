import React, { Component } from 'react';
import ReactDom from 'react-dom';

import JSON from './12.1 db.json.json'

//Components
import Header from './components/Header'
import NewsList from './components/News_List';




class App extends Component{
  state={
    news:JSON,
    filtered:[]


  }
 getkeyword =(event)=>{
  // console.log(event.target.value);
  let keyword =event.target.value;
  let filtered = this.state.news.filter((item)=>{
       return item.title.indexOf(keyword) > -1;
    
  })
  this.setState({
    filtered
  })
  
}





  render(){
      let newsFiltered =this.state.filtered
      let newsWhole =this.state.news


    return(
      <div>
        <Header keywords={this.getkeyword}  text ='LOGO'/>
        <NewsList  news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
          <h1>
            The news are: 
          </h1>
        </NewsList>
      </div>
    )
  }
}


ReactDom.render(<App/> ,document.getElementById('root'))