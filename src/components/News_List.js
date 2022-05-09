import React from 'react'
import JSON from '../12.1 db.json.json'
import '../css/style.css'


// Components
import NewsListItem from './News_List_Item'

const NewsList =()=>{

   const loops = JSON.map((loop)=>{
           return (
            <ul >
            <li><h2>{loop.title}</h2></li>
            <li>{loop.feed}</li>
        </ul>
            //    <NewsListItem/>
           )
   })

    return(
        <div className='newsList'>
          {loops}
        </div>
    )
}

export default NewsList