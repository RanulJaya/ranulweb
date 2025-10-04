'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../user.module.css'



export default function NavBar() {

    const AboutmeClicked = () => {
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
    }

    const ProjectClicked = () => {
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
    }

    return (
        <div className={styles.move + " motion-translate-x-in-[-1%] motion-translate-y-in-[-85%] motion-duration-[0.42s]/translate"}>
          <ul className='test'>
              <Link className='font-bold italic'   
              href={{
                    pathname: '/'
                }}>    {<Image  className='outline-1 dark:outline-white outline-neutral-950' width={100}
                                  height={100} src="./RanulJaya.png" alt="" />}</Link>

              <button 
                className={'text-1xl font-bold rounded-lg px-3 py-2 dark:text-gray-700 motion-translate-x-in-[-1%] motion-translate-y-in-[-85%] motion-duration-[0.42s]/translate hover:bg-gray-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'}
                style={{ position: "absolute", left: 140, bottom: 25 }}
                onClick={AboutmeClicked}
              >
              About me
              </button>

              <button className='text-1xl font-bold rounded-lg px-3 py-2 dark:text-gray-700 motion-translate-x-in-[-1%] motion-translate-y-in-[-85%] motion-duration-[0.42s]/translate hover:bg-gray-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                style={{position: "absolute", left: 290, bottom: 25}}
                onClick={ProjectClicked}
                >
                Projects
              </button>
            </ul>
        </div>
    )
}