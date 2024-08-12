import React from 'react';
import "./home.css"
import logo from "../../assets/logo.svg"
import Translator from '../Translator/Translator';

const Home = () => {
    return (
        <div className='h-[100vh] w-full homeBg'>
            <div className='flex justify-center items-center pt-20'>
                <img className='w-[150px]' src={logo} alt="" />
            </div>

            <Translator></Translator>
        </div>
    );
};

export default Home;