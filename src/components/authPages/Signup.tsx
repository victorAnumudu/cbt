import { useState } from "react";
import { Button, FloatLabelInput } from "../shared";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from '../../../src/assets/images/Logo-header.svg'
import ReloadSpinner from "../loaders/ReloadSpinner";

type FormType = {
  email: string,
  password: string,
  name: string,
};

type HandleChange = {
  name: string;
  value: string;
};

export default function Signup() {

  const navigate = useNavigate()

  let [requestStatus, setRequestStatus] = useState({
    loading: false,
    data: [],
    status: false,
    message: ''
  })

  let [formDetails, setFormDetails] = useState<FormType>({
    email: "",
    password: "",
    name: ""
  });

  const handleFormChange = ({
    target: { name, value },
  }: {
    target: HandleChange;
  }): any => {
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setRequestStatus({
        loading: true,
        data: [],
        status: false,
        message: ''
      })
    axios.post('https://convene-backend.onrender.com/users', formDetails).then((res)=>{
      if(!res.data.status){
        setRequestStatus({ loading: false, data: [], status: false, message: res.data.message})
        return
      }
      setRequestStatus({ loading: false, data: res.data.data, status: true, message: res.data.message})
      setTimeout(()=>{
        navigate('/login', {replace: true})
      }, 2000)
    }).catch((err:any)=>{
      console.log('ERROR', err.response)
      setRequestStatus({ loading: false, data: [], status: false, message: err.response.data.message})
      setTimeout(()=>{
        setRequestStatus({ loading: false, data: [], status: false, message: ''})
      }, 5000)
    })
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl text-center font-bold leading-3 tracking-wide text-primary dark:text-black">
          Signup
        </h1>
        <img src={Logo} className="w-full max-w-xs h-auto" alt='Logo' />
        {/* <p className="text-xl mt-4 text-center font-medium text-black dark:text-black">
          Please enter your details to register
        </p> */}
      </div>

      <div className="w-full">
        {/* INPUTS */}
        <div className="w-full">
          <div className="relative my-2 py-2">
            <FloatLabelInput
              id="name"
              name="name"
              type="name"
              placeHolder="Fullname"
              labelName="Fullname"
              value={formDetails.name}
              inputClass=""
              onChange={handleFormChange}
            />
          </div>
          <div className="relative my-2 py-2">
            <FloatLabelInput
              id="email"
              name="email"
              type="email"
              placeHolder="Email"
              labelName="Email"
              value={formDetails.email}
              inputClass=""
              onChange={handleFormChange}
            />
          </div>
          <div className="relative py-2">
            <FloatLabelInput
              id="password"
              name="password"
              type="password"
              placeHolder="Password"
              labelName="Password"
              value={formDetails.password}
              inputClass=""
              onChange={handleFormChange}
            />
          </div>
        </div>

        <div className="mt-10 w-full">
        <p className={`w-full text-center ${requestStatus.status ? 'text-emerald-600' : 'text-red-600'} ${requestStatus.message ? 'block' : 'hidden'}`}>{requestStatus.message}</p>
            {requestStatus.loading ?
                <ReloadSpinner size="10" fillColor='fill-primary' />
            :
                <Button onClick={handleSubmit} disable={requestStatus.loading} text="Register" className="rounded-full w-full" />
            }
        </div>
        <p className="mt-2 w-full text-black flex items-center justify-center gap-2">
            Already have account?
            <Link to="/login" className="text-primary text-sm">
                Login
            </Link>
        </p>
      </div>
    </>
  );
}
