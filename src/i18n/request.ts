import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 console.log("locale",locale)
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});