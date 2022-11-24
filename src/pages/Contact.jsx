import Fade from 'react-reveal/Fade'

const Contact = () => {
    return (
        <div className='p-4 flex justify-center xl:flex-nowrap lg:flex-nowrap md:flex-wrap-reverse sm:flex-wrap-reverse min-[320px]:flex-wrap-reverse items-center xl:h-screen lg:h-screen md:h-auto sm:h-auto'>
            <Fade bottom cascade>

                <div className='p-6  xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:text-start lg:text-start md:text-center sm:text-center'>
                    <h2 className="text-6xl text-slate-900 font-bold">
                        Say Hello!
                    </h2>

                    <div className='grid gap-2 mt-6 bg-white p-4'>

                        <form action="https://formspree.io/f/mrgdpqpl" method="POST" class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="First Name" type="text" placeholder="John" />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="Last Name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                                        Email
                                    </label>
                                    <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name="Email" type="email" placeholder="eg. john@email.com" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-textarea">
                                        Write Here
                                    </label>
                                    <textarea required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textarea" name="Message" placeholder="Hello there!" />
                                </div>
                            </div>
                            <button className='rounded-md bg-emerald-500 text-white font-semibold mt-4 py-2 px-4'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full'>
                    <img src="/chit-chat.webp" alt="chit-chat-img" />
                </div>
            </Fade>

        </div>
    )
}

export default Contact