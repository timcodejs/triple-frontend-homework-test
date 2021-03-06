import styled from 'styled-components'

import { useCount } from '../hooks/useCount'
import { useFade } from '../hooks/useFade'
import { FadeInStyled } from '../style/fadeStyle'

const CountTextStyled = styled.div`
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
  const [opacity, animation, delay] = useFade(0.1)

  return (
    <FadeInStyled isOpacity={opacity} isTransY={animation} delayTime={delay}>
      <CountTextStyled>
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
    </FadeInStyled>
  )
}

export default CountText
