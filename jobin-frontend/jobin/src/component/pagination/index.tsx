
import React from 'react';


const Pagination =  ( )=> {
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <nav className="flex justify-center my-4">
//       <ul className="flex space-x-2">
//         <li>
//           <button
//             disabled={currentPage === 1}
//             onClick={() => onPageChange(currentPage - 1)}
//             className="px-3 py-1 bg-gray-200 rounded-md"
//           >
//             Previous
//           </button>
//         </li>
//         {pages.map((page) => (
//           <li key={page}>
//             <button
//               onClick={() => onPageChange(page)}
//               className={`px-3 py-1 rounded-md ${
//                 page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {page}
//             </button>
//           </li>
//         ))}
//         <li>
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => onPageChange(currentPage + 1)}
//             className="px-3 py-1 bg-gray-200 rounded-md"
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
};

export default Pagination;
