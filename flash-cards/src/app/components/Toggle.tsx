import React from 'react'
function Toggle({setShortsMode, shortsMode} : {setShortsMode: () => void, shortsMode: boolean}) {
  return (
   <div className="mb-4 flex items-center gap-2">
          <label className="font-medium">Show only favorites</label>
          <button
            className={`px-3 py-1 rounded ${
              shortsMode ? "bg-yellow-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => {
              setShortsMode()
            }}
          >
            {shortsMode ? "On" : "Off"}
          </button>
        </div>
  )
}

export default Toggle