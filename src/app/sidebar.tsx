'use client'
import './userpage.css'
import { changeOccurance } from './Home'


export default function Sidebar() {

    const handleChange = () => {     
        

        if(document.getElementById("barside")?.className == "sidebarshow"){
            document.getElementsByClassName("sidebarshow")[0].className = "visibility: hidden"
            document.getElementsByTagName("button")[2].className = "visibility: hidden"
            document.getElementsByTagName("button")[3].className = "visibility: hidden"

        }
        else{
            document.getElementsByClassName("visibility: hidden")[0].className = "sidebarshow"
            document.getElementsByTagName("button")[2].className = "text-1xl font-bold rounded-lg px-3 py-2 dark:text-gray-700 motion-translate-x-in-[-1%] motion-translate-y-in-[-85%] motion-duration-[0.42s]/translate hover:bg-gray-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            document.getElementsByTagName("button")[3].className = "text-1xl font-bold rounded-lg px-3 py-2 dark:text-gray-700 motion-translate-x-in-[-1%] motion-translate-y-in-[-85%] motion-duration-[0.42s]/translate hover:bg-gray-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"

        }

        changeOccurance()
    }



    return (
        <div className={'div1'}>
        
            <div className={"click"}  onClick = {handleChange}>
                <div className={"icon"}></div>
                <div className={"icon"}></div>
                <div className={"icon"}></div>
            </div>
        </div>
    )
}