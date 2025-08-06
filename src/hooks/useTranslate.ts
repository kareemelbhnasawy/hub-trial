import { useTranslation } from 'react-i18next';
import i18n, { resources } from '../localization';
import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { I18nManager } from 'react-native';
import { getString, setString } from '../utilities/storage';
import RNRestart from 'react-native-restart';

export function useTranslate() {
  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);

  useEffect(() => {
    const lang = getString(STORAGE_KEYS.LANGUAGE);
    if (lang) {
      i18n.changeLanguage(lang);
      I18nManager.forceRTL(lang === 'ar');
      setLocale(lang);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setString(STORAGE_KEYS.LANGUAGE, lang);
    I18nManager.forceRTL(lang === 'ar');
    i18n.changeLanguage(lang);
    RNRestart.Restart();
  };

  const translate = (string: string, options?: any) => {
    const spaceSplitStr = string.split(' ');
    let res: string[] = [];
    spaceSplitStr.forEach(str => {
      if (!str.includes('.')) {
        res.push(str);
      } else {
        const [namespace, ...rest] = str.split('.');
        const key = rest.join('.');
        if (!Object.keys(resources.en).includes(namespace)) {
          res.push(str);
        } else {
          let translated = t(key, { ns: namespace, ...options });
          res.push(translated.toString());
        }
      }
    });
    return res.join(' ');
  };
  return { translate, isRTL: locale === 'ar', changeLanguage, locale };
}
