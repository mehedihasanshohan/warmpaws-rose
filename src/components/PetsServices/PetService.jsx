// import React from 'react'
// import p1 from "/p1.jfif";
// import p2 from "/p2.jfif";
// import p3 from "/p3.jfif";
// import p4 from "/p4.jfif";
// import p5 from "/p5.jfif";
// import p6 from "/p6.jfif";
// import { FaStar } from 'react-icons/fa';

// const images = [p1, p2, p3, p4, p5, p6];

// const PetService = ({service, index}) => {
//   return (
//     <div>
//        <div
//               key={service.serviceId}
//               className="card bg-white p-4 shadow-lg rounded-2xl overflow-hidden transition-all duration-300"
//             >
//               {/* Use dynamic image by index */}
//               <img
//                 src={images[index % images.length]} // loops through 6 images
//                 alt={service.serviceName}
//                 className="h-48 w-full rounded-lg object-cover"
//               />

//               <div className="p-5 space-y-3">
//                 <h3 className="text-2xl font-semibold text-blue-600">
//                   {service.serviceName}
//                 </h3>

//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <div className="flex justify-center items-center gap-2">
//                     <FaStar className="text-yellow-400 h-4 w-4"></FaStar> <span className="font-medium text-lg">{service.rating}</span>
//                   </div>
//                   <p className="font-semibold text-lg text-blue-700">
//                     ${service.price}
//                   </p>
//                 </div>

//                 <button className="bg-blue-400 rounded-md p-2 font-medium w-full mt-2 cursor-pointer hover:bg-blue-600">
//                   View Details
//                 </button>
//               </div>
//             </div>
//     </div>
//   )
// }

// export default PetService