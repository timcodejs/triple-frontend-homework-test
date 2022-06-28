import styled from 'styled-components'

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

const CountText = () => {
  return (
    <CountTextStyled>
      <p>
        <span>만 명</span>의 사용자
      </p>
      <p>
        <span>만 개</span>의 리뷰
      </p>
      <p>
        <span>만 개</span>의 저장
      </p>
    </CountTextStyled>
  )
}

export default CountText
