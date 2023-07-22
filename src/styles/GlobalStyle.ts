import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html,
body,
#root {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #717171;
}

:root {  
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  /* CELL STYLES */
  [id='0000'] {
    border: 0px;
  }

  [id='0001'] {
    border-right: 3px solid black;
  }

  [id='0010'] {
    border-left: 3px solid black;
  }

  [id='0011'] {
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  [id='0100'] {
    border-bottom: 3px solid black;
  }

  [id='0101'] {
    border-bottom: 3px solid black;
    border-right: 3px solid black;
  }

  [id='0110'] {
    border-bottom: 3px solid black;
    border-left: 3px solid black;
  }

  [id='0111'] {
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  [id='1000'] {
    border-top: 3px solid black;
  }

  [id='1001'] {
    border-top: 3px solid black;
    border-right: 3px solid black;
  }

  [id='1010'] {
    border-top: 3px solid black;
    border-left: 3px solid black;
  }

  [id='1011'] {
    border-top: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  [id='1100'] {
    border-top: 3px solid black;
    border-bottom: 3px solid black;
  }

  [id='1101'] {
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
  }

  [id='1110'] {
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
  }

  [id='1111'] {
    border: 3px solid black;
  }
}
`;

export default GlobalStyle;
