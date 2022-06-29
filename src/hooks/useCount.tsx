import { useEffect, useState } from 'react'

export const useCount = (value: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0 // 카운트 증가를 위한 프레임 변수 지정
    const duration = 1000 / 60 // 카운트 증가 속도
    const lateDuration = 1000 / 10 // 두번째 인터벌 카운트 증가 속도
    const total = Math.round(1000 / duration) // 카운트 종료 시점
    const lateInter = (frame: number, value: number) => {
      const late = setInterval(() => {
        frame++
        const t = frame / total
        const result = Math.round(value * t)
        if (value >= result) {
          setCount(result)
        }
        if (frame === total) {
          clearInterval(late)
        }
      }, lateDuration)
    }
    const inter = setInterval(() => {
      frame++
      const t = frame / total // 동시 카운트 증가를 위한 변수
      const result = Math.round(value * t) // 인자값(value)에 t값을 곱한 값
      if (value >= result) {
        // 상태 업데이트
        setCount(result)
      }
      if (frame === 57) {
        clearInterval(inter) // 첫번째 인터벌 종료
        lateInter(frame, value) // 증가 속도를 지연시키기 위해 두번째 인터벌 함수 실행
      }
    }, duration)
  }, [value])

  return count
}
