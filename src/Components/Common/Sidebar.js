import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    sidebar: {
        height: "100%",
        borderRight: "1px solid #eee"
    },
    list: {
        margin: 0,
        padding: 0
    },
    listItem: {
        listStyle: "none",
        "& > a": {
            display: "block",
            padding: "8px 15px",
            textDecoration: "none",
            color: "#565656"
        },
        "& > a:hover": {
            color: "#2056bd"
        }
    },
    active: {
        color: "#366ed8 !important"
    }
});


const listItems = [
    {
        link: "/",
        label: "Home"
    },
    {
        link: "/projects",
        label: "Projects"
    },
    {
        link: "/members",
        label: "Members"
    }
];


export default function Sidebar(props) {
    const styles = useStyles();
    const section = props.match.params.section || "";

    return <div className={styles["sidebar"]}>
        <ul className={styles["list"]}>
            {listItems.map((item, idx) => <li key={`item-${idx}`} className={styles["listItem"]}>
                <Link to={item.link} className={(`/${section}` === item.link ? styles["active"] : "")}>{item.label}</Link>
            </li>)}
        </ul>
    </div>;
}