
import { ArrowBackIos, ArrowForward, ArrowForwardIos, ArrowOutwardOutlined } from '@mui/icons-material';
import React from 'react';


const Pagination =  ( ) => {
    return(
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                <li>
                <a href="#" className=" bg-white px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border rounded-l-lg"><ArrowBackIos/></a>
                </li>
                <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border">1</a>
                </li>
                <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border ">2</a>
                </li>
                <li>
                <a href="#" aria-current="page" className="px-3 py-2 text-gray-600 border bg-blue-50 ">3</a>
                </li>
                <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border  ">4</a>
                </li>
                <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">5</a>
                </li>
                <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border rounded-r-lg "><ArrowForwardIos/></a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
