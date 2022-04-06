import { configureStore } from '@reduxjs/toolkit'
import filters from '../components/Filter/filtersSlice';
import tokens from '../components/Token/tokenSlice';
import language from '../components/Sidebar/languageSlice';

const store = configureStore({
    reducer: {filters, tokens, language},
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;