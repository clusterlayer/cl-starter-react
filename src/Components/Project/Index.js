import {
    Switch,
    Route,
    useRouteMatch,
    Link,
} from "react-router-dom";

import List from "./List";
import Form from "./Form";


export default function Project() {
    let match = useRouteMatch();
    return <div
        style={{
            display: "flex"
        }}
    >
        <div>
            <ul>
                <li><Link to="/projects">List</Link></li>
                <li><Link to="/projects/create">Create</Link></li>
            </ul>
        </div>
        <div>
            <Switch>
                <Route path={`${match.path}/create`} component={Form}/>
                <Route path={match.path} component={List}/>
            </Switch>
        </div>
    </div>;
}