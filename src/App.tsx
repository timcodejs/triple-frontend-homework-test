import { createGlobalStyle } from 'styled-components'

import Main from './pages/main'

// 전역 스타일 적용
const GlobalStyled = createGlobalStyle`
  body {
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyled />
      <Main />
    </>
  )
}

export default App
