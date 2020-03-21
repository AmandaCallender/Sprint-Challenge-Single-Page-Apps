import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="mainNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characterlist">Character List</Link>
          </li>
          <li>
            <Link to="/searchform">Search Form</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
