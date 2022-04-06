import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './store'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as ruMessages } from './locales/ru/messages'
import { messages as enMessages } from './locales/en/messages'
import { en, ru } from 'make-plural/plurals'

i18n.load({
  en: enMessages,
  ru: ruMessages,
})

i18n.loadLocaleData({
  en: { plurals: en },
  ru: { plurals: ru },
})

i18n.activate('ru')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
