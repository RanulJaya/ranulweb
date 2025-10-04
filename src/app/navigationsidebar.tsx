'use client'

 export default function NavigationSideBar() { 
    return (
        
        <div>
            <div className='visibility: hidden' id='barside'>
                <ul>
                    <li>
                        <button className='visibility: hidden'
                        onClick={() => {
                                    const panel = document.getElementsByClassName(
                                        "getpanel bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 motion-scale-in-[0.5] motion-translate-x-in-[13%] motion-translate-y-in-[109%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.53s]/scale " +
                                        "motion-duration-[0.00s]/translate motion-duration-[0.35s]/opacity motion-duration-[0.63s]/rotate motion-duration-[0.27s]/blur motion-ease-spring-bouncy"
                                    )[0];

                                        if (panel) {
                                    panel.animate([
                                    {
                                        transform: 'scale(1.0)',
                                        opacity: 1
                                    },
                                    {
                                        transform: 'scale(1.05)',
                                        opacity: 1
                                    },
                                    {
                                        transform: 'scale(1)',
                                        opacity: 1
                                    }
                                    ], {
                                    duration: 1000,
                                    fill: 'forwards',
                                    easing: 'cubic-bezier(.17,.67,.83,1.57)'
                                    });
                                }
                        }}>
                        About me
                        </button>
                    </li>

                    <li>
                        <button className='visibility: hidden'
                            onClick={() => {
                                    const panel = document.getElementsByClassName(
                                        "motion-preset-expand mx-auto max-w-md overflow-hidden bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4 box  md:max-w-2xl transition-transform duration-200 ease-out hover:scale-[1.01] flex flex-col"
                                    )[0];
                                    if (panel) {
                                        panel.animate([
                                        {
                                            transform: 'scale(1.0)',
                                            opacity: 1
                                        },
                                        {
                                            transform: 'scale(1.05)',
                                            opacity: 1
                                        },
                                        {
                                            transform: 'scale(1)',
                                            opacity: 1
                                        }
                                        ], {
                                        duration: 1000,
                                        fill: 'forwards',
                                        easing: 'cubic-bezier(.17,.67,.83,1.57)'
                                        });
                                    }
                            }}>
                            Projects 
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
} 

