import './globals.css'
import styles from './user.module.css'
import './userpage.css'
import Sidebar  from './sidebar'
import NavBar from './navigationsidebar'
import Link from 'next/link'
import { Home } from './Home'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Ranul's Website",
  description: "Website",
};



export default function Page() {
  
  return (
  <section>
        <div className={styles.move}>
          
            <Link className='font-bold italic' style={{position: "relative", top: 30, left: 10}}    href={{
                    pathname: '/',
                    query: { name: 'test1' },
                }}>Ranul J</Link>
          <ul className='test'>
              <Link className='font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 transition-transform'
                href={{
                    pathname: '/',
                    query: { name: 'test' },
                }}
              >
              About us
              </Link>
              <Link className='font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100'
                href={{
                    pathname: '/',
                    query: { slug: 'my-post' },
                }}
              >
              Blog Post 
              </Link>
            </ul>
        </div>
        <Home/>  
        <Sidebar/>
        <NavBar/>
  </section>
  )
}

