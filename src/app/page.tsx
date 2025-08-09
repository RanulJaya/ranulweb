import './globals.css'
import styles from './user.module.css'
import './userpage.css'
import Sidebar  from './sidebar'
import NavBar from './navigationsidebar'
import Link from 'next/link'
import { Home } from './Home'
import { Metadata } from 'next'
import Image from 'next/image'


export const metadata: Metadata = {
  title: "Ranul's Website",
  description: "Website",
};



export default function Page() {
  
  return (
  <section>
      <div className="pointer-events-none absolute left-1/12  top-0 -z-10 -translate-x-1/4" aria-hidden="true">
          <img alt="Page illustration" loading="lazy" width="846" height="594" decoding="async" data-nimg="1" className="max-w-none" style={{color:"transparent"}} src="./background.svg"/>
      </div>
        <div className={styles.move + " motion-translate-x-in-[-1%] motion-translate-y-in-[-85%] motion-duration-[0.42s]/translate"}>
          

          <ul className='test'>
              <Link className='font-bold italic'   
              href={{
                    pathname: '/',
                    query: { name: 'test1' },
                }}>    {<Image  className='outline-1 dark:outline-white outline-neutral-950' width={100}
                                  height={100} src="./RanulJaya.png" alt="" />}</Link>

              <Link className='font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 transition-transform'
                href={{
                    pathname: '/',
                    query: { name: 'test' },
                }} style={{position: "absolute", left: 140, bottom: 25}}
              >
              About me
              </Link>
              <Link className='font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100'
                href={{
                    pathname: '/',
                    query: { slug: 'my-post' },
                }} style={{position: "absolute", left: 290, bottom: 25}}
              >
              Projects
              </Link>
            </ul>
        </div>
        <Home/>
        <Sidebar/>
        <NavBar/>
        
  </section>
  )
}

