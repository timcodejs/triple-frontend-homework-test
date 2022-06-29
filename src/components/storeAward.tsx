import styled from 'styled-components'

import { PLAYSTORE_IMAGE, APPLE_IMAGE } from '../contents/iamges'

const StoreAwardStyled = styled.div`
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
  return (
    <StoreAwardStyled>
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
