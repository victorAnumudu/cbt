import { useEffect, useState } from "react";
import { Button, FloatLabelInput } from "../shared";

import Logo from '../../../src/assets/images/Logo-header.svg'
import ReloadSpinner from "../loaders/ReloadSpinner";

type FormType = {
  otp: string,
};

type HandleChange = {
  name: string;
  value: string;
};

export default function VerifyEmail() {

  const [time, setTime] =  useState(Number(import.meta.env.VITE_RELOAD_TIMER))

  let [requestStatus, setRequestStatus] = useState({
    loading: false,
    data: [],
    status: false
  })

  let [formDetails, setFormDetails] = useState<FormType>({
    otp: "",
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


  let minutes:number | string = Math.floor(time/60) > 9 ?  Math.floor(time/60) : '0'+Math.floor(time/60)
  let seconds:number | string = time - (Math.floor(time/60) * 60) > 9 ?  time - (Math.floor(time/60) * 60) : '0'+(time - (Math.floor(time/60) * 60))

  useEffect(()=>{
    const myInterval = setInterval(()=>{
        if(time > 0){
            setTime(prev => prev - 1)
        }
    },1000)

    return ()=>{
        clearInterval(myInterval)
    }
  },[time])

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl text-center font-bold leading-3 tracking-wide text-primary dark:text-black">
          Verify Email
        </h1>
        <img src={Logo} className="w-full max-w-xs h-auto" alt='Logo' />
        <p className="text-base mt-4 text-center font-medium text-black dark:text-black">
          Please enter the OTP you received in your Email/Phone
        </p>
      </div>

      <div className="w-full">
        {/* INPUTS */}
        <div className="w-full">
          <div className="relative my-2 py-2">
            <FloatLabelInput
              id="otp"
              name="otp"
              type="otp"
              placeHolder="OTP"
              labelName="OTP"
              value={formDetails.otp}
              inputClass=""
              onChange={handleFormChange}
            />
          </div>
        </div>

        <div className="mt-10 w-full">
            {requestStatus.loading ?
                <ReloadSpinner size="10" fillColor='fill-primary' />
            :
                <Button onClick={handleSubmit} disable={requestStatus.loading} text="Proceed" className="rounded-full w-full" />
            }
        </div>
        <p className="mt-2 w-full text-black flex items-center justify-center gap-1">
            { time != 0 ?
            <p className={``}>{minutes} : {seconds}</p>
            :
            <Button onClick={handleSubmit} disable={requestStatus.loading} text="Resend OTP" className="rounded-full w-full" />
            }
        </p>
      </div>
    </>
  );
}
