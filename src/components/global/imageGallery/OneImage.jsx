import React from 'react'

const OneImage = ({image,openModal}) => {
  return (
    <div className="w-full max-w-md mx-auto">
          <img
            src={image}
            alt="Single image"
            className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(0)}
          />
        </div>
  )
}

export default OneImage