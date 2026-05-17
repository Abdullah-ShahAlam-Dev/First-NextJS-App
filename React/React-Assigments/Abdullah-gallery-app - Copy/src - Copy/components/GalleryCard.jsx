import React from 'react'

const GalleryCard = ({ item }) => {
  return (
    // <div className='w-[280px] rounded-xl overflow-hidden shadow-lg bg-gray-900'>
<div className='w-[280px] rounded-xl overflow-hidden shadow-lg' style={{background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)"}}>



      {/* <img
        src={item.download_url}
        alt={item.author}
        className='w-full h-[200px] object-cover'
      /> */}


<img
  src={`https://picsum.photos/seed/${item.id}/400/300`}
  alt={item.author}
  className='w-full h-[200px] object-cover'
/>
      <div className='p-3'>
        <h3 className='text-white font-semibold text-sm'>{item.author}</h3>
        <p className='text-gray-400 text-xs mt-1'>
          {item.width} x {item.height}
        </p>
      </div>

    </div>
  )
}

export default GalleryCard