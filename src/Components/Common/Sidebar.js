import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    list: {
        margin: 0,
        padding: 0
    },
    listItem: {
        listStyle: "none"
    }
});


export default function Sidebar() {
    const styles = useStyles();

    return <div>
        <ul className={styles["list"]}>
            <li className={styles["listItem"]}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles["listItem"]}>
                <Link to="/projects">Projects</Link>
            </li>
            <li className={styles["listItem"]}>
                <Link to="/members">Members</Link>
            </li>
        </ul>
    </div>;
}