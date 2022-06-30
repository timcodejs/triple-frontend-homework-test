import { useEffect, useState } from 'react'

export const useFade = (): [boolean, boolean] => {
  const [opacity, setOpacity] = useState(false)
  const [animation, setAnimation] = useState(false)

  // 초기 마운트 시 상태 변경
  useEffect(() => {
    setOpacity(true)
    setAnimation(true)
  }, [])

  return [opacity, animation]
}
