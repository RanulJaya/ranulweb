//import style from './userpage.css'
import Link from 'next/link'


 export default function NavigationSideBar() { 
    return (
        
        <div>
            <div className='visibility: hidden' id='barside'>
                <ul>
                    <li>
                        <Link className='visibility: hidden'
                        href={{
                            pathname: '/',
                            query: { name: 'test' },
                        }}
                        >
                        About us
                        </Link>
                    </li>
                    <li>
                        <Link className='visibility: hidden'
                        href={{
                            pathname: '/',
                            query: { slug: 'my-post' },
                        }}
                        >
                        Blog Post 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
} 

