import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
 
const filterdata = [
  {
    filtertype:"Roles",
    array:["FullStack","Frontend","Backend"]
  },
  {
    filtertype:"Locations",
    array:["Pune","Mumbai","Chennai","Banglore"]
  },
  {
    filtertype:"Salary",
    array:["30-40K", "40k-1lakh","1lakh-5lakh"]
  },

]

const Filtercard = () => {
  const [selectedvalue, setselectedvalue] = useState()
  const dispatch = useDispatch(setSearchedQuery(selectedvalue))
  const changeHandler = (value)=>{
    setselectedvalue(value)
  }
  useEffect(()=>{
    dispatch(setSearchedQuery(selectedvalue)) 
  },[selectedvalue])
  return (
    <div>
      <h1 className='text-xl font-semibold'>Filter Jobs</h1>
      <hr className='mt-3 '/>
      <RadioGroup value={selectedvalue} onValueChange = {changeHandler}>
        {
          filterdata.map((data,index)=>(
            <div>
              <h1 className='font-bold'>{data.filtertype}</h1>
              {
                data.array.map((item,idx)=>{
                  const itemid = `r${index}-${idx}`
                  return(
                    <div className='flex items-center space-x-2 my-3'>
                      <RadioGroupItem value={item} id={itemid}/>
                      <label>{item}</label>
                    </div>
                  )
                }

                )
              }
            </div>
          )

          )
        }
      </RadioGroup>
    </div>
  )
}

export default Filtercard