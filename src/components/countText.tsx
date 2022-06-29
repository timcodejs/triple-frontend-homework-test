import styled from 'styled-components'

import { useCount } from '../hooks/useCount'

const CountTextStyled = styled.div`
  font-size: 35px;
  margin-bottom: 40px;
  & p {
    margin: 0;
    line-height: 60px;
  }
  & span {
    font-weight: bold;
  }
`

const CountText: React.FC = () => {
  const userCount = useCount(350)
  const reviewCount = useCount(21)
  const saveCount = useCount(650)

  return (
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
  )
}

export default CountText
