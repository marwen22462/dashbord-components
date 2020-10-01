import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SchoolResult from "./components/SchoolResult";
import ApprovalResult from "./components/ApprovalResult";

import "./App.css";

const tableData = [
  {
      no:"1",
      name:"Akhil",
      approval:"Approval"
  },
  {
      no:"2",
      name:"Akhil",
      approval:"Approval"
  },
  {
      no:"3",
      name:"Akhil",
      approval:"Approval"
  },
  {
      no:"4",
      name:"Akhil",
      approval:"Approval"
  },
];
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/schoolResult"> <SchoolResult /></Route>
          <Route path="/approvalResult"> <ApprovalResult tableData={tableData} /></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
