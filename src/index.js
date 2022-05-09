import React from 'react';
import ReactDom from 'react-dom';


//Components
import Header from './components/Header'
import NewsList from './components/News_List';
import JSON from './12.1 db.json.json'




const App = () => {
  return(
    <div>
      <Header text ='Logo'/>
      {/* <Header text ='World'/> */}
      <NewsList />
    </div>
  )
}


ReactDom.render(<App/> ,document.getElementById('root'))