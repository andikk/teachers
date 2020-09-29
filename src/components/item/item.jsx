import React from "react";
import {Link} from "react-router-dom";

const Item = ({id, name}) => {
  return (
    <li>
      <Link to={`/teacher/${id}`}>{name}</Link>
    </li>
  )
};

export default Item