import React from "react";
import { createUseStyles } from "react-jss";

import Sidebar from "./Sidebar";
import Container from "./Container";


const useStyles = createUseStyles({
    wrapper: {
        flex: 1,
        display: "flex"
    }
});


export default function Wrapper(props) {
    const styles = useStyles();
    
    return <div className={styles["wrapper"]}>
        <Sidebar {...props}/>
        <Container {...props}/>
    </div>;
}