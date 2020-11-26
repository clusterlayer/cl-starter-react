import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Topbar from "./Topbar";
import Wrapper from "./Wrapper";


const useStyles = createUseStyles({
    app: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    }
});


export default function App() {
    const styles = useStyles();
    
    return <Router>
        <Route path="/:section?" render={props => <div className={styles["app"]}>
            <Topbar {...props}/>
            <Wrapper {...props}/>
        </div>}/>
    </Router>;
}