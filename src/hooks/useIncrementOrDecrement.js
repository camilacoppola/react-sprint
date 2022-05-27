import React, { useState } from 'react'

const useIncrementOrDecrement = (initialState) => {
    const [incrementOrDecrement, setIncrementOrDecrement] = useState(initialState)

    const increment = () => {
        setIncrementOrDecrement(incrementOrDecrement + 1)
    }

    const decrement = () => {
        setIncrementOrDecrement(incrementOrDecrement - 1)
    }
  
    return [incrementOrDecrement, increment, decrement]
}

export default useIncrementOrDecrement