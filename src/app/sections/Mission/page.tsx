import React from 'react'

const Mission = () => {
  return (
    <div className='md:flex justify-between'>
        <div className='text-slate-900 border-l-pink-400 md:w-1/2 p-2'>
            <h1 className='text-xl text-slate-950 font-extrabold flex items-center justify-center'>Mission</h1>
            <p className='font-serif text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus earum vel at illum minus. Necessitatibus eum sapiente, modi delectus consequatur 
              repellat natus vel id ducimus rerum ratione excepturi optio beatae.</p>

        </div>

        <div className='text-slate-900 border-l-pink-400 mt-2 md:w-1/2'>
            <h1 className='font-semibold text-xl text-slate-950 flex text-center justify-center'>Values</h1>
            <p>Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Ipsum suscipit
               consequuntur esse?</p>
        </div>
      
    </div>
  )
}

export default Mission
