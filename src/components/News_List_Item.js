import React from 'react'

const NewsListItem =({item})=> {

return(
    <div>
     
         <h2>{item.title}</h2>
            <p>{item.feed}</p>
         
    </div>
)


}

export default NewsListItem

