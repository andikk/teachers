import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Teacher from "./pages/teacher/teacher";
import Main from "./components/main/main";

const App = () => {
  return (
    <>
      <h3>Преподаватели</h3>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/teacher/:id" component={Teacher}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
