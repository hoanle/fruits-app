import React from "react"
import PropTypes from "prop-types"
import Fruit from './Fruit'

class AllFruits extends React.Component {

  render () {
    var fruits = this.props.fruits.map((fruit) => {
      return(
        <div key={fruit.id}>
          <Fruit
            fruit={fruit}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate} />
        </div>
      );
    });

    return (
      <React.Fragment>
          {fruits}
      </React.Fragment>
    );
  }
}

export default AllFruits
