import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
import ApprovalResult from "./components/ApprovalResult";
import SchoolResult from "./components/SchoolResult";
import EnterMarks from "./components/EnterMarks";
import ClassResult from "./components/ClassResult";
import ERessources from "./components/ERessources";

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
const SchoolResultTable= [
  {
    no:"1",
    name:"Akhil",
    writtenOutOf100:"30",
    writtenOutOf50:"30"
},
  {
    no:"2",
    name:"Akhil",
    writtenOutOf100:"30",
    writtenOutOf50:"30"
},
  {
    no:"3",
    name:"Akhil",
    writtenOutOf100:"30",
    writtenOutOf50:"30"
},
  {
    no:"4",
    name:"Akhil",
    writtenOutOf100:"30",
    writtenOutOf50:"30"
},
]
const ClassResultTable= [
  {
    no:"1",
    name:"Akhil",
    score:"5"
},
  {
    no:"2",
    name:"Akhil",
    score:"10"
},
  {
    no:"3",
    name:"Akhil",
    score:"20"
},
  {
    no:"4",
    name:"Akhil",
    score:"17"
},
]
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/Result"> <Result /></Route>
          <Route path="/approvalResult"> <ApprovalResult tableData={tableData} /></Route>
          <Route path="/schoolResult"> <SchoolResult SchoolResultTable={SchoolResultTable} /></Route>
          <Route path="/classResult"> <ClassResult ClassResultTable={ClassResultTable} /></Route>
          <Route path="/enterMarks"> <EnterMarks MarksTable={SchoolResultTable} /></Route>
          <Route path="/ressources"> <ERessources /></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
