import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import { getString } from '../utilities/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { I18nManager } from 'react-native';

import enCommon from './common/en.json';
import arCommon from './common/ar.json';
import enAuth from './auth/en.json';
import arAuth from './auth/ar.json';
import enInputs from './inputs/en.json';
import arInputs from './inputs/ar.json';

export const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
    inputs: enInputs,
  },
  ar: {
    common: arCommon,
    auth: arAuth,
    inputs: arInputs,
  },
};

const fallback = { languageTag: 'en', isRTL: false };

const getDeviceLanguage = (): string => {
  let languageTag = getString(STORAGE_KEYS.LANGUAGE);
  if (!languageTag) {
    const locales = getLocales();
    languageTag = locales[0]?.languageTag || fallback.languageTag;
  }
  I18nManager.forceRTL(languageTag === 'ar');
  return languageTag;
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: getDeviceLanguage(),
  fallbackLng: fallback.languageTag,
  interpolation: { escapeValue: false },
});

export default i18n;
