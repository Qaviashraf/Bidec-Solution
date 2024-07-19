import React from 'react'
import footerBg from '../assets/footerAssets/footerBlurImg.svg'
import facebookIcon from '../assets/footerAssets/facebookIcon.svg'
import linkedInIcon from '../assets/footerAssets/linkedInIcon.svg'
import instaIcon from '../assets/footerAssets/instaIcon.svg'
import arrow from '../assets/footerAssets/arrow.svg'

function Footer() {
    return (
        <div className="w-full">
            <img className='w-full absolute z-0' src={footerBg} alt="" />
            <div className="container text-center mx-auto absolute z-10">
                <h1 className='text-white mx-screen text-center text-5xl w-3/4 m-32 mb-10'>Lets discuss with us about your project
                </h1>
                <form className='flex justify-center items-center'>
                    <input className='border-b-2 bg-transparent w-1/3 mr-2 text-lg' type="email" placeholder='bidec000@gmail.com' />
                    <button className='rounded-full border-2 p-2'><img src={arrow} alt="" /></button>
                </form>
            </div>
        </div>
    )
}

export default Footer
