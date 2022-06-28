import { createGlobalStyle } from 'styled-components'

import Main from './pages/main'

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
