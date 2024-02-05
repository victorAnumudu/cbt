import { useState } from 'react'

import CustomButton from '../CustomButton'

export default function Calculator() {
    const [arithmetic, setArithmetic] = useState('0')
    const [result, setResult] = useState('')

    const handleArithmetic = (value:string):void => {
        let notNum = ['CE', 'Ans', 'Del', '+', '/', '*', '-']
        if(!notNum.includes(value)){
            setArithmetic(prev => prev == '0' && value == '0' ? '0' : `${prev != '0' ? prev : ''}${value}`)
        }else{
            if(value == 'CE'){  // clears the screen
                setArithmetic('0')
                setResult('')
            }else if(value == 'Del'){ // removes the last added value
                let oldValue = arithmetic.split('')
                oldValue.splice(oldValue.length-1)
                let newValue = oldValue.join('')
                setArithmetic(newValue.length == 0 ? '0' : newValue)
            }else if(value == 'Ans'){ // Solves and return result
                let valueToSolve = arithmetic.split('')
                let containsOperand = ['+', '/', '*', '-'].includes(valueToSolve[arithmetic.length-1]) // checks if the last entry is an operand
                containsOperand && valueToSolve.splice(valueToSolve.length-1) // removes an operand if its the last entry

                let newResult = eval(valueToSolve.join(''))
                setResult(newResult)
            }else{
                let valueToSolve = arithmetic.split('')
                let containsOperand = ['+', '/', '*', '-'].includes(valueToSolve[arithmetic.length-1]) // checks if the last entry is an operand
                containsOperand && valueToSolve.splice(valueToSolve.length-1) // removes an operand if its the last entry
                console.log(valueToSolve)
                setArithmetic(`${valueToSolve.join('')}${value}`)
            }
        }
    }
  return (
    <div className='w-full h-full'>
        <div className='result-screen p-3 w-full h-20 text-black bg-white shadow-lg rounded-lg flex flex-col justify-center gap-2'>
            <span>{result && `Ans: ${result}`}</span>
            <span className='text-right'>{arithmetic}</span>
        </div>
        <div className='numeric-btn mt-5'>
            <div className='grid grid-cols-4 gap-2'>
                {calBtn.map((item, index)=>{
                    return (
                        <CustomButton 
                            key={index}
                            className={`w-full h-10 flex justify-center items-center rounded-lg text-black bg-white ${(item.name == 'CE' || item.name == 'Ans') && 'col-span-2'} `} 
                            value= {item.value}
                            name={item.name}
                            onClick={()=>{handleArithmetic(item.value)}}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

const calBtn = [
    {name: '9', value: '9'},
    {name: '8', value: '8'},
    {name: '7', value: '7'},
    {name: '+', value: '+'},
    {name: '6', value: '6'},
    {name: '5', value: '5'},
    {name: '4', value: '4'},
    {name: '-', value: '-'},
    {name: '3', value: '3'},
    {name: '2', value: '2'},
    {name: '1', value: '1'},
    {name: '/', value: '/'},
    {name: '.', value: '.'},
    {name: '0', value: '0'},
    {name: 'Del', value: 'Del'},
    {name: '*', value: '*'},
    {name: 'CE', value: 'CE'},
    {name: 'Ans', value: 'Ans'},
]
