import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";


const useStyles = createUseStyles({
    heading: {
        margin: 0
    }
});


export default function Member() {
    const styles = useStyles();
    const { t } = useTranslation('member');
    
    return <h2 className={styles["heading"]}>{t('member.title')}</h2>;
}