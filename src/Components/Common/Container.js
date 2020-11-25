
import { Switch, Route } from "react-router-dom";

import Home from "../Home/Index";
import Project from "../Project/Index";
import Member from "../Member/Index";


export default function Container() {
    return <div id="container">
        <Switch>
            <Route path="/members" component={Member}/>
            <Route path="/projects" component={Project}/>
            <Route path="/" component={Home}/>
        </Switch>
  </div>;
}