import { createUseStyles } from "react-jss";
import { useTranslation } from "react-i18next";


const useStyles = createUseStyles({
    heading: {
        margin: 0
    }
});


export default function Project() {
    const styles = useStyles();
    const { t } = useTranslation('project');
    
    return <div>
        <h2 className={styles["heading"]}>{t('project.title')}</h2>
        <ul>
            <li>{t('project.items.item1')}</li>
        </ul>
    </div>;
}