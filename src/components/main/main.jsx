import React from "react";
import {connect} from "react-redux";
import {getListSelector} from "../../slectors";

import List from "../list/list";

const Main = (props) => {

  const {list} = props;

  return (
    <div>
      <h4>Список</h4>
      <List list={list}/>

    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    list: getListSelector(state),
  };
};

export {Main}
export default connect(mapStateToProps, null)(Main);