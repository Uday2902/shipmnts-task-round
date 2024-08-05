
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../state/dataSlice';

const store = configureStore({
    reducer: {
        data: dataSlice
    }
});

export default store;
