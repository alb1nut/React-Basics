import React from 'react';
import ReactDom from 'react-dom';


//Components
import Header from './components/Header'
import NewsList from './components/News_List';




const App = () => {
  return(
    <div>
      <Header text ='Logo'/>
      <NewsList/>
    </div>
  )
}


ReactDom.render(<App/> ,document.getElementById('root'))