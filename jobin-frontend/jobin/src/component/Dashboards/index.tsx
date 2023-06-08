import { AddCircleOutline, CalendarTodayOutlined, ClearAllOutlined, DashboardSharp, Drafts, ExploreOutlined, FileCopyOutlined, GridViewOutlined, ImportContactsOutlined, KeyboardAltOutlined, KeyboardArrowDown, KeyboardArrowUp, LocalDiningOutlined, MenuOutlined, MovingOutlined, OfflinePinOutlined, PermIdentityOutlined, ShoppingCartOutlined, StarBorder, SubtitlesOutlined, SummarizeOutlined, TrendingDownOutlined } from "@mui/icons-material"
import Image from "next/image"
import { Fragment, useEffect, useState } from "react"
import { List } from "../../../types/listType"
import Table from "../Datatable"
import Pagination from "../pagination"

const Dashboard: React.FC = () => {
    const [open, setOpen] = useState(false)
    
    return(
        <div className="w-full h-full bg-gray-100 pb-4">
            <div className="flex">
                {/* left nav bar */}
                <div className="w-1/5 hidden md:block bg-white items-center shadow-md py-9 ">
                    <div className="flex pl-12">
                        <Image
                            className="mr-4"
                            src='/images/logo.svg'
                            width={50}
                            height={40}
                            alt={'logo'}
                        />
                        <span className="text-gray-600 text-3xl">JoBins</span>
                        <Fragment>
                                        {open ? (
                                          <i className="pl-8"><MenuOutlined/></i>
                                        ) : (
                                          <i className="px-1 py-1 fas fa-angle-down"></i>
                                        )}
                                      </Fragment>
                        <div>
                            
                        </div>
                    </div>
                    <nav>
                        <ul className="text-gray-400 py-4 pl-12">
                            <li className="py-12 focus:bg-violet-700"> <Drafts className="mr-2.5"/>  Dashboard</li>
                            <li className="pb-12"><ShoppingCartOutlined className="mr-2.5"/>Order Managemen</li>
                            <li className="pb-12"><StarBorder className="mr-2.5"/>Brand PRODUCTS</li>
                            <p className="pb-8 text-xs">PRODUCTS</p>
                            <li className="pb-12"><AddCircleOutline className="mr-2.5"/>Add Products</li>
                            <li className="pb-12"><ShoppingCartOutlined className="mr-2.5"/>Product List</li>
                            
                            
                        </ul>
                    </nav>
                </div>
                <div className=" w-full md:w-4/5 h-full">
                    <h1 className="text-2xl pl-6 py-9 font-semibold">Dashboard</h1>
                    
                    <div className="block md:flex px-4  ">
                        {/* card 1 */}
                        <div className=" w-full md:w-2/6 p-4 bg-white  ml-4 p-1 rounded-xl">
                            <div className="flex">
                                <div className="m-auto">
                                    <Image
                                        className="mr-4 m-4"
                                        src='/images/image.png'
                                        width={80}
                                        height={80}
                                        alt={'img'}
                                    />
                                </div>
                                <div className="border-l-2 p-4 items-center justify-items-center">
                                    <div className="pl-4 ">
                                        <div>
                                            <p className="text-lg font-sans">Total Sales & Costs</p>
                                            <span className="text-sm font-sans">Last 7 days</span>
                                        </div>
                                        <div className="pt-4">
                                            <p className="text-3xl py-4 font-sans">$300K</p>
                                            <p className="text-green-400 text-sm font-sans">$80k<span className="text-gray-400 text-sm font-sans pl-2">vs last 7 days</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         {/* card 2 */}
                        <div className="w-full md:w-60 my-4 md:my-0  bg-white ml-4 rounded-xl">
                            <div className="flex">
                                <div>
                                <div>
                                    <Image
                                        className="mr-4 m-4"
                                        src='/images/card.png'
                                        width={60}
                                        height={60}
                                        alt={'img'}
                                    />
                                </div>
                                </div>
                                <div className="p-4 rounded-md pl-4">
                                    <p className="text-lg font-sans font-sans">Total Profit</p>
                                    <span className="text-gray-600 text-sm font-sans font-sans">Last 7 days</span>
                                </div>
                            </div>
                            <div className="pl-4 pt-2">
                                <p className="text-3xl py-4">$30K</p>
                                <p className="text-green-400 text-sm">$80k<span className="text-gray-400 text-sm pl-2">vs last 7 days</span></p>
                            </div>
                        </div>
                         {/* card 3 */}
                        <div className="w-full my-4 md:my-0 md:w-2/5 bg-white ml-4 rounded-xl">
                            <div className="grid grid-cols-3 gap-4 mt-5">
                                <div className="grid-rows-3">
                                    <div className="flex w-40 py-2">
                                        <div>
                                            <Image
                                                className=""
                                                src='/images/usa.jpeg'
                                                width={60}
                                                height={60}
                                                alt={'img'}
                                            /> 
                                        </div>
                                        <div >
                                            <h1>30K</h1>
                                            <p className="text-xs font-normal">United States</p>
                                        </div>  
                                    </div>
                                    <div className="flex w-40 py-2">
                                        <div>
                                            <Image
                                                className=""
                                                src='/images/usa.jpeg'
                                                width={60}
                                                height={60}
                                                alt={'img'}
                                            /> 
                                        </div>
                                        <div>
                                            <h1>30K</h1>
                                            <p className="text-xs font-normal">Brazil</p>
                                        </div>  
                                    </div>
                                    <div className="flex w-40 py-2">
                                        <div>
                                        <Image
                                            className=""
                                            src='/images/usa.jpeg'
                                            width={60}
                                            height={60}
                                            alt={'img'}
                                        /> 
                                        </div>
                                        <div>
                                            <h1>26K</h1>
                                            <p className="text-xs font-normal"> Australias</p>
                                        </div>  
                                    </div>
                                </div>
                                <div className="grid-rows-3">
                                    <div className="w-full bg-gray-200 h-2 rounded-full mt-6">
                                        <p className="bg-blue-600 h-2 rounded-full w-3/4"></p>
                                    </div>
                                    <div className="w-full bg-gray-200 h-2 rounded-full mt-14">
                                        <p className=" bg-blue-600 h-2 rounded-full w-2/12"></p>
                                    </div>
                                    <div className="w-full bg-gray-200 h-2 rounded-full mt-14">
                                        <p className="bg-blue-600 h-2 rounded-full w-1/12"></p>
                                    </div>
                                </div>
                                
                                <div className="grid-rows-3">
                                    <div className="mt-2">
                                        <p className="text-green-400 text-center"><KeyboardArrowUp />25.8%</p> 
                                    </div>
                                    
                                    <div className="mt-12">
                                        <p className=" text-red-400 text-center"><KeyboardArrowDown />16.2%</p>
                                    </div>

                                    <div className="mt-10">
                                        <p className=" text-red-400 text-center"><KeyboardArrowDown />11.9%</p>
                                    </div>    
                                </div>   
                                </div>
                            </div>
                        </div>
                    <div className=" grid-row-3 bg-white rounded-xl my-4 mx-4 grid md:grid-cols-3 gap-4 mt-10" >
                        <div className="flex">
                            <div className="p-4">
                                <div className="w-14 h-14 bg-blue-600 rounded-full relative">
                                    <div className="w-11 h-11 bg-blue-200 rounded-full absolute top-1.5 left-2">

                                    </div>
                                </div>
                            </div>
                            <div className="p-4 items-center justify-items-center">
                                <p className="text-lg">Robert Fox</p>
                                <span className="text-gray-400 text-sm">rrr@gmail.com</span>
                            </div>
                        </div>

                        <div className=" border-l-2">
                            
                            <div className="p-2 items-center">
                                <p className="text-xs text-gray-400 font-medium">PERSONAL INFORMATION</p>
                                
                                <div className="flex gap-8">
                                    <div>
                                        <p className="text-xs font-light py-2 text-gray-700 font-normal	">Contract Number</p>
                                        <p className="text-xs py-2 font-normal">Date of Birth</p>
                                        <p className="text-xs py-2 font-normal">Member since</p>
                                    </div>
                                    <div>
                                    <p className="text-xs py-2 font-semibold">(201) 555-0124</p>
                                    <p className="text-xs py-2 font-semibold">10 jan, 2014</p>
                                    <p className="text-xs py-2 font-semibold">3 March, 2014</p>
                                    </div>
                                    
                                </div>

                                
                            </div>
                        </div>

                        <div className="border-l-2">
                            <div className="p-4 rounded-md items-center m-auto justify-items-center">
                                <p className="text-xs text-gray-400 font-medium">Shipping Address</p>
                                <span className="text-gray-800 font-normal text-xs">3517 W. Gray St. Utica, Pennsylvania 57867</span>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 ">
                                <span>
                                    <h1 className="font-semibold pl-6 text-2xl ">150</h1>
                                    <p className="text-gray-400 pl-6 text-xs">Total Order</p>
                                </span>
                                <span>
                                    <h1 className="font-semibold pl-6 text-2xl">140</h1>
                                    <p className="text-gray-400 text-center text-xs">Completed</p>
                                </span>
                                <span>
                                    <h1 className="font-semibold pl-6 text-2xl">10</h1>
                                    <p className="text-gray-400 text-center text-xs">Canceled</p>
                                </span>
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex my-4">
                        <button className="bg-white px-4 py-2 ml-4 text-blue-400 hover:underline">All Orders</button>
                        <button className="bg-white px-4 py-2 ml-4">Completed</button>
                        <button className="bg-white px-4 py-2 ml-4">Canceleds</button>
                    </div>
                    <div className="w-full bg-white">
                        <div>
                        <Table/>
                        </div>
                        <div className="py-8 ml-4">
                        <Pagination/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Dashboard