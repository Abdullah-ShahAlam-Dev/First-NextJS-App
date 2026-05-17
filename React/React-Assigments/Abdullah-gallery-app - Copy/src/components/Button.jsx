import React from 'react'

const Button = ({ title, handlePage, className  }) => {
  return (
    <button
      onClick={() => handlePage(title)}
      className= {className || 'bg-gray-700 hover:bg-gray-500 text-white font-bold px-4 py-2 rounded cursor-pointer'}
    >
      {title}
    </button>
  )
}




export default Button


