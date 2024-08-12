import React, { useState } from 'react';
import soundLogo from "../../assets/sound_max_fill.svg";
import copyLogo from "../../assets/Copy.svg";
import translatorLogo from "../../assets/Sort_alfa.svg";
import exchangeIcon from "../../assets/Horizontal_top_left_main.svg";

const Translator = () => {
    let [activeButton, setActiveButton] = useState(null);
    let [translationTextCount, setTranslationTextCount] = useState(0);

    let handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    let handleTranslationText = (e) => {
        let translationText = e.target.value;
        setTranslationTextCount(translationText.length);
        console.log(translationTextCount);
    }



    return (
        <div className='w-[90%] mx-auto py-16 flex justify-between gap-6 items-center'>
            <div className='h-[367px] bg-[#212936cc] p-8 rounded-3xl w-[50%] gap-6 firstDiv'>
                <div className='flex gap-4 items-start justify-start'>
                    <button onClick={() => handleButtonClick("Detect Language")} className='text-[16px] font-semibold cursor-pointer py-2 rounded-xl text-[#4D5562]'>
                        Detect Language
                    </button>
                    <button onClick={() => handleButtonClick("English")} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeButton === 'English' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                        }`}>
                        English
                    </button>
                    <button onClick={() => handleButtonClick("French")} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeButton === 'French' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                        }`}>
                        French
                    </button>
                    <button onClick={() => handleButtonClick("Spanish")} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeButton === 'Spanish' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                        }`}>
                        Spanish
                    </button>
                </div>

                <hr className="w-[100%] border border-[#4D5562] mt-4 mb-2 opacity-75" />

                <div className='relative'>
                    <textarea onChange={handleTranslationText} className="bg-transparent resize-none outline-none text-white w-[100%]" name="translationText" id="translationText" cols={30} rows={6} maxLength={500}></textarea>

                    <p className='text-[#4D5562] text-[14px] absolute right-0 bottom-0'>{translationTextCount}/500</p>
                </div>

                <div className='flex justify-between items-center mt-8'>
                    <div className='flex gap-2'>
                        <img className='border-2 border-[#4D5562] rounded-xl p-2 cursor-pointer' src={soundLogo} alt="" />
                        <img className='border-2 border-[#4D5562] rounded-xl p-2 cursor-pointer' src={copyLogo} alt="" />
                    </div>

                    <buttons className='text-white px-4 py-3 rounded-xl border-2 bg-[#3662E3] border-[#7CA9F3] text-[16px] font-semibold flex gap-2 justify-between items-center hover:opacity-80 cursor-pointer'>
                        <img src={translatorLogo} alt="" />
                        Translate
                    </buttons>
                </div>
            </div>




            <div className='h-[367px] bg-[#121826cc] p-8 rounded-3xl w-[50%] gap-6 secondDiv'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-start justify-start'>
                        <button onClick={() => handleButtonClick("English")} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeButton === 'English' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                            }`}>
                            English
                        </button>
                        <button onClick={() => handleButtonClick("French")} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeButton === 'French' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                            }`}>
                            French
                        </button>
                        <button onClick={() => handleButtonClick("Spanish")} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeButton === 'Spanish' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'
                            }`}>
                            Spanish
                        </button>
                    </div>

                    <img className='border-2 border-[#4D5562] rounded-xl p-2 cursor-pointer' src={exchangeIcon} alt="" />
                </div>

                <hr className="w-[100%] border border-[#4D5562] mt-4 mb-2 opacity-75" />

                <div className=''>
                    <textarea onChange={handleTranslationText} className="bg-transparent resize-none outline-none text-white w-[100%]" name="translationText" id="translationText" cols={30} rows={6} maxLength={500}></textarea>
                </div>

                <div className='flex mt-8'>
                    <div className='flex gap-2'>
                        <img className='border-2 border-[#4D5562] rounded-xl p-2 cursor-pointer' src={soundLogo} alt="" />
                        <img className='border-2 border-[#4D5562] rounded-xl p-2 cursor-pointer' src={copyLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Translator;