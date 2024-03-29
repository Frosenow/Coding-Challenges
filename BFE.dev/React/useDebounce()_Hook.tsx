/////////////////////////////////////////////
// PURPOSE: 
// For a frequently changing value like text input you might want to debounce the changes.

// Implement useDebounce() to achieve this.

// function App() {
//   const [value, setValue] = useState(...)
//   // this value changes frequently, 
//   const debouncedValue = useDebounce(value, 1000)
//   // now it is debounced
// }
/////////////////////////////////////////////

import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(timeoutId)
  }, [value, delay])

  return debouncedValue; 
}
