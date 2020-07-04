import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Checkout from './components/Checkout';
import Success from './components/Success';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, p {
    margin: .5rem 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  .two-column-grid {
    display: grid;
    grid-template-areas:
      "aside"
      "main"
  }
  
  main {
    grid-area: main;
  }
  
  aside {
    grid-area: aside;
  }
  
  @media screen and (min-width: 680px) {
    .two-column-grid {
      grid-template-columns: 100px auto 35%;
      grid-template-areas:
      ". main aside"
    }
  
    main, aside {
      height: 100vh;
    }
  
    aside {
      border-left: 1px solid #eee;
    }
  }

  section h2 {
    text-align: left;
    margin: 2rem 0;
  }
  
  form {
    max-width: 250px;
    padding: 1rem;
  }
`

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <HeaderBar />
        <Switch>
          <Route path="/" component={Checkout} exact />
          <Route path="/success" component={Success} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;