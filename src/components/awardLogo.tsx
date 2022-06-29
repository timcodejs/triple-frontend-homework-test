import styled from 'styled-components'

import { LOGO_IMAGE } from '../contents/iamges'

const AwardLogoStyled = styled.div`
  img {
    width: 400px;
    margin-right: 200px;
  }
`

const AwardLogo: React.FC = () => {
  return (
    <AwardLogoStyled>
      <img src={LOGO_IMAGE} alt="트리플 어워드 로고 이미지" />
    </AwardLogoStyled>
  )
}

export default AwardLogo
