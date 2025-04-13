import React from 'react'

const AuthFormContentWrapper = ({inputs, buttons}) => {
  return (
    <div className='flex flex-col items-start gap-[24px] w-full max-w-[518px]'>
        <div className='flex flex-col items-start gap-[24px] w-full max-w-[518px]'>
            <div className='flex flex-col items-end gap-[16px] w-full max-w-[518px]'>
                {inputs[0]}
                {inputs[1]}
                {inputs[2]}
                {inputs[3]}
                {inputs[4]}
                {inputs[5]}
                <a className='text-[#4A505C] text-center self-end cursor-pointer font-[DM_Sans] text-[0.875rem] sm:text-base font-medium leading-[140%] tracking-[0.2px] hover:underline '>Lupa Password?</a>
            </div>

            <div className='flex flex-col item-start gap-[16px] w-full max-w-[518px]'>
                {buttons[0]}
                {buttons[1]}
            </div>
        </div>
        <div className='relative flex justify-center items-center w-full h-[22px]'>
            <hr className='absolute w-full h-[2px] bg-[#F1F1F1] outline-none border-none'></hr>
            <div className='bg-[#FFF] relative flex p-[0px_8px] h-[22px] text-center'>
                <p className='text-[#4A505C] text-center font-[DM_Sans] text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.2px]'>Atau</p>
            </div>
        </div>
        {buttons[2]}


    </div>
  )
}

export default AuthFormContentWrapper
