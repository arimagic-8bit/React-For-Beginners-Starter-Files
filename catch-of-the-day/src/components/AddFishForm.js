import React, { Component } from "react";

class AddFishForm extends Component {
  // const nameRef
  // const priceRef
  // const nameRef
  // const nameRef
  // const nameRef

  createFish = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sould Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
