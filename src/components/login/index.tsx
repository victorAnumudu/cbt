import { useState } from "react";
import CustomTextInput from "../CustomTextInput";

type Details = {
  email:string,
  password:string
}

type HandleChange = {
  name:string,
  value:string
}

export default function Login() {
  let [loginDetails, setLoginDetails] = useState<Details>({
    email:'',
    password: ''
  })

  const handleDetailChange = ({target:{name, value}}:{target:HandleChange}):void => {
    setLoginDetails(prev => ({...prev, [name]:value}))
  }

  return (
    <div className="w-full h-screen overflow-y-scroll bg-[url('../../../src/assets/images/login_bg.png')] bg-cover bg-center lg:bg-[length:100%_100%] bg-no-repeat">
      <div className="h-full w-full grid lg:grid-cols-2">
        {/* left Side */}
        <div className="h-full">
          <p>Hi</p>
        </div>

        {/* Right Side */}
        <div className="h-full flex flex-col items-center justify-center">
          <div className="p-5 lg:p-10 w-11/12 lg:w-4/6 bg-blue-500 dark:bg-blue-500 rounded-lg flex flex-col items-center justify-center gap-4">
            <h1 className="text-white dark:text-white text-3xl font-semibold">LOGIN</h1>
            <div className="my-2 w-full">
              <CustomTextInput
                name='email'
                type='text'
                onChange={handleDetailChange}
                value={loginDetails.email}
                inputClass='bg-white dark:bg-white text-slate-500 dark:text-slate-500 focus:outline-blue-500 dark:focus:outline-blue-500'
                placeholder='Enter Your Email'
              />
            </div>
            <div className="my-2 w-full">
              <CustomTextInput
                name='password'
                type='text'
                onChange={handleDetailChange}
                value={loginDetails.password}
                inputClass='bg-white dark:bg-white text-slate-500 dark:text-slate-500 focus:outline-blue-500 dark:focus:outline-blue-500'
                placeholder='Enter Your Password'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
