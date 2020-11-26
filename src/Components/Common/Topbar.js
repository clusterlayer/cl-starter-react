
import { Switch, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    topbar: {
        borderBottom: "1px solid #eee",
        display: "flex"
    },
    brand: {
        padding: 20
    }
});


export default function Container() {
    const styles = useStyles();

    return <div className={styles["topbar"]}>
        <div className={styles["brand"]}>
            React App
        </div>
  </div>;
}