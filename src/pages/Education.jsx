import React from 'react'

const Education = () => {
    return (
        <div className='p-4 flex justify-center xl:flex-nowrap lg:flex-nowrap md:flex-wrap-reverse sm:flex-wrap-reverse min-[320px]:flex-wrap-reverse items-center xl:h-screen lg:h-screen md:h-auto sm:h-auto'>
            <div className='p-6  xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:text-start lg:text-start md:text-center sm:text-center'>
                <h2 className="text-6xl text-slate-900 font-bold">
                    Education
                </h2>

                <div className='grid gap-2 mt-6'>

                    <div className='flex shadow items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                        <div >
                            <img className='rounded-full w-16 shadow-lg' src="/dbrau.png" alt="img" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-slate-900">Dr. Bhim Rao Ambedkar University</p>
                            <p className="text-xs font-semibold text-slate-600">2013 - 2016</p>
                            <p className="text-xs font-bold text-slate-600">B.Sc - Bachelor of Science</p>
                        </div>
                    </div >

                </div>
            </div>
            <div className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full'>
                <img src="/education.webp" alt="education-img" />
            </div>
        </div>
    )
}

export default Education