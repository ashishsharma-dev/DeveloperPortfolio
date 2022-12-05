import Fade from 'react-reveal/Fade'

const Certificates = () => {
    return (
        <div className='p-4 flex justify-center xl:flex-nowrap lg:flex-nowrap md:flex-wrap-reverse sm:flex-wrap-reverse min-[320px]:flex-wrap-reverse items-center xl:h-screen lg:h-screen md:h-auto sm:h-auto'>
            <Fade bottom cascade>
                <div className='p-6  xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:text-start lg:text-start md:text-center sm:text-center'>
                    <h2 className="text-6xl text-slate-900 font-bold">
                        Certificates
                    </h2>

                    <div className='grid grid-cols-2 gap-2 mt-6'>

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>

                            <div>
                                <p className="text-lg font-semibold text-slate-900">Introduction to Java</p>
                                <p className="text-xs font-semibold text-slate-600">Coding Ninjas</p>
                                <a href='https://drive.google.com/file/d/18A_5Oa15_XybwI5wiaoMgN3DZGwYxc4p/view' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline">View Credentials</a>
                            </div>
                        </div >

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>

                            <div>
                                <p className="text-lg font-semibold text-slate-900">DSA in Java</p>
                                <p className="text-xs font-semibold text-slate-600">Coding Ninjas</p>
                                <a href='https://drive.google.com/file/d/1O5tKnWTqZ9JI7ezuqO6V3lHHN_L1ddUG/view' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline">View Credentials</a>
                            </div>
                        </div >

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>

                            <div>
                                <p className="text-lg font-semibold text-slate-900">Frontend Web Development</p>
                                <p className="text-xs font-semibold text-slate-600">Coding Ninjas</p>
                                <a href='https://drive.google.com/file/d/1uqpehqda-DucDGHXVmy-zB3o6bMWblXU/view' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline">View Credentials</a>
                            </div>
                        </div >

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>

                            <div>
                                <p className="text-lg font-semibold text-slate-900">Backend Web Development</p>
                                <p className="text-xs font-semibold text-slate-600">Coding Ninjas</p>
                                <a href='https://drive.google.com/file/d/1Z1nKjwk1-Zx2UpKwXLYzrRKnojaYolle/view' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline">View Credentials</a>
                            </div>
                        </div >

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>

                            <div>
                                <p className="text-lg font-semibold text-slate-900">Responsive Web Design</p>
                                <p className="text-xs font-semibold text-slate-600">freeCodeCamp</p>
                                <a href='https://drive.google.com/file/d/18A_5Oa15_XybwI5wiaoMgN3DZGwYxc4p/view' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline">View Credentials</a>
                            </div>
                        </div >

                    </div>
                </div>
                <div className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full'>
                    <img src="/certificates.webp" alt="certificates-img" />
                </div>
            </Fade>
        </div>
    )
}

export default Certificates