import { useState } from "react";
import { Button, FloatLabelInput } from "../shared";
import { Link } from "react-router-dom";
import ReloadSpinner from "../loaders/ReloadSpinner";

import Logo from '../../../src/assets/images/Logo-header.svg'

type FormType = {
  email: string;
  password: string;
};

type HandleChange = {
  name: string;
  value: string;
};

export default function Login() {
  
  let [requestStatus, setRequestStatus] = useState({
    loading: false,
    data: [],
    status: false
  })

  let [formDetails, setFormDetails] = useState<FormType>({
    email: "",
    password: "",
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
        status: false
      })
      setTimeout(()=>{
        setRequestStatus({
            loading: false,
            data: [],
            status: false
          })
      },2000)
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl text-center font-bold leading-3 tracking-wide text-primary-default dark:text-black">
          Welcome!
        </h1>
        <img src={Logo} className="w-full max-w-xs h-auto" alt='Logo' />
        {/* <p className="text-xl mt-4 text-center font-medium text-black dark:text-black">
          Please login to dashboard
        </p> */}
      </div>

      <div className="w-full">
        {/* INPUTS */}
        <div className="w-full">
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
        <Link to="/forget-pwd" className="w-full block text-right text-black text-sm">
          Forget your password?
        </Link>

        <div className="mt-10 w-full">
            {requestStatus.loading ?
                <ReloadSpinner size="10" fillColor='fill-primary-default' />
            :
                <Button onClick={handleSubmit} disable={requestStatus.loading} text="Login" className="rounded-full w-full" />
            }
        </div>
        <p className="mt-2 w-full text-black flex items-center justify-center gap-2">
            Don't have account?
            <Link to="/register" className="text-primary-default text-sm">
                Register
            </Link>
        </p>
      </div>
    </>
  );
}
