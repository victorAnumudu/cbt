import {useState} from 'react'
import { Button, FloatLabelInput } from '../../components/shared'
import { Link } from 'react-router-dom'

type FormType = {
    email:string,
    password:string
}

type HandleChange = {
    name:string,
    value:string
  }

export default function Login() {
    let [formDetails, setFormDetails] = useState<FormType>({
        email: '',
        password: ''
    })

    const handleFormChange = ({target:{name, value}}:{target:HandleChange}):any => {
        setFormDetails(prev => ({...prev, [name]:value}))
    }

  return (
    <div className={`w-full h-screen overflow-y-auto bg-[url('../../../src/assets/images/sign-in.png')] bg-top bg-cover`}>
        <div className='containerMode h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center h-full'>
                <div className='bg-white col-start-1 md:col-start-2 w-full rounded-2xl shadow-lg'>
                    <div className='w-full p-10 sm:p-20 md:p-10 lg:p-20 flex flex-col justify-between items-center h-full'>
                        <div className='mb-4'>
                            <h1 className='text-2xl text-center font-bold leading-3 tracking-wide text-black dark:text-black'>Welcome!</h1>
                            <p className='text-xl mt-4 text-center font-medium text-black dark:text-black'>Please login to dashboard</p>
                        </div>

                        <div className='w-full'>
                            {/* INPUTS */}
                            <div className='w-full'>
                                <div className='relative my-2 py-2'>
                                    <FloatLabelInput 
                                        id='email'
                                        name='email'
                                        type='email'
                                        placeHolder='Email'
                                        labelName='Email'
                                        value={formDetails.email}
                                        inputClass=''
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className='relative my-2 py-2'>
                                    <FloatLabelInput 
                                        id='password'
                                        name='password'
                                        type='password'
                                        placeHolder='Password'
                                        labelName='Password'
                                        value={formDetails.password}
                                        inputClass=''
                                        onChange={handleFormChange}
                                    />
                                </div>
                            </div>

                            <div className='mt-10 w-full sm:flex justify-between items-center gap-2'>
                                <Button 
                                    text='Login' 
                                    className='rounded-md w-full sm:w-2/5' 
                                />
                                <Link to='#' className='text-black text-sm'>Forget your password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* FOOTER SECTION */}
        {/* <div className='page-footer w-full fixed bottom-0'>
            <Footer />
        </div> */}
    </div>
  )
}
