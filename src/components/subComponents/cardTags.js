import React from 'react'

function CardTags({props}) {
  function tagLoop() {
    return (props.map((tag) => 
      <div className='tag h-min font-code p-1 text-xs text-white bg-primary-300' >
        {tag}
      </div>
    ))
  }
  return (
    <div className='tags flex flex-wrap flex-auto items-end justify-center text-xs gap-2'>
      {tagLoop()}
    </div>
  )

}

export default CardTags;