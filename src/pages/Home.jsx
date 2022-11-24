import React from 'react'
import Fade from 'react-reveal/Fade'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='p-4 flex justify-center xl:flex-nowrap lg:flex-nowrap md:flex-wrap-reverse sm:flex-wrap-reverse min-[320px]:flex-wrap-reverse items-center xl:h-screen lg:h-screen md:h-auto sm:h-auto'>
            <Fade bottom cascade>
                <div className='p-6  xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:text-start lg:text-start md:text-center sm:text-center'>
                    <h2 className="text-6xl text-slate-900 font-bold">
                        Hi, all I'm Ashish
                    </h2>
                    <p className="text-xl text-slate-500 mt-4">
                        A passionate Front End Website Developer 🚀 having an experience of building beautiful Websites and Web Apps with JavaScript / React JS / Tailwind CSS and Firebase.
                    </p>
                    <div className='flex gap-4 mt-6 text-slate-900 xl:justify-start lg:justify-start md:justify-center sm:justify-center'>
                        <span>
                            <a target={'_blank'} href='https://github.com/ashishsharma-dev' className='hover:text-emerald-500 transition-colors'>
                                <FaGithub size={25} />
                            </a>
                        </span>
                        <span>
                            <a target={'_blank'} href='https://www.linkedin.com/in/ashishsharma-dev/' className='hover:text-emerald-500 transition-colors'>
                                <FaLinkedin size={25} />
                            </a>
                        </span>
                        <span>
                            <a target={'_blank'} href='mailto:sharmaashish049@gmail.com' className='hover:text-emerald-500 transition-colors'>
                                <FaEnvelope size={25} />
                            </a>
                        </span>
                        <span>
                            <a target={'_blank'} href='https://www.facebook.com/profile.php?id=100002441707505' className='hover:text-emerald-500 transition-colors'>
                                <FaFacebook size={25} />
                            </a>
                        </span>
                    </div>

                    <div className="mt-6">
                        <button onClick={() => navigate('/contact')} className='rounded-lg py-2 px-4 text-lg font-semibold bg-emerald-400 hover:bg-emerald-500 transition-colors  mr-4'>Contact Me</button>
                        <a href='https://drive.google.com/file/d/1MxsKC6uIaXA2yxMymjdU7mRXuH7njqgA/view?usp=share_link' target='_blank' className='rounded-lg py-2 px-4 text-lg font-semibold bg-emerald-400 hover:bg-emerald-500 transition-colors '>See Resume</a>
                    </div>
                </div>
                <div className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full'>
                    <img src="/coder.webp" alt="code-image" />
                </div>
            </Fade>

        </div>
    )
}

export default Home