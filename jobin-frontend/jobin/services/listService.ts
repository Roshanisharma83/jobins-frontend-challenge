import { List } from "../types/listType"
//import { Lists } from '@/__mock__/dashboardlist.data'



export const DashboardService = {
    getDashList: (
      
    ): Promise<{
      data: List[]
      
    }> => {
      try {
        return Promise.resolve(Lists)
        //   return requests.get(``,query_params);
      } catch (error) {
        return Promise.reject(error)
      }
    },
  }

// function Lists(Lists: any): Promise<{ data: List[] }> {
//     throw new Error("Function not implemented.")
// }
