import { createSlice } from '@reduxjs/toolkit';

const clientSection = createSlice({
  name: "client-slice",
  initialState: [
      {
        id: 1,
        heading: "View All Testimonials",
        comment: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        image: "images/persons/person1.png",
        nickName: "Wade Warren",
        address: "USA, California"
      },
      {
        id: 2,
        heading: "View All Testimonials",
        comment: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        image: "images/persons/person2.png",
        nickName: "Wade Warren",
        address: "USA, California"
      },
      {
        id: 3,
        heading: "View All Testimonials",
        comment: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        image: "images/persons/person3.png",
        nickName: "Wade Warren",
        address: "USA, California"
      },
      {
        id: 4,
        heading: "View All Testimonials",
        comment: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        image: "images/persons/person4.jpeg",
        nickName: "Wade Warren",
        address: "USA, California"
      },
      {
        id: 5,
        heading: "View All Testimonials",
        comment: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        image: "images/persons/person5.jpeg",
        nickName: "Wade Warren",
        address: "USA, California"
      },
      {
        id: 6,
        heading: "View All Testimonials",
        comment: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        image: "images/persons/person6.jpeg",
        nickName: "Wade Warren",
        address: "USA, California"
      },
    ]
  ,
  reducers: {
    
  }

})

export default clientSection.reducer