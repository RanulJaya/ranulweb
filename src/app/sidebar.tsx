'use client'
import './userpage.css'
import { test } from './Home'


export default function Sidebar() {

    const handleChange = () => {     
        

        if(document.getElementById("barside")?.className == "sidebarshow"){
            document.getElementsByClassName("sidebarshow")[0].className = "visibility: hidden"
            document.getElementsByTagName("a")[5].className = "visibility: hidden"
            document.getElementsByTagName("a")[6].className = "visibility: hidden"

        }
        else{
            document.getElementsByClassName("visibility: hidden")[0].className = "sidebarshow"
            document.getElementsByTagName("a")[5].className = "text-1xl font-bold"
            document.getElementsByTagName("a")[6].className = "text-1xl font-bold"

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