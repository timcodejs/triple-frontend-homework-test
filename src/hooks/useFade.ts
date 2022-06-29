import { useEffect, useState } from 'react'

export const useFade = () => {
  const [opacity, setOpacity] = useState(false)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setOpacity(true)
    setAnimation(true)
  }, [])

  return [opacity, animation]
}
