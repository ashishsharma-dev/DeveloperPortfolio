import Fade from 'react-reveal/Fade'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'

const Experience = () => {
    return (
        <div className='p-4 flex justify-center xl:flex-nowrap lg:flex-nowrap md:flex-wrap-reverse sm:flex-wrap-reverse min-[320px]:flex-wrap-reverse items-center xl:h-screen lg:h-screen md:h-auto sm:h-auto'>
            <Fade bottom cascade>

                <div className='p-6  xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:text-start lg:text-start md:text-center sm:text-center'>
                    <h2 className="text-6xl text-slate-900 font-bold">
                        Experience
                    </h2>

                    <div className='grid gap-2 mt-6'>
                        {/* <div className='flex items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>

                    </div> */}
                        <div className='flex shadow items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                            <div >
                                <img className='rounded-xl w-16 shadow-lg' src="/omk.jpg" alt="img" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-slate-900">OMK Solutions</p>
                                <p className="text-xs font-semibold text-slate-600">Nov 2022 - Currently Working</p>
                                <p className="text-xs font-bold text-slate-600">Role: Website Developer</p>
                            </div>
                        </div >
                        <div className='flex shadow items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                            <div >
                                <img className='rounded-xl w-16 shadow-lg' src="/cybermount.png" alt="img" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-slate-900">Cybermount Solutions Pvt Ltd</p>
                                <p className="text-xs font-semibold text-slate-600">Dec 2021 - Nov 2022</p>
                                <p className="text-xs font-bold text-slate-600">Role: Technical Content Writer</p>
                            </div>
                        </div >
                        <div className='flex shadow items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 hover:text-white transition-colors'>
                            <div >
                                <img className='rounded-xl w-16 shadow-lg' src="/rife.png" alt="img" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-slate-900">Rife Infotech Pvt Ltd</p>
                                <p className="text-xs font-semibold text-slate-600">Jun 2020 - Dec 2021</p>
                                <p className="text-xs font-bold text-slate-600">Role: Content Writer</p>
                            </div>
                        </div>
                        <div className='flex shadow items-center gap-3 py-2  px-4 bg-white hover:bg-emerald-500 transition-colors'>
                            <div >
                                <img className='rounded-xl w-16 shadow-lg' src="/tp.png" alt="img" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-slate-900">Teleperformance Agra</p>
                                <p className="text-xs font-semibold text-slate-600">Nov 2016 - Jan 2019</p>
                                <p className="text-xs font-bold text-slate-600">Role: Customer Service Associate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full'>
                    <img src="/experience.png" alt="experience-img" />
                </div>
            </Fade>

        </div>
    )
}

export default Experience