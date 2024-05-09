import { configureStore } from '@reduxjs/toolkit';

import apartmentsSlice from '@f/apartmentsSlice';

const store = configureStore({
  reducer: {
    "apartments": apartmentsSlice,
  }
})

export default store