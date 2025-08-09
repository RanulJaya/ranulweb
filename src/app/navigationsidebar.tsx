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
                        About me
                        </Link>
                    </li>
                    <li>
                        <Link className='visibility: hidden'
                        href={{
                            pathname: '/',
                            query: { slug: 'my-post' },
                        }}
                        >
                        Projects 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
} 

