import React from 'react'
import { useEditor } from '@craftjs/core'
import { DragButton } from '../DragComponents/DragButton'

const Components = () => {
  const {connectors,} = useEditor()
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
      <span className='font-bold text-xl mt-4 text-gray-400 '>Components</span>
      <div className="w-full flex flex-col gap-2 bg-red-200 h-screen  ">
        
        
        <button
          className="w-full bg-green-500 text-white py-2 px-4 rounded"
          ref={(ref) => connectors.create(ref, <DragButton text="Click me"  />)}
          data-cy="toolbox-text"
        >

          Add Button
        </button>
        <button
          className="w-full bg-green-500 text-white py-2 px-4 rounded"
          ref={(ref) => connectors.create(ref,<h1>Hello</h1>)}
          data-cy="toolbox-text"
        >


          Add Text
        </button>
      </div>




    </div>

    </div>
  )
}

export default Components
