import React from 'react';
import BannerImg from '../assets/Banner.jpg';

export default function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className="space-y-12">
                        <h1 className='text-3xl font-bold '>Hello, welcome here to learn something{" "} <span className='text-pink-500'>new everyday!!</span></h1>
                        <p className='mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quibusdam saepe placeat amet magnam, enim ea eligendi in magni soluta repellendus fugit illo provident recusandae optio nesciunt maiores laborum neque.</p>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn mt-6 btn-secondary">SUBMIT</button>
                </div>
               <div className="relative order-1 w-full md:w-1/2">
  <img src={BannerImg} alt="Banner" className="w-full h-auto" />
  <div className="absolute inset-0 bg-black/0 dark:bg-black/60 transition-all duration-500"></div>
</div>

            </div>
        </>
    );
}