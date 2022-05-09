import React from 'react'
// import JSON from '../12.1 db.json.json'
import '../css/style.css'


// Components
import NewsListItem from './News_List_Item'

const NewsList =(props)=>{
   const items = props.news.map((item)=>{
           return (
           <NewsListItem key={item.id} item ={item}/>
            //    <NewsListItem/>
           )
   })

    return(
        <div className='newsList'>
          {items}
        </div>
    )
}

export default NewsList