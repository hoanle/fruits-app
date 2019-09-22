import React from "react"
import PropTypes from "prop-types"
import AllFruits from './AllFruits'
import NewFruit from './NewFruit'

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fruits: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleFormSubmit(name, description) {

    let formdata = new FormData();

    formdata.append("fruit[name]", name)
    formdata.append("fruit[description]", description)
    fetch('/api/v1/fruits', {
      method: 'POST',
      header: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    })
    .then((response) => { return response.json()})
    .then((fruit) => {
      console.log("handleFormSubmit");
      console.log(fruit.name);
      this.addNewFruit(fruit);
    })
  }

  handleDelete(id) {
    fetch('/api/v1/fruits/' + id, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => { this.deleteFruit(id) })
  }

  deleteFruit(id) {
    let newFruits = this.state.fruits.filter((fruit) => fruit.id != id)
    this.setState({fruits: newFruits})
  }

  addNewFruit(fruit) {
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

  updateFruit(fruit) {
    let newFruits = this.state.fruits.filter((f) => f.id != fruit.id)
    newFruits.push(fruit)
    this.setState({ fruits: newFruits })
  }

  handleUpdate(fruit) {
    let formdata = new FormData();

    formdata.append("fruit[name]", fruit.name)
    formdata.append("fruit[description]", fruit.description)
    formdata.append("fruit[id]", fruit.id)

    fetch('/api/v1/fruits/' + fruit.id, {
      method: 'PUT',
      header: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata
    }).then((response) => { this.updateFruit(fruit) })
  }


  componentDidMount() {
    fetch('/api/v1/fruits')
    .then((response) => { return response.json()})
    .then((data) => {this.setState({ fruits: data }) });
  }

  render () {
    return (
      <React.Fragment>
        <NewFruit handleFormSubmit={this.handleFormSubmit}/>
        <AllFruits fruits={this.state.fruits}
        handleDelete={this.handleDelete}
        handleUpdate={this.handleUpdate} />
      </React.Fragment>
    );
  }
}

export default Body
