
import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";


const useStyles = createUseStyles({
    topbar: {
        borderBottom: "1px solid #eee",
        display: "flex"
    },
    brand: {
        padding: 20
    },
    lng: {
        display: "flex",
        alignItems: "center"
    }
});


export default function Container() {
    const styles = useStyles();
    const { t, i18n } = useTranslation();

    return <div className={styles["topbar"]}>
        <div className={styles["brand"]}>
            {t('topbar.appName')}
        </div>
        <div className={styles["lng"]}>
            <select
                value={i18n.language}
                onChange={e => i18n.changeLanguage(e.target.value)}
            >
                <option value="en-US">en-US</option>
                <option value="zh-TW">繁體中文</option>
            </select>
        </div>
  </div>;
}