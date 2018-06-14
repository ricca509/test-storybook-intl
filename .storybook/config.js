import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import { withInfo } from '@storybook/addon-info';
import addons from '@storybook/addons';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

addLocaleData(enLocaleData);

const enMessages = require('../locales/en-GB/messages.json');
const messages = {
  'en-GB': enMessages
};

setIntlConfig({
  locales: ['en-GB'],
  defaultLocale: 'en-GB',
  getMessages(locale) { return messages[locale] }
});

addDecorator(withInfo);
addDecorator(withIntl);

configure(() => require('../component/index.stories.js'), module);
