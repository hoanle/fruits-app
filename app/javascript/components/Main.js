import React from "react"
import PropTypes from "prop-types"
import Body from './Body';
import Container from '@material-ui/core/Container';

class Main extends React.Component {
  render () {
    return (
      <Container maxWidth="xs">
        <h1>Fruits are great!</h1>
        <Body />
      </Container>
    );
  }
}

export default Main
