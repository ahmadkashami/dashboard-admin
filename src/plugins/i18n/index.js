import { ARABIC_LANGUAGE } from './locales/ar'
import { ENGLISH_LANGUAGE } from './locales/en'
import { createI18n } from "vue-i18n"


export const i18n = createI18n({
  locale: 'ar', // set locale
  fallbackLocale: 'ar',
  messages: {
    ar: ARABIC_LANGUAGE,
    en: ENGLISH_LANGUAGE,
  }, // set locale messages
})
