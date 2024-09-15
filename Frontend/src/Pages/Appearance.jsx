import React from 'react'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, ChevronDown } from 'lucide-react'
const Appearance = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
      <span className='font-bold text-xl mt-4 text-gray-400 '>Appearence</span>
    </div>
      <div className="border-b border-gray-200 px-6 py-4">
        <button className="border border-gray-200 flex w-full items-center rounded-lg bg-gray-50 px-3 py-1.5">
          <span className="rounded-lg p-1 ">selected title</span>
        </button>
      </div>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
          <span className=" select-none font-semibold capitalize">Layout</span>
          <span className="group-open:-rotate-180 transition-transform -rotate-90">
            <ChevronDown size={16} />
          </span>
        </summary>
        <div className="border-b  items-center justify-center flex gap-x-6 border-gray-200 px-6 py-4">
          <button className="px-1 py-1 border-2 rounded-lg border-gray-200 ">
            <AlignCenter />
          </button>
          <button className="px-1 py-1 border-2 rounded-lg border-gray-200 ">
            <AlignLeft />
          </button>
          <button className="px-1 py-1 border-2 rounded-lg border-gray-200 ">
            <AlignRight />
          </button>
          <button className="px-1 py-1 border-2 rounded-lg border-gray-200 ">
            <AlignJustify />
          </button>
        </div>
      </details>

      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
          <span className=" select-none font-semibold capitalize">Spacing</span>
          <span className="group-open:-rotate-180 transition-transform -rotate-90">
            <ChevronDown size={16} />
          </span>
        </summary>
        <div className="border-b  items-center justify-center flex gap-x-6 border-gray-200 px-6 py-4">

        </div>
      </details>

      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
          <span className=" select-none font-semibold capitalize">Size</span>
          <span className="group-open:-rotate-180 transition-transform -rotate-90">
            <ChevronDown size={16} />
          </span>
        </summary>
        <div className="border-b  items-center justify-center flex gap-x-6 border-gray-200 px-6 py-4"></div>
      </details>

      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
          <span className=" select-none font-semibold capitalize">Typography</span>
          <span className="group-open:-rotate-180 transition-transform -rotate-90">
            <ChevronDown size={16} />
          </span>
        </summary>
        <div className="border-b  items-center justify-center flex gap-x-6 border-gray-200 px-6 py-4"></div>
      </details>

      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
          <span className=" select-none font-semibold capitalize">Position</span>
          <span className="group-open:-rotate-180 transition-transform -rotate-90">
            <ChevronDown size={16} />
          </span>
        </summary>
        <div className="border-b  items-center justify-center flex gap-x-6 border-gray-200 px-6 py-4"></div>
      </details>

      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 py-4 px-6">
          <span className=" select-none font-semibold capitalize">Border</span>
          <span className="group-open:-rotate-180 transition-transform -rotate-90">
            <ChevronDown size={16} />
          </span>
        </summary>
        <div className="border-b  items-center justify-center flex gap-x-6 border-gray-200 px-6 py-4"></div>
      </details>
    </div>
  )
}

export default Appearance
