import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./Sidebar";
import Container from "./Container";

export default function App() {
    return <Router>
        <div
            style={{
                display: "flex"
            }}
        >
            <Sidebar/>
            <Container/>
        </div>
    </Router>;
}