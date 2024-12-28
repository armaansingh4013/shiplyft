import React from 'react'

const Tile = ({title,count}) => {
  return (
    <>
     <div className="mb-4 flex flex-row items-center">
        <label className="bg-gray-200 rounded border-2 border-gray-300 w-1/5 py-2 text-center">
          <span className="text-lg font-bold">{count || 0}</span>
        </label>
        <p className="my-2 px-3 text-sm text-gray-600">{title}</p>
      </div>
    </>
  )
}

export default Tile
