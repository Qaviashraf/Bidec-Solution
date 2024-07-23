import React from 'react';
import { FiArrowDownLeft } from "react-icons/fi";
import bgShade from '../assets/HeroSection/Ellipse 18.svg'

export const Blogs = () => {
    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // Repeat some products for demonstration
        {
            id: 5,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 6,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 7,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 8,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
    ];

    return (
        <div className='md:py-32 py-12 justify-center max-w-screen'>
            <img className='absolute left-0 md:block hidden' src={bgShade} alt="" />
            <div className='flex flex-wrap justify-around items-center my-10 px-4'>
                <h1
                    data-aos="fade-right"
                    className='text-3xl md:text-5xl my-2 text-center'>Latest Blogs</h1>
                <div className="flex justify-between"><h1 className='text-4xl md:text-9xl hidden md:block'><FiArrowDownLeft /></h1></div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <img className='absolute left-0 md:hidden block' src={bgShade} alt="" />

                                <div className='w-full'>
                                    <img src={product.imageSrc} alt={product.imageAlt} className='w-full rounded-xl group-hover:opacity-75' />
                                    <div className='my-2 gap-1'>
                                        <h1 className='text-2xl'>The Evolution of UI/UX</h1>
                                        <p className='font-sans text-md'>{product.name}</p>
                                        <p className='font-sans text-sm'>{product.price}</p>
                                    </div>

                                </div>
                                <img className='rotate-180 right-0 absolute md:hidden block' src={bgShade} alt="" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            <img className='rotate-180 right-0 absolute' src={bgShade} alt="" />
        </div>
    )
}
