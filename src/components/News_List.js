import React from 'react'

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
          {props.children}
          {items}
        </div>
    )
}

export default NewsList