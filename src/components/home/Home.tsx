import Sections from '../Sections'
import PageNav from '../navigation/PageNav'
import Footer from '../footer/Footer'

export default function Home() {
    return (
        <div className='w-full'>
            <PageNav />
            <div className="flex flex-col justify-center items-center h-[700px] bg-red-50">
                <span className='animate-ping'>Screen Sliders</span>
            </div>
            <Sections bg='bg-white'>
                <div>Section</div>
            </Sections>
            <Sections bg='bg-white'>
                <div>Section</div>
            </Sections>
            <Sections bg='bg-white'>
                <div>Section</div>
            </Sections>
            <Footer />
        </div>
      )
}