import React from 'react'
import '../css/style.css'


const NewsListItem =({item})=> {

return(
    <div>
     
         <h2  >{item.title}</h2>
            <p className='newsItem'>{item.feed}</p>
         
    </div>
)


}

export default NewsListItem

