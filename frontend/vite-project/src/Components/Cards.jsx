import React from 'react'

function Cards({ item, onCardClick }) {
  return (
    <div className='flex gap-4 mt-6 flex-wrap justify-center'>
      <div
        onClick={() => onCardClick?.(item)}
        className="
          card
          bg-base-100
          w-92
          shadow-sm
          m-4
          transform
          transition
          duration-200
          ease-out
          cursor-pointer

          hover:scale-105
          hover:shadow-lg

          active:scale-95
          active:shadow-md
        "
      >
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary mx-8">{item.Category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 hover:text-white duration-200  font-poppins">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
