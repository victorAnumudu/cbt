import DashboardLayout from "./DashboardLayout";
import { Outlet, Navigate } from "react-router-dom";
import ReloadSpinner from "../../loaders/ReloadSpinner";
import Logo from '../../../assets/images/Logo-header.svg'
import Cookies from 'js-cookie'

import { userContext } from "../../../context/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardAuth():any {

  // const navigate = useNavigate()

  let {userDetails, setUserDetails}:any = userContext()

 let [userExist, setUserExist] = useState(false)

 let [pageLoading, setPageLoading] = useState(true)

 const loadUser = () => {
  setPageLoading(true)
  axios.get('https://convene-backend.onrender.com/users/profile',{
    headers:{
      Authorization: `bearer ${Cookies.get('token')}`
    }
  }).then((res)=>{
    if(!res.data.status){
      setPageLoading(false)
      setUserExist(false)
      return
    }
    setUserDetails(res.data.data[0])
    setPageLoading(false)
    setUserExist(true)
  }).catch((err:any)=>{
    console.log('ERROR', err.response)
    setPageLoading(false)
  })
 }

  useEffect(()=>{
    if(Object.keys(userDetails).length && userDetails?.email){
      setPageLoading(false)
      setUserExist(true)
    }else{
      loadUser()
    }
  },[])
  
  return(
    <>
      {pageLoading ?
      <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200">
        <div className="w-full flex flex-col items-center justify-center">
          <img src={Logo} className="max-w-sm" />
          <ReloadSpinner size="10" fillColor='fill-primary' />
        </div>
      </div>
      :!pageLoading && !userExist ?
      <Navigate to='/login' />
      :
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
      }
    </>
  )

}