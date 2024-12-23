// project imports
import { useTranslation } from 'react-i18next';
import 'style.css';

// ==============================|| APP ||============================== //

const App = () => {
    const { t } = useTranslation();
    return <div>{t('welcome')}</div>;
};

export default App;
