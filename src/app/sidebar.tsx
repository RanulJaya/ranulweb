'use client'
import './userpage.css'
import { test } from './Home'


export default function Sidebar() {

    const handleChange = () => {     
        

        if(document.getElementById("barside")?.className == "sidebarshow"){
            document.getElementsByClassName("sidebarshow")[0].className = "visibility: hidden"
            document.getElementsByTagName("a")[3].className = "visibility: hidden"
            document.getElementsByTagName("a")[4].className = "visibility: hidden"

        }
        else{
            document.getElementsByClassName("visibility: hidden")[0].className = "sidebarshow"
            document.getElementsByTagName("a")[3].className = "text-1xl font-bold"
            document.getElementsByTagName("a")[4].className = "text-1xl font-bold"

        }

        test()
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