import React, { useState } from 'react';

const Translator = () => {
    let [activeButton, setActiveButton] = useState(null);

    let handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    return (
        <div className='w-[90%] mx-auto py-20 flex justify-between items-center'>
            <div className='h-[367px] bg-[#212936cc] p-8 rounded-3xl w-[50%] gap-6'>
                <div className='flex gap-4 items-start justify-start'>
                    <button onClick={() => handleButtonClick("Detect Language")} className='text-[16px] font-semibold cursor-pointer py-2 rounded-xl text-[#4D5562]'>
                        Detect Language
                    </button>
                    <button onClick={() => handleButtonClick("English")}  className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${
                            activeButton === 'English' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                        }`}>
                        English
                    </button>
                    <button onClick={() => handleButtonClick("French")}  className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${
                            activeButton === 'French' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                        }`}>
                        French
                    </button>
                    <button onClick={() => handleButtonClick("Spanish")}  className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${
                            activeButton === 'Spanish' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                        }`}>
                        Spanish
                    </button>
                </div>

                <hr className="w-[100%] border border-[#4D5562] mt-4 mb-2 opacity-75" />

                <textarea className="bg-transparent resize-none outline-none text-white w-[100%]" name="translationText" id="translationText" cols={30} rows={8}></textarea>
            </div>
        </div>
    );
};

export default Translator;