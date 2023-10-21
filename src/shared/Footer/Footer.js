// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className="bg-gray-900  text-white px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:w-screen-xl md:px-24 lg:px-8">
//       <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
//         <div className="sm:col-span-2">
//           <Link
//             to="/"
//             aria-label="Go home"
//             title="Company"
//             className="inline-flex items-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30"
//               height="30"
//               fill="white"
//               className="bi bi-shop"
//               viewBox="0 0 16 16"
//             >
//               {" "}
//               <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />{" "}
//             </svg>
//             <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
//               Mall Of Recondition Laptops
//             </span>
//           </Link>
//           <div className="mt-6 lg:max-w-sm">
//             <p className="text-sm text-white">
//               Mall of Reconditions Goods stands out in this roundup because it’s
//               the resale platform with the most prominent physical presence.
//             </p>
//             <p className="mt-4 text-sm text-white">
//               With well-known hubs in New York and Chicago and all around the
//               world, it distinguishes itself by crossing the boundary that most
//               resale platforms won’t risk.
//             </p>
//           </div>
//         </div>
//         <div className="space-y-2 text-sm">
//           <p className="text-base font-bold tracking-wide text-gray-900">
//             Contacts
//           </p>
//           <div className="flex">
//             <p className="mr-1 text-white">Phone:</p>
//             <Link
//               to="tel:850-123-5021"
//               aria-label="Our phone"
//               title="Our phone"
//               className="transition-colors duration-300 text-purple-400 hover:text-purple-800"
//             >
//               850-123-5021
//             </Link>
//           </div>
//           <div className="flex">
//             <p className="mr-1 text-white">Email:</p>
//             <Link
//               to="mailto:info@lorem.mail"
//               aria-label="Our email"
//               title="Our email"
//               className="transition-colors duration-300 text-purple-400 hover:text-purple-800"
//             >
//               mrl@gmail.com
//             </Link>
//           </div>
//           <div className="flex">
//             <p className="mr-1 text-white">Address:</p>
//             <Link
//               to="https://www.google.com/maps"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Our address"
//               title="Our address"
//               className="transition-colors duration-300 text-purple-400 hover:text-purple-800"
//             >
//               312 Lovely Street, NY
//             </Link>
//           </div>
//         </div>
//         <div>
//           <span className="text-base font-bold tracking-wide text-gray-900">
//             Social
//           </span>
//           <div className="flex items-center mt-1 space-x-3">
//             <Link
//               to="/"
//               className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
//             >
//               <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                 <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//               </svg>
//             </Link>
//             <Link
//               to="/"
//               className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
//             >
//               <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
//                 <circle cx="15" cy="15" r="4" />
//                 <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
//               </svg>
//             </Link>
//             <Link
//               to="/"
//               className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
//             >
//               <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                 <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//               </svg>
//             </Link>
//           </div>
//           <p className="mt-4 text-sm text-gray-500">
//             Centered around rare kicks, MR Laptops Goods has been the default
//             location for celebs to cop their laptops since it was founded in
//             2023.
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
//         <p className="text-sm text-gray-200">
//           © Copyright 2023-24 MOR Laptops Ltd. All rights reserved.
//         </p>
//         <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
//           <li>
//             <Link
//               to="/"
//               className="text-sm text-gray-200 transition-colors duration-300 hover:text-purple-400"
//             >
//               F.A.Q
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/"
//               className="text-sm text-gray-200 transition-colors duration-300 hover:text-purple-400"
//             >
//               Privacy Policy
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/"
//               className="text-sm text-gray-200 transition-colors duration-300 hover:text-purple-400"
//             >
//               Terms &amp; Conditions
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Footer
