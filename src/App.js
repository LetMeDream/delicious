import Pages from "./pages/Pages";
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Salute> Hello there </Salute>
      <Pages />
    </div>
  );
}

const Salute = styled.h1`
  padding: 0rem 2rem
`

export default App;
