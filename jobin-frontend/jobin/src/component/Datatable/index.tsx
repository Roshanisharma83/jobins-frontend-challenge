import { useState } from "react"
import { DashboardService } from "../../../services/listService"
import { List } from "../../../types/listType"


const Table:React.FC = () => {
    
    const [lists, setList] = useState<List[]>()
    const getInvoices = async () => {
        try {
          const response_data: {
            data: List[]
           
          } = await DashboardService.getDashList()
    
          setList(response_data.data)
          
        } catch (exception) {}
      }


    
    
return(
    <table className="w-full mx-4">
        <thead>
            <tr>
                <td>Id</td>
                <td>Customer</td>
                <td>Date</td>
                <td>Total</td>
                <td>Method</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>       
        <tbody className="w-full text-sm text-gray-500 ">
        
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