import React from "react";

// function has no this, so in order to pass props
// we have to put it as an argument

// because it has an arrow function we don't need to write
// the return. This is an implicit return

// we can deconstruct the things inside props as
// ({tagline})
const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
