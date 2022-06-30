import styled from 'styled-components'

import { LOGO_IMAGE } from '../contents/iamges'
import { FadeType } from '../types/fadeType'
import { useFade } from '../hooks/useFade'

const AwardLogoStyled = styled.div<FadeType>`
  opacity: ${({ isOpacity }) => (isOpacity ? '1' : '0')};
  transform: translateY(${({ isTransY }) => (isTransY ? '0px' : '30px')});
  transition: all 0.7s ease-in-out 0s;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 220px;
  }
  img {
    width: 400px;
  }
  span {
    margin-top: -60px;
    font-size: 14px;
    color: #828282;
  }
`

const AwardLogo = () => {
  const [opacity, animation] = useFade()
  return (
    <AwardLogoStyled isOpacity={opacity} isTransY={animation}>
      <div>
        <img src={LOGO_IMAGE} alt="트리플 어워드 로고 이미지" />
        <span>2019년 2월 기준</span>
      </div>
    </AwardLogoStyled>
  )
}

export default AwardLogo
