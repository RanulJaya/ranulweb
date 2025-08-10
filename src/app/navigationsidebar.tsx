'use client'

 export default function NavigationSideBar() { 
    return (
        
        <div>
            <div className='visibility: hidden' id='barside'>
                <ul>
                    <li>
                        <button className='visibility: hidden'
                        onClick={() => console.log("About me clicked")}>
                        About me
                        </button>
                    </li>
                    <li>
                        <button className='visibility: hidden'
                        onClick={() => console.log("Projects clicked")}>
                        Projects 
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
} 

