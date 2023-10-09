import React from 'react'

function Skeleton({height, width, margin}) {
    const skeletonStyle = {
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: 'lightgray',
        borderRadius: '4px',
        animation: 'skeleton-loading 1.5s infinite',
        marginTop: `${margin}rem`,
      };
  return (
    <div style={skeletonStyle}></div>
  )
}

export default Skeleton