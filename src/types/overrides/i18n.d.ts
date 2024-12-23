import 'i18next';
import translationJson from '../../../public/locales/en/translation.json';
import zodCustomJson from '../../../public/locales/en/zod_custom.json';
import zodJson from 'zod-i18n-map/locales/en/zod.json';
import { defaultNS } from '../../i18n';

declare module 'i18next' {
    interface CustomTypeOptions {
        // Provides type autocompletion for t()
        resources: {
            translation: typeof translationJson;
            zod_custom: typeof zodCustomJson;
            zod: typeof zodJson;
        };
        defaultNS: typeof defaultNS;
        contextSeparator: '-';
    }
}
