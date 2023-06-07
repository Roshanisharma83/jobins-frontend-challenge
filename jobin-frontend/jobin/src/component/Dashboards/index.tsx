import { CalendarTodayOutlined, ClearAllOutlined, DashboardSharp, FileCopyOutlined, GridViewOutlined, ImportContactsOutlined, LocalDiningOutlined, MenuOutlined, MovingOutlined, OfflinePinOutlined, PermIdentityOutlined, ShoppingCartOutlined, SubtitlesOutlined, SummarizeOutlined, TrendingDownOutlined } from "@mui/icons-material"
import Image from "next/image"
import { useEffect, useState } from "react"
import { List } from "../../../types/listType"
import Table from "../Datatable"

const Dashboard: React.FC = () => {
    
    return(
        <div className="container mx-auto bg-gray-50">
            <div className="flex">
                {/* left nav bar */}
                <div className="w-1/5 bg-white items-center shadow-md py-9 ">
                    <div className="flex pl-12">
                        <Image
                            className="mr-4"
                            src='/images/logo.svg'
                            width={50}
                            height={40}
                            alt={'logo'}
                        />
                        <span className="text-gray-600 text-3xl">JoBins</span>
                        <div>
                            <span className="pl-8"><MenuOutlined/></span>
                        </div>
                    </div>
                    <nav>
                        <ul className="text-gray-400 py-4 pl-12">
                            <li className="py-12 focus:bg-violet-700"> <GridViewOutlined className="mr-2.5"/>  Dashboard</li>
                            <li className="pb-12"><PermIdentityOutlined className="mr-2.5"/>Order Managemen</li>
                            <li className="pb-12"><ClearAllOutlined className="mr-2.5"/>Brand PRODUCTS</li>
                            <p>PRODUCTS</p>
                            <li className="pb-12"><LocalDiningOutlined className="mr-2.5"/>Add Products</li>
                            <li className="pb-12"><ShoppingCartOutlined className="mr-2.5"/>Product List</li>
                            
                            
                        </ul>
                    </nav>
                </div>
                <div className="w-4/5 h-full">
                    <h1 className="text-base pl-6 py-9 font-semibold">Dashboard</h1>
                    
                    <div className="flex">
                        {/* card 1 */}
                        <div className="w-80 p-4 bg-white shadow-md ml-4 p-1 rounded-xl">
                            <div className="flex">
                                <div>
                                    <Image
                                        className="mr-4 m-4"
                                        src='/images/image.png'
                                        width={80}
                                        height={80}
                                        alt={'img'}
                                    />
                                </div>
                                <div className="border-l-2 p-4 items-center m-auto justify-items-center">
                                    <p className="text-lg">Total Sales & Costs</p>
                                    <span className="text-sm">Last 7 days</span>
                                    <p className="text-3xl py-4">$300K</p>
                                    <p className="text-green-400 text-sm">$80k<span className="text-gray-400 text-sm">vs last 7 days</span></p>
                                </div>
                            </div>
                        </div>
                         {/* card 2 */}
                        <div className="w-64 py-8 bg-white shadow-md ml-4 p-1 rounded-xl">
                            <div className="flex">
                                <div>
                                <div>
                                    <Image
                                        className="mr-4 m-4"
                                        src='/images/card.png'
                                        width={80}
                                        height={80}
                                        alt={'img'}
                                    />
                                </div>
                                </div>
                                <div className="p-4 rounded-md w-40 items-center m-auto justify-items-center pl-4">
                                    <p className="text-lg">Total Profit</p>
                                    <span className="text-red-600 text-sm">Last 7 days</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-3xl py-4">$300K</p>
                                <p className="text-green-400 text-sm">$80k<span className="text-gray-400 text-sm">vs last 7 days</span></p>
                            </div>
                        </div>
                         {/* card 3 */}
                        <div className="w-96 py-8 bg-white shadow-md ml-4 p-1 rounded-xl">
                        <div className="grid grid-cols-4 gap-4 mt-10">
                                <span>
                                    <h1 className="font-semibold text-center">44</h1>
                                    <p className="text-gray-400 text-center">On </p>
                                </span>
                                <span>
                                    <h1 className="font-semibold text-center">30</h1>
                                    <p className="text-gray-400 text-center">Delivered</p>
                                </span>
                                <span>
                                    <h1 className="font-semibold text-center">10</h1>
                                    <p className="text-gray-400 text-center">Canceled</p>
                                </span>
                                <span>
                                    <h1 className="font-semibold text-center">10</h1>
                                    <p className="text-gray-400 text-center">Canceled</p>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="bg-white my-4 mx-4 grid grid-cols-3 gap-4 mt-10" >
                        <div className="flex">
                            <div>
                                <div>
                                    <Image
                                        className="mr-4 m-4"
                                        src='/images/image.png'
                                        width={50}
                                        height={50}
                                        alt={'img'}
                                    />
                                </div>
                            </div>
                            <div className="p-4 w-40 items-center m-auto justify-items-center">
                                <p className="text-lg">Total Profit</p>
                                <span className="text-red-600 text-sm">Last 7 days</span>
                            </div>
                        </div>

                        <div className="flex border-l-2">
                            <div>
                                <div>
                                    <Image
                                        className="mr-4 m-4"
                                        src='/images/image.png'
                                        width={50}
                                        height={50}
                                        alt={'img'}
                                    />
                                </div>
                            </div>
                            <div className="p-4 w-40 items-center m-auto justify-items-center">
                                <p className="text-lg">Total Profit</p>
                                <span className="text-red-600 text-sm">Last 7 days</span>
                            </div>
                        </div>

                        <div className="flex border-l-2">
                            <div>
                                <div>
                                    <Image
                                        className="mr-4 m-4"
                                        src='/images/image.png'
                                        width={50}
                                        height={50}
                                        alt={'img'}
                                    />
                                </div>
                            </div>
                            <div className="p-4 rounded-md w-40 items-center m-auto justify-items-center">
                                <p className="text-lg">Total Profit</p>
                                <span className="text-red-600 text-sm">Last 7 days</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <Table/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard