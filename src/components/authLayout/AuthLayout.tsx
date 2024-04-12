import { Outlet } from "react-router-dom";


export default function AuthLayout() {
  return (
    <div className={`w-full h-screen overflow-y-auto bg-[url('./assets/images/auth/artisans.svg')] bg-top bg-cover`}>
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='relative containerMode h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center h-full'>
                <div className='col-start-1 w-full flex justify-center item-center'>
                    <div className='w-full max-w-lg bg-white/90 rounded-2xl shadow-lg p-10 sm:p-20 md:p-10 lg:p-20 flex flex-col justify-between items-center'>
                        <Outlet />
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
