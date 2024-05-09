import { configureStore } from '@reduxjs/toolkit';
import clientSectionSlice from '@f/Client-Section/client-sectionSlice';

const store = configureStore({
  reducer: {
    clientSection: clientSectionSlice
  }
})

export default store