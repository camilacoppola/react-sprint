import React, { useState } from 'react'

const useLocalStorageGet = (key) => {
    const [value, setValue] = useState(() =>{
        return JSON.parse(localStorage.getItem(key))
    })

  return (
    [value]
  )
}

export default useLocalStorageGet