import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
const About = () => {
    return (
        <div className='p-4 flex justify-center xl:flex-nowrap lg:flex-nowrap md:flex-wrap-reverse sm:flex-wrap-reverse min-[320px]:flex-wrap-reverse items-center xl:h-screen lg:h-screen md:h-auto sm:h-auto'>
            <div className='p-6  xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:text-start lg:text-start md:text-center sm:text-center'>
                <h2 className="text-6xl text-slate-900 font-bold">
                    What I do
                </h2>
                <p className='text-xl text-slate-500 mt-4'>
                    A Computer Geek with a hunder to learn latest technologies and implement them in real world to solve problems.
                </p>

                <div className='grid gap-2 grid-cols-2 mt-6'>
                    <div className='flex shadow-sm items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                        <span><FaHtml5 /></span><span className="text-lg font-semibold">HTML5</span>
                    </div >
                    <div className='flex shadow-sm items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                        <span><FaCss3 /></span><span className="text-lg font-semibold">CSS3</span>

                    </div>
                    <div className='flex shadow-sm items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>

                        <span>
                            <img className='w-5' src="/tailwind-css.png" alt="svg-img" />
                        </span>
                        <span className="text-lg font-semibold">TW CSS</span>

                    </div>
                    <div className='flex shadow-sm items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                        <span><FaJs /></span><span className="text-lg font-semibold">JavaScript</span>
                    </div>
                    <div className='flex shadow-sm items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                        <span>
                            <img className='w-5' src="/jquery.svg" alt="png-img" />
                        </span>
                        <span className="text-lg font-semibold">jQuery</span>
                    </div>
                    <div className='flex shadow-sm items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                        <span><FaReact /></span><span className="text-lg font-semibold">React JS</span>
                    </div>
                    <div className='flex shadow-sm items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                        <span>
                            <img className='w-5' src="/firebase.png" alt="webp-img" />
                        </span>
                        <span className="text-lg font-semibold">Firebase</span>
                    </div>
                </div>
            </div>
            <div className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full'>
                <img src="/coder-pro.webp" alt="coder-pro" />
            </div>
        </div>
    )
}

export default About