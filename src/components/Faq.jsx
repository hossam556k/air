import React from 'react'
import { Collapse } from 'react-collapse';
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";

 const Faq = ({ open , toggle, title,dec,bt } ) => {
    
  return (
    <div className='pt-[10px]'>
        <div className='bg-gray-900 py-[25px] px-[50px] flex justify-between items-center cursor-pointer shadow-xl' onClick={toggle}>
            <h3 className='text-[22px] font-semibold text-white'>{title}</h3>
            <div className='text-[30px]'>
                {open ?  <AiOutlineArrowDown className='text-white'/> : <AiOutlineArrowRight className='text-white'/> }
            </div>
        </div>
        <Collapse isOpened={open}>
            <div className='bg-gray-900 text-gray-300 px-[50px] pb-[20px] flex flex-col gap-10 justify-start items-start'>{dec}
            <h6>{bt}</h6>
            </div>

        </Collapse>
    </div>
  )
}

export default Faq