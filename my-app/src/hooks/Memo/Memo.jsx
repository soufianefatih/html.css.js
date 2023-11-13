import { useMemo, useState } from "react"

export default function Memo() {
    const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)
    const changeOne = ()=> {setCounterOne(prev=>prev+1)}
    const changeTwo = ()=> {setCounterTwo(prev=>prev-1)}
   
  const isEven =  useMemo(()=>{
     let i =0
     while (i< 2000000) i++
        return counterOne % 2 === 0
    },[counterOne])
   
    // const isEven =  ()=> {
    //     return counterOne % 2 === 0
    // }

  return (
    <div>
    <button onClick={changeOne}>{counterOne }</button> 
    {isEven ? 'Even' : 'Odd'}
    <button onClick={changeTwo}>{counterTwo}</button> 

    </div>
  )
}
