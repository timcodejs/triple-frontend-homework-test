import styled from 'styled-components'

import { LOGO_IMAGE } from '../contents/iamges'
import { useFade } from '../hooks/useFade'
import { FadeInStyled } from '../style/fadeStyle'

const AwardLogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 220px;
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
  const [opacity, animation, delay] = useFade(0)

  return (
    <FadeInStyled isOpacity={opacity} isTransY={animation} delayTime={delay}>
      <AwardLogoStyled>
        <img src={LOGO_IMAGE} alt="트리플 어워드 로고 이미지" />
        <span>2019년 2월 기준</span>
      </AwardLogoStyled>
    </FadeInStyled>
  )
}

export default AwardLogo
