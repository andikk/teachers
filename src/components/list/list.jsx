import React from "react";
import Item from "../item/item";

// const list = [
//   {
//     id: 1,
//     name: "Имя1"
//   },
//   {
//     id: 2,
//     name: "Имя2"
//   },
// ];

const List = (props) => {
  const {list} = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-unstyled">
            {
              list.map(item => <Item key={item.id} id={item.id} name={item.name}/>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
};

export default List