import React, { Fragment, Component } from "react";

// to use helper functions we have to import them
import { getFunName } from "../helpers";

// if we are not gonna use the <div> is better to
// use React.Fragment (it doesn't affect anything)

// value on input has always to direct to state
// if we want only some default value, we have to put
// defaultValue

// when the component mounts, will activate the function
// because we are using ()

// REACT RULE: DON'T TOUCH THE DOM, only if you use refs

// ref --> allows us to reference to some DOM element

// because StorePicker is a custom component every custom method we create
// is not binded at first so we can't refer to this inside, so we can use this:
// constructor() {
//   super();
//   this.goToStore = this.goToStore.bind(this);
// }
// the problem is that the constructor will grow a lot!
// if we create a property with arrow function, it will have access to
// the parent scope (this) --> we bind this

class StorePicker extends Component {
  // creating a ref
  myInput = React.createRef();

  goToStore = (e) => {
    // 1. Stop the form from submitting
    e.preventDefault();

    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever
    // because this is a child component of Route we get all of the
    // methods from props, like push
    // we change push state to change the url
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/*Don't put commnents the first thing!! */}
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          // ref="myInput"
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;

// Example of creating an element using createElement
// First, we put the element we want to create, the second are the atributes
// like class, and third the value
// return React.createElement("p", { className: "hey" }, "Heyyyy");
