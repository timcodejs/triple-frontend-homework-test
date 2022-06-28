import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyled />
      hello
    </>
  )
}

export default App
