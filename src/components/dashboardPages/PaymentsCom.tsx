import PaginatedList from "../listLayout/PaginatedList"

import { list } from "../../data/data"

import Image1 from '../../assets/avatar/avatar1.jpg'
import Image2 from '../../assets/avatar/avatar2.png'
import PaymentEditModal from "../popout/PaymentEditModal"
import PaymentDeleteModal from "../popout/PaymentDeleteModal"
import PaymentViewModal from "../popout/PaymentViewModal"
import { useState } from "react"

type ModalProps = {
  view: boolean,
  edit: boolean,
  delete: boolean,
  state: any
}

export default function PaymentsCom() {

  let [paymentModal, setPaymentModal] = useState<ModalProps>({
    view: false,
    edit: false,
    delete: false,
    state: {}
  })

  const handlePaymentModal = () => {
    setPaymentModal({
      view: false,
      edit: false,
      delete: false,
      state: {}
    })
  }
  const openModal = (name:string, state:any) => {
    if(name){
      setPaymentModal({ view: false, edit: false, delete: false, state, [name]:true})
    }
  }

  return (
    <div className="w-full h-full">
      <PaginatedList
        data = {list}
        itemsPerPage={7}
        // filterItem={['name']}
        tableTitle='Payment History'
        titleClass='text-primary-default'
      >
        {
          ({data})=>(
            <div className="w-full p-4 rounded-lg shadow-lg bg-white overflow-x-auto min-h-[450px]">
              <table className="w-full text-left text-sm md:text-lg table-auto">
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
                          <button onClick={()=>openModal('edit', item)} name='edit' className="text-[10px] bg-primary-default text-white shadow-md rounded-lg px-2 py-.5">Edit</button>
                          <button onClick={()=>openModal('delete', item)} name='delete' className="text-[10px] bg-red-500 text-white shadow-md rounded-lg px-2 py-.5">Delete</button>
                          <button onClick={()=>openModal('view', item)} name='view' className="text-[10px] bg-sky-500 text-white shadow-md rounded-lg px-2 py-.5">View</button>
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

      {/* MODALS */}
      {paymentModal.edit && (
        <PaymentEditModal
          onClose={handlePaymentModal}
          handleFunction={handlePaymentModal}
          state={paymentModal.state}
        />
      )}
      {paymentModal.delete && (
        <PaymentDeleteModal
          onClose={handlePaymentModal}
          handleFunction={handlePaymentModal}
          state={paymentModal.state}
        />
      )}
      {paymentModal.view && (
        <PaymentViewModal
          onClose={handlePaymentModal}
          handleFunction={handlePaymentModal}
          state={paymentModal.state}
        />
      )}
    </div>
  )
}
