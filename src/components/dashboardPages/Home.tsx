import {Chart as ChartJS, defaults, registerables} from 'chart.js/auto'

import { Line, Bar } from 'react-chartjs-2';

import "chart.js/auto";

import { useState } from 'react';
import { CustomBox, Button } from '../shared';
import { summary } from '../../data/data';
import ReloadSpinner from '../loaders/ReloadSpinner';

ChartJS.register(...registerables);

defaults.maintainAspectRatio = false
defaults.responsive = true

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
// defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black'

export default function Home() {
  const data1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Sells',
      data: [-65000, 50000, 150000, 80000, 40000, 55000, 30000, 25000, 56000, 55000, 11000, 75000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  };
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Sells',
        data: [-65000, 50000, 150000, 80000, 40000, 55000, 30000, 25000, 56000, 55000, 11000, 75000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'profit',
        data: [-6500, 5000, 10000, 6000, 2000, 5500, 1500, 2500, 5600, 2750, 550, 7500],
        fill: false,
        borderColor: 'green',
        tension: 0.1,
      }
    ],
  };

  const [openDashboard, setOpenDashboard] = useState<boolean|null>(true)
  const handleOpenDash = () => {
    setOpenDashboard(null)
    setTimeout(()=>{
      setOpenDashboard(true)
    }, 5000)
  }

  return (
    <div className='w-full h-full'>
      {!openDashboard ?
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <div className='p-8 bg-white w-2/3 md:w-full max-w-96 h-72 shadow-[0px_0px_10px_#5C2684] rounded-2xl flex flex-col justify-center items-center gap-8'>
            <p className='text-[#5C2684] text-lg md:text-xl lg:text-2xl'>Welcome Austin Catherine</p>
            {openDashboard == false ?
            <Button 
              text='Continue'
              onClick={handleOpenDash}
              className='rounded-lg text-2xl'
            />
            :
            <div className='w-full flex justify-center items-center'>
              <ReloadSpinner 
                timer={true}
                timerClass='text-[#5C2684]'
                size='6'
              />
            </div>
            }
          </div>
        </div>
      :
        <>
          <p className='w-full text-3xl text-primary-default font-medium tracking-wide'>Dashboard</p>
          <div className='my-6 w-full grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {summary.map(item => (
                <div key={item.name} className='w-full min-w-28 bg-white rounded-md shadow-md cursor-pointer hover:bg-white/50 transition-all duration-300'>
                    <CustomBox title={item.name} desc={`NGN ${item.amount}`} iconName={item.icon} />
                </div>
            ))}
          </div>
          <div className='w-full min-h-[500px] grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='w-full h-full flex justify-center md:justify-start items-center shadow-xl'>
              <Line 
                data={data}
                options={{
                  responsive:true,
                  maintainAspectRatio:false,
                  plugins:{
                    title: {
                      display: true,
                      text: 'Monthly Income Chart',
                      align:'center',
                      color:'red',
                      font:{
                        // size: '20px',
                      }
                    }
                  }
                }}
              />
            </div>
            <div className='w-full h-full flex justify-center md:justify-end items-center shadow-xl'>
              {/* <Doughnut data={data} /> */}
              <Bar 
                data={data1} 
                options={{
                  plugins:{
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Monthly Revenue Chart',
                    },
                  },
                  indexAxis: 'y'
                }}
              />
            </div>
          </div>
        </>
      }
    </div>
  )
}
