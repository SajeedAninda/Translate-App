import React, { useState, useEffect } from 'react';
import soundLogo from "../../assets/sound_max_fill.svg";
import copyLogo from "../../assets/Copy.svg";
import translatorLogo from "../../assets/Sort_alfa.svg";
import exchangeIcon from "../../assets/Horizontal_top_left_main.svg";

const Translator = () => {
    const [activeTranslatableButton, setActiveTranslatableButton] = useState('English');
    const [activeTranslatedButton, setActiveTranslatedButton] = useState('French');
    const [translationTextCount, setTranslationTextCount] = useState(0);
    const [translationText, setTranslationText] = useState('Hello, how are you?');
    const [translatedText, setTranslatedText] = useState("");
    const [translatableLangCode, setTranslatableLangCode] = useState('en');
    const [translatedLangCode, setTranslatedLangCode] = useState('fr');

    const handleTranslatableButtonClick = (buttonName, langCode) => {
        setActiveTranslatableButton(buttonName);
        setTranslatableLangCode(langCode);
    }

    const handleTranslatedButtonClick = (buttonName, langCode) => {
        setActiveTranslatedButton(buttonName);
        setTranslatedLangCode(langCode);
    }

    const handleTranslationText = (e) => {
        let translationText = e.target.value;
        setTranslationText(translationText);
        setTranslationTextCount(translationText.length);
    }

    const swapLanguages = () => {
        setActiveTranslatableButton(activeTranslatedButton);
        setActiveTranslatedButton(activeTranslatableButton);

        setTranslatableLangCode(translatedLangCode);
        setTranslatedLangCode(translatableLangCode);
    }

    useEffect(() => {
        const translateText = async () => {
            if (!translationText) {
                setTranslatedText(""); // Clear translation if there's no input
                return;
            }
            try {
                const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(translationText)}&langpair=${translatableLangCode}|${translatedLangCode}`);
                const data = await response.json();
                setTranslatedText(data.responseData.translatedText);
            } catch (error) {
                console.error("Error translating text:", error);
            }
        };

        translateText();
    }, [translationText, translatableLangCode, translatedLangCode]);

    return (
        <div className='w-[90%] mx-auto py-16 flex flex-col lg:flex-row justify-between gap-6 items-center'>
            {/* Left Div */}
            <div className='h-fit md:h-[367px] bg-[#212936cc] p-8 rounded-3xl w-full lg:w-[50%] gap-6 firstDiv'>
                <div className='flex flex-wrap gap-4 items-start justify-start'>
                    <button onClick={() => handleTranslatableButtonClick("Detect Language", "")} className='text-[16px] font-semibold cursor-pointer py-2 rounded-xl text-[#4D5562]'>
                        Detect Language
                    </button>
                    <button
                        onClick={() => handleTranslatableButtonClick("English", 'en')}
                        className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeTranslatableButton === 'English' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'}`}
                    >
                        English
                    </button>
                    <button onClick={() => handleTranslatableButtonClick("French", 'fr')} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeTranslatableButton === 'French' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'}`}>
                        French
                    </button>
                    <button onClick={() => handleTranslatableButtonClick("Spanish", 'es')} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeTranslatableButton === 'Spanish' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'}`}>
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

            {/* Right Div */}
            <div className='h-fit md:h-[367px] bg-[#121826cc] p-8 rounded-3xl w-full lg:w-[50%] gap-6 secondDiv'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-start justify-start'>
                        <button
                            onClick={() => handleTranslatedButtonClick("English", 'en')}
                            className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeTranslatedButton === 'English' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'}`}
                        >
                            English
                        </button>
                        <button onClick={() => handleTranslatedButtonClick("French", 'fr')} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeTranslatedButton === 'French' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'}`}>
                            French
                        </button>
                        <button onClick={() => handleTranslatedButtonClick("Spanish", 'es')} className={`text-[16px] font-semibold cursor-pointer px-3 py-2 rounded-xl ${activeTranslatedButton === 'Spanish' ? 'bg-[#4D5562] text-[#CDD5E0]' : 'text-[#4D5562] bg-transparent'}`}>
                            Spanish
                        </button>
                    </div>

                    <img className='border-2 border-[#4D5562] rounded-xl p-2 cursor-pointer' src={exchangeIcon} alt="" onClick={swapLanguages} />
                </div>

                <hr className="w-[100%] border border-[#4D5562] mt-4 mb-2 opacity-75" />

                <div className=''>
                    <textarea value={translatedText} readOnly className="bg-transparent resize-none outline-none text-white w-[100%]" name="translatedText" id="translatedText" cols={30} rows={6} maxLength={500}></textarea>
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
