import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
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
