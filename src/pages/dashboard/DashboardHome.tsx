import {Chart as ChartJS, defaults, registerables} from 'chart.js/auto'

import { Line, Bar } from 'react-chartjs-2';

import "chart.js/auto";

ChartJS.register(...registerables);

defaults.maintainAspectRatio = false
defaults.responsive = true

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
// defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black'

export default function DashboardHome() {
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
  return (
    <div className='w-full'>
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
      <p>Hello</p>
    </div>
  )
}
