import { createSlice } from "@reduxjs/toolkit";


const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: [
    {
      id: 1,
      heading: 'How do I search for properties on Estatein?',
      paragraph: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
      button: 'Read More'
    },
    {
      id: 2,
      heading: 'What documents do I need to sell my property through Estatein?',
      paragraph: 'Find out about the necessary documentation for listing your property with us.',
      button: 'Read More'
    },
    {
      id: 3,
      heading: 'How can I contact an Estatein agent?',
      paragraph: 'Discover the different ways you can get in touch with our experienced agents.',
      button: 'Read More'
    },
    {
      id: 4,
      heading: 'How do I search for properties on Estatein?',
      paragraph: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
      button: 'Read More'
    },
    {
      id: 5,
      heading: 'What documents do I need to sell my property through Estatein?',
      paragraph: 'Find out about the necessary documentation for listing your property with us.',
      button: 'Read More'
    },
    {
      id: 6,
      heading: 'How can I contact an Estatein agent?',
      paragraph: 'Discover the different ways you can get in touch with our experienced agents.',
      button: 'Read More'
    }
  ],
  reducers:{},
  selectors: {
		getReviews: (state) => state,
  }
})
export default reviewsSlice.reducer;
export const {getReviews} = reviewsSlice.selectors