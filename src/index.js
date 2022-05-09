import React from 'react';
import ReactDom from 'react-dom';


//Components
import Header from './components/Header'

const App = () => {
  return(
    <div>
      <Header text ='Logo'/>
      
    </div>
  )
}


ReactDom.render(<App/> ,document.getElementById('root'))