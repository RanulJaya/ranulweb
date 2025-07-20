/* eslint-disable @next/next/no-img-element */
import './userpage.css'
import { Data, returnName, returnAge } from './data/data'
import { Suspense } from 'react'
import Loading from './Loading/loadingpage'
import Image from 'next/image'



export function test () {  

    if(typeof document === 'undefined'){
        return ("page")
    }
    else
    {
        if (document.getElementById("barside")?.className == "sidebarshow"){
            document.getElementsByClassName("page")[0].className = "slidepage"
        } 
        else{
            document.getElementsByClassName("slidepage")[0].className = "page"
        }
    }
}

export function Home() {

    return (
    <section className= {test()}>
        <div className={"mx-auto max-w-md overflow-hidden bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4 box  md:max-w-2xl"} style= {{marginBottom: 10}}>
         <div className={"flex flex-col sm:flex-row"}>
            <Image  width={150}
                  height={100} className="mx-auto h-40 rounded-full sm:mx-0 sm:shrink-0" src="/Profile-pic.jpg" alt="" />
            <div className="space-x-0 space-y-0 align-text-top">
                <div className="space-y-0 text-right" >
                <p className={"styledark"}>{returnName()}</p>
                <p className="font-medium text-gray-500">Age: {returnAge()}</p>
                </div>
            </div>
            </div>
        </div>



        <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div>
                <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                </span>
            </div>
            <h3 className={"mt-5 text-base font-medium tracking-tight styledark1"}>About Me</h3>
                    
                <Suspense fallback = {<Loading/>}>
                    <p className="mt-2 text-sm text-gray-500">
                        <Data/>
                    </p>
                </Suspense>
        </div>
    </section>
    )

}

