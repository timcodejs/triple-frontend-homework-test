import styled from 'styled-components'

import AwardLogo from '../components/awardLogo'
import CountText from '../components/countText'
import StoreAward from '../components/storeAward'

const MainStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
  }
  & > div > div {
  }
`

const Main = () => {
  return (
    <MainStyled>
      <div>
        <AwardLogo />
        <div>
          <CountText />
          <StoreAward />
        </div>
      </div>
    </MainStyled>
  )
}

export default Main
