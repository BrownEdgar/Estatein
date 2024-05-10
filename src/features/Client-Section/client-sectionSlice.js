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
        heading: "Efficient and Reliable",
        comment: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        image: "images/persons/person2.png",
        nickName: "Emelie Thomson",
        address: "USA, Florida"
      },
      {
        id: 3,
        heading: "Estatein exceeded our expectations",
        comment: "Their attention to detail and commitment to customer satisfaction made the home-buying process smooth and stress-free. We couldn't be happier with our new home!",
        image: "images/persons/person3.png",
        nickName: "Emily Thompson",
        address: "Canada, Ontario"
      },
      {
        id: 4,
        heading: "We were blown away by the exceptional",
        comment: "rom start to finish, their team went above and beyond to ensure that we found the perfect home for our family. Their expertise and dedication truly set them apart. Thank you, Estatein!",
        image: "images/persons/person4.jpeg",
        nickName: "Michael Johnson",
        address: "Australia, New South Wales"
      },
      {
        id: 5,
        heading: "Trusted Advisors",
        comment: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
        image: "images/persons/person5.jpeg",
        nickName: "John Mans",
        address: "USA, Nevada"
      },
      {
        id: 6,
        heading: "Estatein was the best decision",
        comment: " Their knowledgeable and responsive team guided us every step of the way, making the process effortless. We are grateful for their professionalism and would highly recommend their services to anyone looking to buy or sell a home.",
        image: "images/persons/person6.jpeg",
        nickName: "David Smith",
        address: "United Kingdom, London"
      },
    ]
  ,
  reducers: {
    
  }

})

export default clientSection.reducer


// 1. "Estatein exceeded our expectations with their unparalleled service. Their attention to detail and commitment to customer satisfaction made the home-buying process smooth and stress-free. We couldn't be happier with our new home! - Emily and James Thompson, Canada, Ontario"

// 2. "We were blown away by the exceptional service provided by Estatein. From start to finish, their team went above and beyond to ensure that we found the perfect home for our family. Their expertise and dedication truly set them apart. Thank you, Estatein! - Sarah and Michael Johnson, Australia, New South Wales"

// 3. "Choosing Estatein was the best decision we made in our home search journey. Their knowledgeable and responsive team guided us every step of the way, making the process effortless. We are grateful for their professionalism and would highly recommend their services to anyone looking to buy or sell a home. - Anna and David Smith, United Kingdom, London"