import { configureStore } from '@reduxjs/toolkit';
import reviewsSlice from '@f/reviewsSlice'

const store = configureStore({
  reducer: {
    "reviews" : reviewsSlice,
  }
})

export default store