import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";


const useStyles = createUseStyles({
    heading: {
        margin: 0
    }
});


export default function Home() {
    const styles = useStyles();
    const { t } = useTranslation('home');
    
    return <h2 className={styles["heading"]}>{t('home.title')}</h2>;
}