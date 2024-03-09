import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {
  
  return <div className="grocery-list">
    {items.map((item) => {
      const {id, title} = item
    })}
  </div>
}

export default List
