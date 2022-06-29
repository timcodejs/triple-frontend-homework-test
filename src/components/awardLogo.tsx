import styled from 'styled-components'

import { LOGO_IMAGE } from '../contents/iamges'
import { FadeType } from '../types/fadeType'
import { useFade } from '../hooks/useFade'

const AwardLogoStyled = styled.div<FadeType>`
  opacity: ${({ isOpacity }) => (isOpacity ? '1' : '0')};
  transform: translateY(${({ isTransY }) => (isTransY ? '0px' : '30px')});
  transition: all 0.7s ease-in-out 0s;
  img {
    width: 400px;
    margin-right: 200px;
  }
`

const AwardLogo: React.FC = () => {
  const [opacity, animation] = useFade()
  return (
    <AwardLogoStyled isOpacity={opacity} isTransY={animation}>
      <img src={LOGO_IMAGE} alt="트리플 어워드 로고 이미지" />
    </AwardLogoStyled>
  )
}

export default AwardLogo
