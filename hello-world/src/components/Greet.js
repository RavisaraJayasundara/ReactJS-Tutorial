import React from "react";

export default function Greet(props) {
  const {name,heroName}=props
  return (
    <div>
      <h1>
        Hello {name} {heroName}..!!!
      </h1>

    </div>
  );
}
