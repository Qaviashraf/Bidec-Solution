import React from 'react'
import footerBg from '../assets/footerAssets/footerBlurImg.svg'
// import facebook from '../assets/footerAssets/Mask group.svg'

function Footer() {
    return (
        <div className="w-full">
            <img className='w-full absolute z-0' src={footerBg} alt="" />
            <div className="container mx-auto p-4 absolute z-10">
                <h1 className='text-white text-3xl'>hello</h1>
            </div>
        </div>
    )
}

export default Footer
