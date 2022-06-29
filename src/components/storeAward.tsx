import styled from 'styled-components'

import { PLAYSTORE_IMAGE, APPLE_IMAGE } from '../contents/iamges'
import { FadeType } from '../types/fadeType'
import { useFade } from '../hooks/useFade'

const StoreAwardStyled = styled.div<FadeType>`
  opacity: ${({ isOpacity }) => (isOpacity ? '1' : '0')};
  transform: translateY(${({ isTransY }) => (isTransY ? '0px' : '30px')});
  transition: all 0.7s ease-in-out 0.2s;
  height: 50px;
  display: flex;
  & div {
    padding-left: 60px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  & div:nth-child(1) {
    background: url(${PLAYSTORE_IMAGE}) no-repeat center left/50px;
    margin-right: 20px;
  }
  & div:nth-child(2) {
    background: url(${APPLE_IMAGE}) no-repeat center left/50px;
  }
`

const StoreAward: React.FC = () => {
  const [opacity, animation] = useFade()
  return (
    <StoreAwardStyled isOpacity={opacity} isTransY={animation}>
      <div>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </div>
      <div>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 수상
      </div>
    </StoreAwardStyled>
  )
}

export default StoreAward
