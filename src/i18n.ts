import { addLocaleData } from 'react-intl';
import * as enLocaleData from 'react-intl/locale-data/en';
import { DEFAULT_LOCALE } from './constants';
import * as request from 'superagent';

addLocaleData(enLocaleData);

export const appLocales = [
  'en',
];

function getTranslations(locale) {
  return request.get(`translations/${locale}.json`).then(({ body }) => body);
}

// function translationsFallback(locale) {
//   return require('./translations/en.json');
// }

export const formatTranslationMessages = (locale) => {
  return async () => {
    const defaultFormattedMessages = locale !== DEFAULT_LOCALE
      ? await formatTranslationMessages(DEFAULT_LOCALE)() : {};
    let messages;

    try {
      messages = await getTranslations(locale);
      if (!messages) {
        throw new Error();
      }
    } catch (error) {
      console.log('failed to load falling back to bundle');
      // messages = translationsFallback(locale);
    }

    return Object.keys(messages).reduce((formattedMessages, key) => {
      const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
      return Object.assign(formattedMessages, { [key]: formattedMessage });
    }, {});
  }
};

export const translationMessages = {
  en: formatTranslationMessages('en'),
};
