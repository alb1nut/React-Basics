import React from 'react';
import ReactDom from 'react-dom';


//Components
import Header from './components/Header'

const App = () => {
  return(
    <div>
      <Header text ='Hello'>I am Albert</Header>
      <Header text ='World'/>
    </div>
  )
}


ReactDom.render(<App/> ,document.getElementById('root'))