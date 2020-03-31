import enLang from './entries/en-US';
import esLang from './entries/es_ES';

import {addLocaleData} from 'react-intl';

const AppLocale = {
  es: esLang,
  en: enLang,
};
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.en.data);


export default AppLocale;
