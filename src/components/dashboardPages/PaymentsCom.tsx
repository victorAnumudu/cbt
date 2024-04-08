import PaginatedList from "../listLayout/PaginatedList"

import { list } from "../../data/data"

import Image1 from '../../assets/avatar/avatar1.jpg'
import Image2 from '../../assets/avatar/avatar2.png'

export default function PaymentsCom() {
  return (
    <div className="w-full">
      <PaginatedList
        data = {list}
        itemsPerPage={7}
        // filterItem={['name']}
        tableTitle='Payment History'
        titleClass='text-purple-600'
      >
        {
          ({data})=>(
            <div className="w-full p-4 rounded-lg shadow-lg bg-white overflow-x-auto">
              <table className="w-full text-left table-auto">
                <thead>
                  <tr>
                    <th className="px-1 py-4">Image</th>
                    <th className="px-1 py-4 hidden md:block">ID</th>
                    <th className="px-1 py-4">Name</th>
                    <th className="px-1 py-4">Last Login</th>
                    <th className="px-1 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item:{ id: number, name: string, last_login: string, image: string }, index:any) => (
                    <tr key={item.id} className="border-t cursor-pointer">
                      <td className="p-1">
                        <div className="w-10 h-10">
                          <img className="w-full h-full rounded-full" src={index%2==0 ? Image1 : Image2} />
                        </div>
                      </td>
                      <td className="p-1 hidden md:block">{Math.random().toString().slice(2, 14)}</td>
                      <td className="p-1">{item.name}</td>
                      <td className="p-1">{item.last_login}</td>
                      <td className="p-1">
                        <div className="flex items-center gap-2">
                          <button className="text-[8px] bg-purple-500 text-white shadow-md rounded-sm p-2">Edit</button>
                          <button className="text-[8px] bg-red-500 text-white shadow-md rounded-sm p-2">Delete</button>
                          <button className="text-[8px] bg-sky-500 text-white shadow-md rounded-sm p-2">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
      </PaginatedList>
    </div>
  )
}
