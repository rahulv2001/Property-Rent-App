import React from 'react'
import ListItem from './ListItem/ListItem'
import "./styles.css"

const List = ({list}) => {
  return (
    <div className='list-wrap'>
        {list.map((item)=>{
            return <ListItem item={item} key={item.id} />
        })}
        
    </div>
  )
}

export default List