import { useState } from "react";
import { Button, FloatLabelInput } from "../../shared";

import User from '../../../assets/avatar/avatar1.jpg'

export default function UserProfile() {
    const [selectImage, setSelectedImage] = useState<Blob | MediaSource | null>(null)

    const [details, setDetails] = useState({
        name: 'Dummy Dummy',
        email: 'dummy@gmail.com'
    })

    const handleDetailsChange = (e:MouseEvent) => {
        let {name, value} = e?.target as HTMLInputElement
        setDetails(prev => ({...prev, [name]:value}))
    }

    const handleImageSelect = (e:any) => {
        let {files} = e?.target as HTMLInputElement
        if(files){
            setSelectedImage(files[0])
        }
    }
  return (
    <>
        <div className="p-8 w-full lg:flex lg:flex-row-reverse gap-8">

            {/* PROFILE IMAGE */}
            <div className="p-4 w-full sm:max-w-[300px] mx-auto flex flex-col items-center bg-slate-50/80">
              <img src={selectImage ? URL.createObjectURL(selectImage) : User} className="w-[200px] h-[200px] rounded-full shadow-lg dark:shadow-md dark:shadow-dark-light flex justify-center items-center" />
              <input type="file" id='image' className="hidden" onChange={handleImageSelect} />
              <div className="p-4 w-full flex justify-center gap-2 items-center">
                <label htmlFor="image" className="custom-btn border text-center dark:border-dark-light border-primary cursor-pointer">Select</label>
                {<button className="custom-btn border text-center dark:border-dark-light border-primary">Upload</button>}
              </div>
            </div>

            {/* PROFILE DETAILS */}
            <div className="w-full">
              <div className="relative my-2 py-2">
                <FloatLabelInput 
                  id="email"
                  name="email"
                  type="email"
                  placeHolder="Email"
                  labelName="Email"
                  value={'dummy@gmail.com'}
                  inputClass=""
                  disable={true}
                  onChange={()=>{}}
                />
              </div>
              <div className="w-full lg:grid grid-cols-2 gap-8">
                <div className="relative my-6 py-2">
                    <FloatLabelInput 
                    id="name"
                    name="name"
                    type="text"
                    placeHolder="Name"
                    labelName="Name"
                    value={details.name}
                    inputClass=""
                    onChange={handleDetailsChange}
                    />
                </div>
                <div className="relative my-6 py-2">
                    <FloatLabelInput 
                    id="email"
                    name="email"
                    type="email"
                    placeHolder="Email"
                    labelName="Email"
                    value={details.email}
                    inputClass=""
                    onChange={handleDetailsChange}
                    />
                </div>
              </div>
              <div className="w-full lg:grid grid-cols-2 gap-8">
                <div className="relative my-6 py-2">
                    <FloatLabelInput 
                    id="name"
                    name="name"
                    type="text"
                    placeHolder="Name"
                    labelName="Name"
                    value={details.name}
                    inputClass=""
                    onChange={handleDetailsChange}
                    />
                </div>
                <div className="relative my-6 py-2">
                    <FloatLabelInput 
                    id="email"
                    name="email"
                    type="email"
                    placeHolder="Email"
                    labelName="Email"
                    value={details.email}
                    inputClass=""
                    onChange={handleDetailsChange}
                    />
                </div>
              </div>
              <div className="w-full lg:grid grid-cols-2 gap-8">
                <div className="relative my-6 py-2">
                    <FloatLabelInput 
                    id="name"
                    name="name"
                    type="text"
                    placeHolder="Name"
                    labelName="Name"
                    value={details.name}
                    inputClass=""
                    onChange={handleDetailsChange}
                    />
                </div>
              </div>
              <div className="w-full lg:grid grid-cols-2 gap-8">
                <div className="relative my-6 py-2">
                    <FloatLabelInput 
                    id="name"
                    name="name"
                    type="text"
                    placeHolder="Name"
                    labelName="Name"
                    value={details.name}
                    inputClass=""
                    onChange={handleDetailsChange}
                    />
                </div>
              </div>
            </div>
        </div>
        <div className="w-full flex justify-center border-t-2 p-4">
            <div className="w-96 rounded-lg overflow-hidden">
                <Button
                    text='Update' 
                />
            </div>
        </div>
    </>
  )
}
