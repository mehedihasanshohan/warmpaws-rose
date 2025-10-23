// import React from 'react'
// import pets1 from '/pets1.avif'
// import c1 from '/c1.jfif'
// import c2 from '/c2.jfif'
// import c3 from '/c3.jfif'

// const Slider = () => {
//   return (
//     <div className='animate__animated animate__rollIn'>
//       <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img
//       src={c1}
//       className="w-full h-128 object-cover" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide4" className="btn btn-circle">❮</a>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide2" className="carousel-item relative w-full">
//     <img
//       src={c2}
//       className="w-full h-128 object-cover" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide3" className="carousel-item relative w-full">
//     <img
//       src={c3}
//       className="w-full h-128 object-cover" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide2" className="btn btn-circle">❮</a>
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide4" className="carousel-item relative w-full">
//     <img
//       src={pets1}
//       className="w-full h-128 object-cover" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide3" className="btn btn-circle">❮</a>
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Slider


import React from 'react'
import pets1 from '/pets1.avif'
import w1 from '/w1.jfif'
import w2 from '/w2.jfif'
import w3 from '/w3.jfif'

const Slider = () => {
  return (
    <div className='animate__animated animate__rollIn'>
      <div className="carousel w-full">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={w1} className="w-full h-128 object-cover" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-start items-center text-white bg-black/40 pt-28">
            <h2 className="text-4xl font-bold mb-3">Cozy Care for Your Pet</h2>
            <p className="text-lg max-w-lg text-center pt-4">
              We make sure your furry friends stay warm and happy all winter long.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={w2} className="w-full h-128 object-cover" />

          <div className="absolute inset-0 flex flex-col justify-start items-center text-white bg-black/40 pt-28">
            <h2 className="text-4xl font-bold mb-3 pt-4">Professional Grooming</h2>
            <p className="text-lg max-w-lg text-center">
              Keep your pets looking their best with our grooming experts.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={w3} className="w-full h-128 object-cover" />

          <div className="absolute inset-0 flex flex-col justify-start items-center text-white bg-black/40 pt-28">
            <h2 className="text-4xl font-bold mb-3 pt-4">Winter Boarding</h2>
            <p className="text-lg max-w-lg text-center">
              Safe, warm, and playful spaces for your pets during the cold season.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={pets1} className="w-full h-128 object-cover" />

          <div className="absolute inset-0 flex flex-col justify-start items-center text-white bg-black/40 pt-28">
            <h2 className="text-4xl font-bold mb-3 pt-4">Trusted Pet Sitting</h2>
            <p className="text-lg max-w-lg text-center">
              Leave your pets with professionals who truly care.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Slider
