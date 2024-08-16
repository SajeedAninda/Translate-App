import React, { useState, useEffect } from 'react';
import soundLogo from "../../assets/sound_max_fill.svg";
import copyLogo from "../../assets/Copy.svg";
import translatorLogo from "../../assets/Sort_alfa.svg";
import exchangeIcon from "../../assets/Horizontal_top_left_main.svg";

const Translator = () => {
    let [activeButton, setActiveButton] = useState(null);
    let [translationTextCount, setTranslationTextCount] = useState(0);
    let [translationText, setTranslationText] = useState('Hello, how are you?');
    let [translatedText, setTranslatedText] = useState("");
    

    let handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    let handleTranslationText = (e) => {
        let translationText = e.target.value;
        setTranslationText(translationText);
        setTranslationTextCount(translationText.length);
    }

    useEffect(() => {
        const translateText = async () => {
            try {
                const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(translationText)}&langpair=en|es`);
                const data = await response.json();
                setTranslatedText(data.responseData.translatedText);
            } catch (error) {
                console.error("Error translating text:", error);
            }
        };

        translateText();
    }, [translationText]);

    return (
        <div className='w-[90%] mx-auto py-16 flex flex-col lg:flex-row justify-between gap-6 items-center'>
            <div className='h-fit md:h-[367px] bg-[#212936cc] p-8 rounded-3xl w-full lg:w-[50%] gap-6 firstDiv'>
                <div className='flex flex-wrap gap-4 items-start justify-start'>
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
                    <textarea onChange={handleTranslationText} value={translationText} className="bg-transparent resize-none outline-none text-white w-[100%]" name="translationText" id="translationText" cols={30} rows={6} maxLength={500}></textarea>

                    <p className='text-[#4D5562] text-[14px] absolute right-0 bottom-0'>{translationTextCount}/500</p>
                </div>

                <div className='flex justify-between items-center mt-8'>
                    <div className='flex gap-2'>
                        <img className='border-2 border-[#4D5562] rounded-xl p-2 cursor-pointer' src={soundLogo} alt="" />
                        <img className='border-2 border-[#4D5562] rounded-xl p-2 cursor-pointer' src={copyLogo} alt="" />
                    </div>

                    <button onClick={() => { }} className='text-white px-4 py-3 rounded-xl border-2 bg-[#3662E3] border-[#7CA9F3] text-[16px] font-semibold flex gap-2 justify-between items-center hover:opacity-80 cursor-pointer'>
                        <img src={translatorLogo} alt="" />
                        Translate
                    </button>
                </div>
            </div>

            <div className='h-fit md:h-[367px] bg-[#121826cc] p-8 rounded-3xl w-full lg:w-[50%] gap-6 secondDiv'>
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
                    <textarea value={translatedText} readOnly className="bg-transparent resize-none outline-none text-white w-[100%]" name="translationText" id="translationText" cols={30} rows={6} maxLength={500}></textarea>
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
