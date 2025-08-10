import './globals.css'
import './userpage.css'
import Sidebar  from './sidebar'
import NavBar from './navigationsidebar'
import { Home } from './Home'
import { Metadata } from 'next'
import TopNav from './Navigation/NavBar'


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
        <TopNav/>
        <Home/>
        <Sidebar/>
        <NavBar/>
        
  </section>
  )
}

