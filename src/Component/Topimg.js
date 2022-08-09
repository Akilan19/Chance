import React from 'react'

function Topimg(it) {
  return (
    <div>
        <img src={it.image} />
        <p>{it.name}</p>
    </div>
  )
}

export default Topimg