import React from 'react';

const Translator = () => {
    return (
        <div className='w-[90%] mx-auto py-20 flex justify-between items-center'>
            <div className='h-[367px] bg-[#212936cc] p-8 rounded-2xl w-[50%] gap-6'>
                <div className='flex gap-4'>
                    <button className='text-[16px] text-[#4D5562] font-semibold cursor-pointer'>
                        Detect Language
                    </button>
                    <button className='text-[16px] text-[#4D5562] font-semibold cursor-pointer'>
                        English
                    </button>
                    <button className='text-[16px] text-[#4D5562] font-semibold cursor-pointer'>
                        French
                    </button>
                    <button className='text-[16px] text-[#4D5562] font-semibold cursor-pointer'>
                        Spanish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Translator;