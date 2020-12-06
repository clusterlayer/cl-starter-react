
import { Switch, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Home from "../Home/Index";
import Project from "../Project/Index";
import Member from "../Member/Index";


const useStyles = createUseStyles({
    container: {
        flex: 1,
        padding: 20
    }
});


export default function Container() {
    const styles = useStyles();

    return <div className={[styles["container"]]}>
        <Switch>
            <Route path="/members" component={Member}/>
            <Route path="/projects" component={Project}/>
            <Route path="/" component={Home}/>
        </Switch>
  </div>;
}