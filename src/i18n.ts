import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { z } from 'zod';
import LanguageDetector from 'i18next-browser-languagedetector';
import { zodI18nMap } from 'zod-i18n-map';
import enTranslation from 'zod-i18n-map/locales/en/zod.json';
import nbTranslation from 'zod-i18n-map/locales/nb/zod.json';

type SupportedLngs = 'en' | 'nb';
const supportedLngsArray = ['en', 'nb'];
const defaultNS = 'translation';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'nb'],
        fallbackLng: 'en',
        debug: process.env.NODE_ENV !== 'production',

        detection: {
            order: ['cookie'],
            caches: ['cookie'],
            // One year
            cookieMinutes: 525600
        },
        ns: ['translation', 'zod', 'zod_custom'],
        defaultNS,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });

z.setErrorMap(zodI18nMap);

i18n.addResourceBundle('en', 'zod', enTranslation, true);
i18n.addResourceBundle('nb', 'zod', nbTranslation, true);

export { i18n, z, supportedLngsArray, defaultNS };
export type { SupportedLngs };
