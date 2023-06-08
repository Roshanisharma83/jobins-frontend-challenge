import { useState } from "react"
import { DashboardService } from "../../../services/listService"
import { List } from "../../../types/listType"


const Table:React.FC = () => {

    const [lists, setLists] = useState<List[]>([])
    const getInvoices = async () => {
        try {
          const response_data: {
            data: List[]
           
          } = await DashboardService.getDashList()
    
          setLists(response_data.data)
          
        } catch (exception) {}
      }


    
    
return(
    <table className="mx-4 bg-white rounded-xl">
        <thead className="p-4">
            
            <tr className="border-b border-b-2">
                <td className="w-20 p-4 text-gray-400">ID</td>
                <td className="w-40 p-4 text-gray-400"> CUSTOMER</td>
                <td className="w-40 p-4 text-gray-400">DATE</td>
                <td className="w-40 p-4 text-gray-400">TOTAL</td>
                <td className="w-40 p-4 text-gray-400">METHOD</td>
                <td className="w-40 p-4 text-gray-400">STATUS</td>
                <td className="w-40 p-4 text-gray-400">ACTION</td>
            </tr>
        </thead>       
        <tbody className="text-sm text-gray-500 ">
        
                <tr className="border-b border-b-2 border-gray-200" key='1'>
                    <td className="p-4 text-gray-800 ">ttt</td>
                    <td className="p-4 text-gray-800">eee</td>
                    <td className="p-4 text-gray-800 "> kkk</td>
                    <td className="p-4 text-gray-800">ee</td>
                    <td className="p-4 text-gray-800">fs</td>
                    <td className="p-4 text-gray-800">jjj</td>
                    <td className="p-4 text-gray-800">jjj</td>
                </tr> 
                <tr className="border-b border-b-2 border-gray-200" key='1'>
                    <td className="p-4">ttt</td>
                    <td className="p-4">eee</td>
                    <td className="p-4 "> kkk</td>
                    <td className="p-4 ">ee</td>
                    <td className="p-4 ">fs</td>
                    <td className="p-4 ">jjj</td>
                    <td className="p-4 ">jjj</td>
                </tr> 
                <tr className="border-b border-b-2 border-gray-200" key='1'>
                    <td className="p-4 ">ttt</td>
                    <td className="p-4">eee</td>
                    <td className="p-4 "> kkk</td>
                    <td className=" p-4 ">ee</td>
                    <td className=" p-4 ">fs</td>
                    <td className=" p-4 ">jjj</td>
                    <td className=" p-4 ">jjj</td>
                </tr> 
                <tr className="border-b border-b-2 border-gray-200" key='1'>
                    <td className="p-4 ">ttt</td>
                    <td className="p-4">eee</td>
                    <td className="p-4 "> kkk</td>
                    <td className=" p-4 ">ee</td>
                    <td className=" p-4 ">fs</td>
                    <td className=" p-4 ">jjj</td>
                    <td className=" p-4 ">jjj</td>
                </tr>  
                
           
            
        </tbody>
    </table>
)
}
export default Table