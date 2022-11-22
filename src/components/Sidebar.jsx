import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaIdCard, FaRocket, FaUniversity, FaCode, FaCertificate, FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa'
const Sidebar = ({ hideControl }) => {
    return (
        <>
            <aside id={hideControl ? 'hideControl' : ''} className='bg-slate-500 py-3 px-8 border w-64 float-left h-screen hideScrollBar overflow-y-scroll'>
                <nav className=' py-4 px-2 flex flex-col justify-between' >
                    <div className='py-6'>
                        <ul>
                            <li className='text-lg font-semibold text-white py-4 inline-block'>
                                {'<'}
                                <Link to={'/'} className='customFont'>
                                    <span>Ashish Sharma</span>
                                </Link>
                                {' />'}
                            </li>
                        </ul>
                    </div>
                    <div className='py-6'>
                        <ul className='flex flex-col gap-1'>
                            <li>
                                <NavLink to={'/about'} className='flex items-center text-xl font-semibold hover:text-emerald-400 transition-all text-white py-4 px-4'> <FaIdCard className='mr-4' color='#fff' /> About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/proficiency'} className='flex items-center text-xl font-semibold hover:text-emerald-400 transition-all text-white py-4 px-4'> <FaRocket className='mr-4' color='#fff' /> Experience</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/education'} className='flex items-center text-xl font-semibold hover:text-emerald-400 transition-all text-white py-4 px-4'> <FaUniversity className='mr-4' color='#fff' /> Education</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/projects'} className='flex items-center text-xl font-semibold hover:text-emerald-400 transition-all text-white py-4 px-4'> <FaCode className='mr-4' color='#fff' /> Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/certificates'} className='flex items-center text-xl font-semibold hover:text-emerald-400 transition-all text-white py-4 px-4'> <FaCertificate className='mr-4' color='#fff' /> Certificates</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'} className='flex items-center text-xl font-semibold hover:text-emerald-400 transition-all text-white py-4 px-4'> <FaPhone className='mr-4' color='#fff' /> Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='py-6'>
                        <ul className='flex justify-between text-white text-lg'>
                            <li>
                                <a target={'_blank'} href='https://github.com/ashishsharma-dev' className='hover:text-emerald-400 transition-colors'>
                                    <FaGithub />
                                </a>

                            </li>
                            <li>
                                <a target={'_blank'} href='https://www.linkedin.com/in/ashishsharma-dev/' className='hover:text-emerald-400 transition-colors'>
                                    <FaLinkedin />
                                </a>

                            </li>
                            <li>
                                <a target={'_blank'} href='mailto:sharmaashish049@gmail.com' className='hover:text-emerald-400 transition-colors'>
                                    <FaEnvelope />
                                </a>

                            </li>
                            <li>
                                <a target={'_blank'} href='https://www.facebook.com/profile.php?id=100002441707505' className='hover:text-emerald-400 transition-colors'>
                                    <FaFacebook />
                                </a>

                            </li>
                        </ul>
                    </div>

                </nav>

                <footer className='text-sm text-center font-semibold text-white hover:text-emerald-400 transition-colors'>
                    Designed & Developed by <a href="/">Ashish Sharma</a>
                </footer>

            </aside>
        </>
    )
}

export default Sidebar