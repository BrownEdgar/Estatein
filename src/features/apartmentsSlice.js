import { createSlice } from '@reduxjs/toolkit';

const initialState = [
   {
      id: 1,
      name: "Seaside Serenity Villa",
      image: "/images/properties_section/villa01.jpg",
      desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      details: {
         countOfBedrooms: 4,
         countOfBathrooms: 3,
         isVilla: true,
      },
      price: "$550,000"
   },
   {
      id: 2,
      name: "Metropolitan Haven",
      image: "/images/properties_section/villa02.jpg",
      desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
      details: {
         countOfBedrooms: 2,
         countOfBathrooms: 2,
         isVilla: true,
      },
      price: "$730,000"
   },
   {
      id: 3,
      name: "Rustic Retreat Cottage",
      image: "/images/properties_section/villa03.jpg",
      desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      details: {
         countOfBedrooms: 3,
         countOfBathrooms: 3,
         isVilla: true,
      },
      price: "$840,000"
   },
   {
      id: 4,
      name: "Seaside Serenity Villa",
      image: "/images/properties_section/villa02.jpg",
      desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      details: {
         countOfBedrooms: 4,
         countOfBathrooms: 3,
         isVilla: true,
      },
      price: "$550,000"
   },
   {
      id: 5,
      name: "Metropolitan Haven",
      image: "/images/properties_section/villa01.jpg",
      desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
      details: {
         countOfBedrooms: 2,
         countOfBathrooms: 2,
         isVilla: true,
      },
      price: "$730,000"
   },
   {
      id: 6,
      name: "Rustic Retreat Cottage",
      image: "/images/properties_section/villa03.jpg",
      desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      details: {
         countOfBedrooms: 3,
         countOfBathrooms: 3,
         isVilla: true,
      },
      price: "$840,000"
   },
   {
      id: 7,
      name: "Seaside Serenity Villa",
      image: "/images/properties_section/villa03.jpg",
      desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      details: {
         countOfBedrooms: 4,
         countOfBathrooms: 3,
         isVilla: true,
      },
      price: "$550,000"
   },
   {
      id: 8,
      name: "Metropolitan Haven",
      image: "/images/properties_section/villa01.jpg",
      desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
      details: {
         countOfBedrooms: 2,
         countOfBathrooms: 2,
         isVilla: true,
      },
      price: "$730,000"
   },
   {
      id: 9,
      name: "Rustic Retreat Cottage",
      image: "/images/properties_section/villa02.jpg",
      desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      details: {
         countOfBedrooms: 3,
         countOfBathrooms: 3,
         isVilla: true,
      },
      price: "$840,000"
   },
]

const apartmentsSlice = createSlice({
   name: "apartments",
   initialState,
   // reducers: {},
   selectors: {
      getApartments: (state) => state, 
   }
})

export default apartmentsSlice.reducer;
export const { getApartments } = apartmentsSlice.selectors; 