import React from "react"
import PropTypes from "prop-types"
import { Card, CardContent, CardActionArea, CardActions, Button } from '@material-ui/core';
class Fruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false
    }
  }

  handleEdit() {
    if (this.state.editable) {
      let name = this.name.value
      let description = this.description.value
      let id = this.props.fruit.id
      let fruit = {id: id, name: name, description: description}
      this.props.handleUpdate(fruit)
    }

    this.setState({ editable: !this.state.editable})
  }

  render () {
    let name = this.state.editable ?
    <input type="text" ref={ input => this.name = input } defaultValue={this.props.fruit.name}></input> : <h1>{this.props.fruit.name}</h1>
    let description = this.state.editable ?
    <input type="text" ref={ input => this.description = input } defaultValue={this.props.fruit.description}></input> : <p>{this.props.fruit.description}</p>

    return (
      <Card>
        <CardContent>
          {name}
          {description}
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleEdit() }>
            {this.state.editable ? "Submit" : "Edit" }
          </Button>
        </CardActions>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.handleDelete(this.props.fruit.id) }>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Fruit
