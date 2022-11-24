import Fade from 'react-reveal/Fade'

const Projects = () => {
    return (
        <div className='p-4 flex justify-center xl:flex-nowrap lg:flex-nowrap md:flex-wrap-reverse sm:flex-wrap-reverse min-[320px]:flex-wrap-reverse items-center xl:h-screen lg:h-screen md:h-auto sm:h-auto'>
            <Fade bottom cascade>

                <div className='p-6  xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:text-start lg:text-start md:text-center sm:text-center'>

                    <h2 className="text-6xl text-slate-900 font-bold">
                        Projects
                    </h2>

                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2 mt-6'>

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>
                            <div>
                                <p className="text-lg font-semibold text-slate-900">Ninja Player UI</p>
                                <p className="text-xs font-semibold text-slate-600 my-2">Responsive Music Player Layout</p>
                                <p className="text-xs font-semibold text-slate-600">HTML, CSS</p>
                                <a href='https://ninjaplayerui.netlify.app/' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline mr-2">View Live</a>
                                <a href='https://github.com/ashishsharma-dev/MusicPlayerUI' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline">GitHub Repo</a>
                            </div>
                        </div >

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>
                            <div>
                                <p className="text-lg font-semibold text-slate-900">WorkToDo V2</p>
                                <p className="text-xs font-semibold text-slate-600 my-2">Daily Task Manager App with LocalStorage Functionality</p>
                                <p className="text-xs font-semibold text-slate-600">HTML, CSS, JS</p>
                                <a href='https://worktodov2.netlify.app/' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline  mr-2">View Live</a>
                                <a href='https://github.com/ashishsharma-dev/Worktodo-v2' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline ">GitHub Repo</a>
                            </div>
                        </div >

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>
                            <div>
                                <p className="text-lg font-semibold text-slate-900">GitHub User Finder</p>
                                <p className="text-xs font-semibold text-slate-600 my-2">GitHub User Finder App with Real Time Data Sync with GitHub API</p>
                                <p className="text-xs font-semibold text-slate-600">Tailwind CSS, React JS</p>
                                <a href='https://github-finder-ashishsharma-dev.vercel.app/' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline mr-2">View Live</a>
                                <a href='https://github.com/ashishsharma-dev/GitHub-Finder' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline">GitHub Repo</a>
                            </div>
                        </div >

                        <div className='flex shadow xl:justify-start lg:justify-start md:justify-center sm:justify-center items-center gap-3 py-2  px-4 bg-white hover:bg-slate-300 transition-colors'>
                            <div>
                                <p className="text-lg font-semibold text-slate-900">House Marketplace App</p>
                                <p className="text-xs font-semibold text-slate-600 my-2">Full Stack House Marketplace App with Mobile First Layout</p>
                                <p className="text-xs font-semibold text-slate-600">CSS, React JS, Firebase</p>
                                <a href='https://house-marketplace-ashishsharma-dev.vercel.app/' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline mr-2">View Live</a>
                                <a href='https://github.com/ashishsharma-dev/HouseMarketplace' target={'_blank'} className="text-xs font-semibold text-cyan-500 underline">GitHub Repo</a>
                            </div>
                        </div >

                    </div>
                </div>
                <div className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full'>
                    <img className='w-96 mx-auto' src="/code.png" alt="code-img" />
                </div>
            </Fade>

        </div>
    )
}

export default Projects