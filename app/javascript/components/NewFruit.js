import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';

class NewFruit extends React.Component {

  render () {
    let formFields = {}

    return (
      <React.Fragment>
        <form onSubmit={(e) => { this.props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset(); e.preventDefault(); }}>
          <input ref={ input => formFields.name = input } placeholder="Enter fruit name"></input>
          <input ref={ input => formFields.description = input } placeholder="Enter a descriptuon"></input>
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default NewFruit
