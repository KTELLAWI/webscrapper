// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import en from './public/locales/en.json'
// import fr from './public/locales/fr.json'

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: en },
//       fr: { translation: fr },
//     },
//     fallbackLng: 'en',
//     debug: false,
//     interpolation: {
//       escapeValue: false,
//     },
//   })

// export default i18n

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import en from './public/locales/en.json'
// import fr from './public/locales/fr.json'
 // import commonEn from './locales/en/common.json';
 // import commonFr from './locales/fr/common.json';


// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         en: en,
//       },
//       fr: {
//         fr: fr,
//       },
    
//     },
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './public/locales/en/common.json';
import commonFr from './public/locales/fr/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            common: commonEn,
          },
          fr: {
            common: commonFr,
          },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
