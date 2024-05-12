import { createSlice } from "@reduxjs/toolkit";


const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: [],
  reducers:{},
  selectors: {
		getReviews: (state) => state,
  }
})
export default reviewsSlice.reducer;
export const {getReviews} = reviewsSlice.selectors