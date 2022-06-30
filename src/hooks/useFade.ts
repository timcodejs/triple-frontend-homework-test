import { useEffect, useState } from 'react'

export const useFade = (value: number): [boolean, boolean, number] => {
  const [opacity, setOpacity] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [delay, setDelay] = useState(0)

  // 초기 마운트 시 상태 변경
  useEffect(() => {
    setOpacity(true)
    setAnimation(true)
    setDelay(value)
  }, [value])

  return [opacity, animation, delay]
}
