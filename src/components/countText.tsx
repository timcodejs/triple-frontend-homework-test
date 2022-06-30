import styled from 'styled-components'

import { useCount } from '../hooks/useCount'
import { FadeType } from '../types/fadeType'
import { useFade } from '../hooks/useFade'

const CountTextStyled = styled.div<FadeType>`
  opacity: ${({ isOpacity }) => (isOpacity ? '1' : '0')};
  transform: translateY(${({ isTransY }) => (isTransY ? '0px' : '30px')});
  transition: all 0.7s ease-in-out 0.1s;
  font-size: 36px;
  margin-bottom: 40px;
  & p {
    margin: 0;
    line-height: 60px;
  }
  & span {
    font-weight: bold;
  }
`

const CountText = () => {
  const userCount = useCount(350)
  const reviewCount = useCount(21)
  const saveCount = useCount(650)
  const [opacity, animation] = useFade()

  return (
    <CountTextStyled isOpacity={opacity} isTransY={animation}>
      <p>
        <span>{userCount}만 명</span>의 사용자
      </p>
      <p>
        <span>{reviewCount}만 개</span>의 리뷰
      </p>
      <p>
        <span>{saveCount}만 개</span>의 저장
      </p>
    </CountTextStyled>
  )
}

export default CountText
