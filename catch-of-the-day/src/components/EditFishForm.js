import React, { Component } from "react";

class EditFishForm extends Component {
  // podemos utilizar esto en vez de refs
  handleChange = (e) => {
    //1. Take a copy of current fish
    const { name, value } = e.currentTarget;
    const updatedFish = { ...this.props.fishes, [name]: value };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const { name, price, status, desc, image, index } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          name="name"
          onChange={this.handleChange}
          type="text"
          value={name}
        />
        <input
          name="price"
          onChange={this.handleChange}
          type="text"
          value={price}
        />
        <select name="status" onChange={this.handleChange} value={status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sould Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={desc}
        ></textarea>
        <input
          name="image"
          onChange={this.handleChange}
          type="text"
          value={image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
